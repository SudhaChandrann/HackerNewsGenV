import { Component, Input, OnInit, ViewChild, TemplateRef, ViewContainerRef, DoCheck, Output } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {

  @ViewChild('progressSpinnerRef')
  private progressSpinnerRef: TemplateRef<any>;
  @Output() private overlayRef: OverlayRef;

  constructor(private vcRef: ViewContainerRef) { }

  ngOnInit() {      
    console.log("OnInit from progress spinner - Starting spinner....")
  }

}
