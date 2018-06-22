import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
      '../../../node_modules/bootstrap/dist/css/bootstrap.css',
      '../../../node_modules/bootstrap/dist/css/bootstrap-reboot.css',
      '../../../node_modules/bootstrap/dist/css/bootstrap-grid.css'
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
