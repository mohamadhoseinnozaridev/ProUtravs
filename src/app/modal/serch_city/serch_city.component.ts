import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serch_city',
  templateUrl: './serch_city.component.html',
  styleUrls: ['./serch_city.component.css'],
})
export class Serch_cityComponent implements OnInit {
  show: boolean = false;
  constructor() {}

  ngOnInit() {}
  onshow() {
    this.show = true;
  }
  onclose() {
    this.show = false;
  }
}
