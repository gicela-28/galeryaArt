import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component-galeria1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-galeria1.component.html',
  styleUrl: './component-galeria1.component.css'
})
export class ComponentGaleria1Component {
  images = [
    { src: '/assets/Paisaje-de-contrastes.jpg', alt: 'Image 1' },
    { src: '/assets/pexels-photo-5845088.jpeg', alt: 'Image 2' },
    { src: '/assets/pexels-photo-881613.jpeg ', alt: 'Image 3' },
    { src: '/assets/paisaje.jpg', alt: 'Image 4' },
    { src: '/assets/flores.jpg ', alt: 'Image 5' },
    { src: '/assets/Paisaje-de-contrastes.jpg', alt: 'Image 6' },
    { src: '/assets/656e1896c69df.jpg', alt: 'Image 7' },
    { src: '/assets/Paisaje-Natural.jpg', alt: 'Image 8' },
    { src: '/assets/desierto.jpg', alt: 'Image 9' },
    // Añade más imágenes según necesites
  ];

  expandedImage: any = null;

  expandImage(image: any) {
    if (this.expandedImage !== image) {
      this.expandedImage = image;
    }
  }

  shrinkImage() {
    this.expandedImage = null;
  }

  setExpandedImage(image: any) {
    this.expandedImage = this.expandedImage === image ? null : image;
  }
}
