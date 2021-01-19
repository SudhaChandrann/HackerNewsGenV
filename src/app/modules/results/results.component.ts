import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ActivatedRoute } from '@angular/router';
import { LocaldataService } from '../../services/localdata.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  searchValue: string;
  favorites = false;
  results: Item[] = [];
  constructor(private activatedRoute: ActivatedRoute,
    private localdataService: LocaldataService) { }

  ngOnInit(): void {
    console.log("Route data -");
    this.activatedRoute.params.subscribe(
      (params) => {
        if(params.searchValue)
        {
        this.searchValue = params.searchValue; 
        this.loadSearchResults();
        }
        if(this.favorites = params.favorites == "favorites")
        {
          this.loadFavourites();
        }
        
      }
    )
  }

  loadSearchResults()
  {
    console.log("Search string - ");
    if(this.localdataService.getData().length > 0 && this.searchValue)
    {
       this.results = this.localdataService.getData().filter((x) => x.title.toLowerCase().includes(this.searchValue.toLowerCase()));
       console.log("Filetered results - ", this.results);
    }
    else
       console.log("No results found");
  }

  loadFavourites()
  {
    if(this.localdataService.getData().length > 0 && this.favorites)
    {
       this.results = this.localdataService.getData().filter((x) => x.isFav);
       console.log("Filetered results - ", this.results);
    }
    else
       console.log("No results found");
  }

  reloadFavItems()
  {
    this.loadFavourites();
  }

}
