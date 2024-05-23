import { Component } from '@angular/core';
import { ComponentGaleria1Component } from "../component-galeria1/component-galeria1.component";
import { ComponentGaleria2Component } from "../component-galeria2/component-galeria2.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ComponentGaleria1Component, ComponentGaleria2Component]
})
export class HomeComponent {

}
