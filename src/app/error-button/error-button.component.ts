import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-error-button',
  templateUrl: './error-button.component.html',
  styleUrls: ['./error-button.component.css']
})
export class ErrorButtonComponent implements OnInit {
  @ViewChild("error") eButton:any;
  constructor() { }

  ngOnInit(): void {
  }
  errorButtonIn(e:any){
    this.eButton.nativeElement.style.fontWeight = "bold";
    this.eButton.nativeElement.style.fontSize = "44px";
  }
  errorButtonOut(e:any){
    this.eButton.nativeElement.style.fontWeight = "normal";
    this.eButton.nativeElement.style.fontSize = "14px";
  }
}
