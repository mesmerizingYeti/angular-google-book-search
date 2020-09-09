import { Component, OnInit } from '@angular/core';
import { DrawerService } from '../drawer.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  isOpen: boolean;

  constructor(private data: DrawerService) { }

  ngOnInit() { }

  openDrawer() {
    this.data.changeValue(true);
  }
}
