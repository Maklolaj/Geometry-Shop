import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@geometry-shop/api-interfaces';
import { NgtVector3 } from '@angular-three/core';
import { Mesh } from 'three';

@Component({
  selector: 'geometry-shop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}

  hovered = false;
  active = false;

  onBeforeRender(cube: Mesh) {
    cube.rotation.x += 0.01;
  }
}
