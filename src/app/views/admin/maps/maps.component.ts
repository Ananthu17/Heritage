import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-maps",
  templateUrl: "./maps.component.html",
})
export class MapsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
}
