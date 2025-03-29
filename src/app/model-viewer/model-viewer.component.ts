import { Component, ElementRef, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Engine, Scene, ArcRotateCamera, HemisphericLight, Vector3 } from '@babylonjs/core';
import { ImportMeshAsync } from '@babylonjs/core';
import '@babylonjs/loaders/glTF/2.0/glTFLoader';
@Component({
  selector: 'app-model-viewer',
  templateUrl: './model-viewer.component.html',
  styleUrl: './model-viewer.component.scss',
  standalone:false
})
export class ModelViewerComponent {

  @ViewChild('renderCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  @Input() modelPath: string = '/assets/Box.glb'; // Podrazumevana putanja do modela
  @Input() height: string = 'calc(100vh - 120px)'; // Podrazumevana visina
  @Input() antialias: boolean = true; // Antialiasing za Babylon.js engine
  @Input() engineOptions?: any; // Opcionalne opcije za engine
  @Input() adaptToDeviceRatio: boolean = false; // Prilagođavanje device ratio-u
  @Input() sceneOptions?: any; // Opcionalne opcije za scenu
  @Input() cameraConfig: {
    alpha?: number;
    beta?: number;
    radius?: number;
    target?: Vector3;
    wheelPrecision?: number;
    panningSensibility?: number;
    lowerRadiusLimit?: number;
    upperRadiusLimit?: number;
    panningInertia?: number;
    inertia?: number;
  } = {}; // Konfiguracija kamere
  @Output() meshSelected = new EventEmitter<any>(); // Događaj za klik na mesh

  private engine!: Engine;
  private scene!: Scene;
  private cameraState: {
    alpha: number;
    beta: number;
    radius: number;
    target: Vector3;
  } | null = null;
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
    this.cameraState = null;
    this.isModelLoaded = false;
    this.lastLoadedModelPath = null;
    this.scene = undefined as any;
    this.engine = undefined as any;
  }

  private initializeScene() {
    const canvas = this.canvasRef.nativeElement;
    if (!canvas) return;

    // Inicijalizacija Babylon.js engine-a i scene
    this.engine = new Engine(canvas, this.antialias, this.engineOptions, this.adaptToDeviceRatio);
    this.scene = new Scene(this.engine, this.sceneOptions);

    // Postavi osnovne scene postavke
    this.scene.collisionsEnabled = true;
    this.scene.gravity = new Vector3(0, -9.81, 0);

    // Kreiraj kameru sa podrazumevanim ili prosleđenim vrednostima
    const camera = new ArcRotateCamera(
      'camera',
      this.cameraConfig.alpha ?? Math.PI / 2,
      this.cameraConfig.beta ?? Math.PI / 2.5,
      this.cameraConfig.radius ?? 10,
      this.cameraConfig.target ?? Vector3.Zero(),
      this.scene
    );
    camera.attachControl(true);
    camera.wheelPrecision = this.cameraConfig.wheelPrecision ?? 50;
    camera.panningSensibility = this.cameraConfig.panningSensibility ?? 50;
    camera.lowerRadiusLimit = this.cameraConfig.lowerRadiusLimit ?? 2;
    camera.upperRadiusLimit = this.cameraConfig.upperRadiusLimit ?? 50;
    camera.panningInertia = this.cameraConfig.panningInertia ?? 0.8;
    camera.inertia = this.cameraConfig.inertia ?? 0.9;

    // Vrati prethodno stanje kamere ako postoji
    if (this.cameraState) {
      camera.alpha = this.cameraState.alpha;
      camera.beta = this.cameraState.beta;
      camera.radius = this.cameraState.radius;
      camera.setTarget(this.cameraState.target);
    }

    // Osnovno osvetljenje
    const light = new HemisphericLight('light', new Vector3(0, 1, 0), this.scene);
    light.intensity = 0.7;

    // Učitaj model
    this.loadModel(this.scene);

    this.scene.onPointerObservable.add((pointerInfo) => {

      if(pointerInfo.type == 32) {
        const pickedMesh = pointerInfo.pickInfo?.pickedMesh;

        if (pickedMesh) {
          // Sačuvaj stanje kamere
          this.cameraState = {
            alpha: camera.alpha,
            beta: camera.beta,
            radius: camera.radius,
            target: camera.target.clone(),
          };

          const meshInfo = {
            name: pickedMesh.name,
            position: pickedMesh.position.asArray(),
          };

          // Emituj događaj
          this.meshSelected.emit(meshInfo);
        }

      }
    });

    this.engine.runRenderLoop(() => {
      this.scene.render();
    });

    window.addEventListener('resize', this.handleResize);

  }

  private loadModel(scene: Scene) {
    if (this.lastLoadedModelPath === this.modelPath && this.isModelLoaded) {
      return; // Model je već učitan
    }

    //Ukloni stare mesheve (osim kamere i svetla)
    scene.meshes.forEach((mesh) => {
      if (!mesh.name.includes('light')) {
        mesh.dispose();
      }
    });

    this.isModelLoaded = true;
    this.lastLoadedModelPath = this.modelPath;


    ImportMeshAsync(this.modelPath, scene)
      .then((result) => {
        console.log('Model successfully loaded:', result);
        result.meshes.forEach((mesh) => {
          mesh.checkCollisions = true;
          mesh.receiveShadows = true;
        });
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