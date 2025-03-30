import { Component } from '@angular/core';
import { Vector3, Tools, Scene, Camera, AbstractMesh, ArcRotateCamera } from "@babylonjs/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: false
})
export class AppComponent {
  cameraConfig = {
    speed: 0.2,
    inertia: 0.5,
    eyeHeight: 1.6,
    startPosition: new Vector3(0, 1.6, 0),
    bounds: { minX: -20, maxX: 20, minZ: -20, maxZ: 20 },
  };

  selectedMesh: { 
    name: string; 
    position: number[];
    thumbnail?: string 
  } | null = null;
  
  async onMeshSelected(event: { 
    name: string; 
    position: number[];
    mesh: AbstractMesh;  // Dodajemo referencu na mesh
    pointerEvent: PointerEvent,
  }) {

    console.log(event.mesh);
    
    const thumbnail = await this.captureMeshThumbnail(event.mesh);
    
    this.selectedMesh = {
      name: event.name,
      position: event.position,
      thumbnail: thumbnail
    };
  }

  private async captureMeshThumbnail(mesh: AbstractMesh): Promise<string> {
    const scene = mesh.getScene();
    const engine = scene.getEngine();
    
    // Kreiraj ArcRotateCamera za bolju kontrolu
    const tempCamera = new ArcRotateCamera(
      "tempCamera", 
      -Math.PI/2, 
      Math.PI/4, 
      5, 
      mesh.absolutePosition, 
      scene
    );
    
    // Podesi da kamera prati mesh
    tempCamera.target = mesh.absolutePosition;
    
    // Automatski podesi udaljenost prema veličini mesh-a
    const boundingInfo = mesh.getBoundingInfo();
    const diagonal = boundingInfo.boundingBox.extendSize.scale(2).length();
    tempCamera.radius = diagonal * 2.5;
    
    // Postavi da se samo ovaj mesh vidi
    const originalVisibility = new Map<AbstractMesh, boolean>();
    scene.meshes.forEach(m => {
      originalVisibility.set(m, m.isVisible);
      m.isVisible = m === mesh;
    });
    
    // Napravi screenshot
    const screenshot = await Tools.CreateScreenshotAsync(
      engine, 
      tempCamera, 
      { width: 256, height: 256 }
    );
    
    // Vrati originalnu vidljivost i očisti
    scene.meshes.forEach(m => m.isVisible = originalVisibility.get(m)!);
    tempCamera.dispose();
    
    return screenshot;
  }

  closeSidebar() {
    this.selectedMesh = null;
  }
}