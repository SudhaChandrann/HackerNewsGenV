import { Injectable } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { mergeMap, catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item';
import { ItemPreview } from '../models/itemPreview';

@Injectable({
  providedIn: 'root'
})
export class HackernewsService {

  rootUrl = "https://hacker-news.firebaseio.com/v0";
  constructor(private http: HttpClient) { }

  getNewStories()
  {
    return this.http.get<any[]>(`${this.rootUrl}/newstories.json`).pipe(
      mergeMap(arr => forkJoin(arr.map((item) => this.http.get(`${this.rootUrl}/item/${item}.json`).pipe(catchError(err => of(err.status))
      )))))
  }

  getStoryPreview(previewUrl)
    {
      return this.http.get<ItemPreview>(`http://api.linkpreview.net/?key=3a99cc4bfc4a07b213fd5a5bd4d0a324&&fields=image,description,site_name&q=${previewUrl}`);
    }
}
