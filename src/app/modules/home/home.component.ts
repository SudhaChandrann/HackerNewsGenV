import { Component, OnInit, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Item } from '../../models/item';
import { HackernewsService } from '../../services/hackernews.service';
import { ActivatedRoute } from '@angular/router';
import { LocaldataService } from '../../services/localdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: Item[] = [];
  topStories: Item[] = [];
  @Input() loading = false;
  itemsQuantity = 5;

  private route: ActivatedRoute

  constructor(public newsService: HackernewsService, 
    private localdataService: LocaldataService) { 
      this.items = this.localdataService.getData();
    }

  ngOnInit(): void {
    console.log(" Step 2 - From NgOnit home component...")
    console.log("Items -", this.items);
  }


  public ngOnChanges(): void {
    console.log("Data changed - ", this.items);
  }

}
