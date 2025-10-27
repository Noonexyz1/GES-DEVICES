import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class App implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }
}
