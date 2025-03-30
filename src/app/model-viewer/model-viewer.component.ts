import { Component, ElementRef, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Engine, Scene, UniversalCamera, HemisphericLight, Vector3, CannonJSPlugin, Color4, StandardMaterial, Color3 } from '@babylonjs/core';
import { ImportMeshAsync } from '@babylonjs/core';
import '@babylonjs/loaders/glTF/2.0/glTFLoader';
import * as CANNON from 'cannon-es';

@Component({
  selector: 'app-model-viewer',
  templateUrl: './model-viewer.component.html',
  styleUrl: './model-viewer.component.scss',
  standalone: false
})
export class ModelViewerComponent {
  @ViewChild('renderCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  @Input() modelPath: string = '/assets/room.glb';
  @Input() height: string = 'calc(100vh - 120px)';
  @Input() antialias: boolean = true;
  @Input() engineOptions = {
    preserveDrawingBuffer: true,
    stencil: true,
    disableWebGL2Support: false // Forsiraj WebGL2
  };

  @Input() adaptToDeviceRatio: boolean = false;
  @Input() sceneOptions?: any;
  @Input() cameraConfig: {
    speed?: number;
    inertia?: number;
    eyeHeight?: number;
    startPosition?: Vector3;
    bounds?: { minX: number; maxX: number; minZ: number; maxZ: number };
  } = {
    speed: 0.1, // Povećana brzina za bolju responsivnost
    inertia: 0.8, // Smanjena inercija za manje klizanja
    eyeHeight: 1.6,
    startPosition: new Vector3(0, 1.6, 0),
    bounds: { minX: -20, maxX: 20, minZ: -20, maxZ: 20 }
  };

  @Output() meshSelected = new EventEmitter<any>();

  private engine!: Engine;
  private scene!: Scene;
  private camera!: UniversalCamera;
  private isModelLoaded = false;
  private lastLoadedModelPath: string | null = null;

  ngOnInit() {
    this.initializeScene();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['modelPath'] && this.scene) {
      this.loadModel(this.scene);
    }
  }

  ngOnDestroy() {
    this.scene?.getEngine().dispose();
    window.removeEventListener('resize', this.handleResize);
  }

  private initializeScene() {
    const canvas = this.canvasRef.nativeElement;
    if (!canvas) return;

    this.engine = new Engine(canvas, this.antialias, this.engineOptions, this.adaptToDeviceRatio);
    this.scene = new Scene(this.engine, this.sceneOptions);
    this.scene.clearColor = new Color4(1, 1, 1, 1);
    this.scene.enablePhysics(new Vector3(0, -1, 0), new CannonJSPlugin(undefined, undefined, CANNON)); // Još manja gravitacija
    this.scene.collisionsEnabled = true;

    const { speed, inertia, eyeHeight, startPosition, bounds } = this.cameraConfig;
    this.camera = new UniversalCamera('camera', startPosition ?? new Vector3(0, 1.6, 0), this.scene);
    this.camera.setTarget(new Vector3(0, eyeHeight ?? 1.6, 1));
    this.camera.attachControl(canvas, true);
    this.camera.speed = speed ?? 0.1;
    this.camera.inertia = inertia ?? 0.8;
    this.camera.angularSensibility = 2000;
    this.camera.applyGravity = false; // Isključena gravitacija za glatkost
    this.camera.checkCollisions = true;
    this.camera.ellipsoid = new Vector3(0.15, (eyeHeight ?? 1.6) / 2, 0.15); // Smanjen ellipsoid za manje zapinjanja

    // this.camera.keysUp = [38];    // Up arrow
    // this.camera.keysDown = [40];  // Down arrow
    // this.camera.keysLeft = [37];  // Left arrow
    // this.camera.keysRight = [39]; // Right arrow

     // Keyboard controls
     this.camera.keysUp = [87];    // W
     this.camera.keysDown = [83];  // S
     this.camera.keysLeft = [65];  // A
     this.camera.keysRight = [68]; // D
 

    this.scene.onBeforeRenderObservable.add(() => {
      const adjustedEyeHeight = eyeHeight ?? 1.6;
      const adjustedBounds = bounds ?? { minX: -20, maxX: 20, minZ: -20, maxZ: 20 };
      // Fiksiraj visinu bez gravitacije
      this.camera.position.y = adjustedEyeHeight;
      const ellipsoidOffsetX = this.camera.ellipsoid.x;
      const ellipsoidOffsetZ = this.camera.ellipsoid.z;
      this.camera.position.x = Math.max(adjustedBounds.minX + ellipsoidOffsetX, Math.min(adjustedBounds.maxX - ellipsoidOffsetX, this.camera.position.x));
      this.camera.position.z = Math.max(adjustedBounds.minZ + ellipsoidOffsetZ, Math.min(adjustedBounds.maxZ - ellipsoidOffsetZ, this.camera.position.z));
    });

    new HemisphericLight('light', new Vector3(0, 1, 0), this.scene).intensity = 0.7;


    this.scene.onPointerObservable.add((pointerInfo) => {
      if (pointerInfo.type === 32) {
        const pickedMesh = pointerInfo.pickInfo?.pickedMesh;
        if (pickedMesh) {
          this.meshSelected.emit({
            mesh: pickedMesh,
            position: pickedMesh.position.asArray(),
            pointerEvent: pointerInfo.event as PointerEvent
          });
        }
      }
    });

    this.loadModel(this.scene);

    this.engine.runRenderLoop(() => {
      this.scene.render();
    });

    window.addEventListener('resize', this.handleResize);
  }

  private loadModel(scene: Scene) {
    if (this.lastLoadedModelPath === this.modelPath && this.isModelLoaded) {
      return;
    }
  
    // Očisti postojeće mesheve osim svetla
    scene.meshes.forEach((mesh) => {
      if (!mesh.name.includes('light')) {
        mesh.dispose();
      }
    });
  
    this.isModelLoaded = true;
    this.lastLoadedModelPath = this.modelPath;
  
    ImportMeshAsync(this.modelPath, scene)
      .then((result) => {

        result.meshes.forEach((mesh) => {
          mesh.checkCollisions = true;
          mesh.receiveShadows = true;

          if (!mesh.material) {
            const debugMat = new StandardMaterial("debugMat", scene);
            debugMat.diffuseColor = new Color3(1, 0, 0); // Crvena boja za debug
            mesh.material = debugMat;
          }
        });
  
        // Izračunaj centar modela
        const worldExtends = scene.getWorldExtends();
        const modelCenter = worldExtends.min.add(worldExtends.max).scale(0.5);
        const eyeHeight = this.cameraConfig.eyeHeight ?? 1.6;
  
        // Postavi poziciju kamere u centar modela na visini eyeHeight
        this.camera.position = new Vector3(modelCenter.x, eyeHeight, modelCenter.z);
  
        // Postavi cilj kamere da gleda "ka unutra" (malo pomeranje po Z-osi)
        this.camera.setTarget(new Vector3(modelCenter.x, eyeHeight, modelCenter.z + 0.1));
      })
      .catch((error: any) => {
        console.error('Error loading model:', error);
        this.isModelLoaded = false;
        this.lastLoadedModelPath = null;
      });
  }

  private handleResize = () => {
    this.engine?.resize();
  };
}