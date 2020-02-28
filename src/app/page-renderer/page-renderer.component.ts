import { Component, OnInit } from '@angular/core';
import { Containers } from '../builder/model/containers';

@Component({
  selector: 'app-page-renderer',
  templateUrl: './page-renderer.component.html',
  styleUrls: ['./page-renderer.component.css']
})
export class PageRendererComponent implements OnInit {
  containers: Containers[];
  constructor() { }

  ngOnInit() {
  }

}
