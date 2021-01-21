import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-click-button',
  templateUrl: './click-button.component.html',
  styleUrls: ['./click-button.component.css']
})
export class ClickButtonComponent implements OnInit {
  @ViewChild("click") eButton:any;
  constructor() { }

  ngOnInit(): void {
  }
  clickButtonIn(e:any){
    this.eButton.nativeElement.style.fontWeight = "bold";
    this.eButton.nativeElement.style.fontSize = "34px";
  }
  clickButtonOut(e:any){
    this.eButton.nativeElement.style.fontWeight = "normal";
    this.eButton.nativeElement.style.fontSize = "14px";
  }
}
