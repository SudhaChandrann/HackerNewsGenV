import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { LocaldataService } from '../../../services/localdata.service';

@Component({
  selector: 'app-widget-carasoul',
  templateUrl: './carasoul.component.html',
  styleUrls: ['./carasoul.component.scss']
})
export class CarasoulComponent implements OnInit {

  displayData: Item[];
  constructor(private localService: LocaldataService) { }

  ngOnInit(): void {
    this.displayData = this.localService.getCarasoulData();
  }

  gotoUrl(url: string)
  {
    window.open(url, "_blank");
  }
  
  ngOnChanges()
  {
    console.log("Data from carasoul - ", this.displayData);
  }

}
