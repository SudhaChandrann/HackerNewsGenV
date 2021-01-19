import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../../../models/item';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  page = 0;
  size = 5;

  @Output() favouritesChanged = new EventEmitter();
  favoutiteItems: Item[] = [];
  @Input() data: Item[] = [];
    pageItems: Item[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  getIconByType(itemType: string): string
  {
    switch(itemType) { 
      case "comment": { 
        return  "comment_bank"
         break; 
      } 
      case "poll": { 
        return "poll";
         break; 
      } 
      case "comment": { 
        return "poll";
         break; 
      } 
      case "pollopt": { 
        return "poll";
         break; 
      } 
      case "job": { 
        return "work";
         break; 
      } 
      default: { 
        return "book";
         break; 
      } 
   } 
  }

  ngOnChanges()
  {
    console.log("Datareceived -", this.data);
    this.getData({pageIndex: this.page, pageSize: this.size});
  }

  getData($event) 
  {
    let index=0,
    startingIndex=$event.pageIndex * $event.pageSize,
    endingIndex=startingIndex + $event.pageSize;

    console.log("Items-", this.data)
    this.pageItems = this.data.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }
  gotoUrl(url: string)
  {
    window.open(url, "_blank");
  }

  toggleSelected(item: Item)
  {
    item.isFav = !item.isFav;
    if(item.isFav)
    this.favoutiteItems.push(item);
    else
    {
    let index = this.favoutiteItems.findIndex(d => d.id === item.id); //find index in your array
    this.favoutiteItems.splice(index, 1);
    this.favouritesChanged.emit(true);
    }
  }


}
