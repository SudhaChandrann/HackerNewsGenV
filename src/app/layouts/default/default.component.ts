import { Component, OnInit, Output, Input, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { HackernewsService } from 'src/app/services/hackernews.service';
import { LocaldataService } from 'src/app/services/localdata.service';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  loading = false;
  searchEnabled = false;
  sidenavWidth = 4;
  ngStyle: string;
  items: Item[] = [];
  topStories: Item[] = [];

  constructor(public newsService: HackernewsService, 
    public localdataService: LocaldataService,
    private router: Router) { 
      this.getNewStories();
  }

  ngOnInit(): void {
    console.log("Step 1 - OnInit from default component..");
  }

/**
 * @ngdoc method
 * @name DefaultComponent#sendSearchString
 *
 * @param {event} event Receive the emitted event from side bar
 * Navigate to Results component with search string
 *
 */
  sendEventData($event)
  {
    console.log("Search string - ", $event);
    if($event.srcElement.name == "search")
    this.router.navigate(['results', {searchValue: $event.target.value}]);
    else if($event.target.ariaLabel == "favorites")
    this.router.navigate(['results', {favorites: "favorites"}]);
  }

  increase() {
    this.sidenavWidth = 20;
    this.searchEnabled = true;
    console.log('increase sidenav width');
  }
  decrease() {
    this.sidenavWidth = 4;
    this.searchEnabled = false;
    console.log('decrease sidenav width');
  }

  getNewStories()
    {
      if(this.localdataService.getData().length > 0)
      return;

      this.loading = true;
      this.newsService.getNewStories().subscribe(
        (data: Item[]) => 
           {
             console.log("Service data-", data);
             this.items = data;
             this.localdataService.setData(data);
             this.loadPreviewData();
             this.loading = false;
        },
        (error) => { console.log("Error", error) }
        )
    }
   
    loadPreviewData()
    {
      const items = this.items.slice(1, 5);

      items.forEach((x) => 
      {
        if(x!= null && x.url != null) 
        return this.newsService.getStoryPreview(x.url).subscribe(
        (data) => { console.log(data); x.itemPreview = data; this.topStories.push(x); }
      )})
      this.localdataService.setCarasoulData(this.topStories);     
    }

}
