import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-normal-button',
  templateUrl: './normal-button.component.html',
  styleUrls: ['./normal-button.component.css']
})
export class NormalButtonComponent implements OnInit {
  @ViewChild("normal") eButton:any;
  constructor() { }

  ngOnInit(): void {
  }
  normalButtonIn(e:any){
    this.eButton.nativeElement.style.fontWeight = "bold";
    this.eButton.nativeElement.style.fontSize = "24px";
  }
  normalButtonOut(e:any){
    this.eButton.nativeElement.style.fontWeight = "normal";
    this.eButton.nativeElement.style.fontSize = "14px";
  }
}
