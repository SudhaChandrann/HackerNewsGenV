import { Route } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() enableClose;
  searchValue = '';
  @Output() eventData = new EventEmitter();

  constructor(public router: Router) {
    this.eventData = new EventEmitter();
   }

  ngOnInit(): void {
  }
 
  sendSideBarEventData($event)
  {
     this.eventData.emit($event);

    }

  resetSearch()
  {
    this.searchValue = null;
    this.router.navigate(['']);
  }
}
