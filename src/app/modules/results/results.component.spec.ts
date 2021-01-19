import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Item } from 'src/app/models/item';
import { ResultsComponent } from './results.component';
import { LocaldataService } from '../../services/localdata.service';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsComponent ],
      imports: [RouterTestingModule],
      providers: [{provide: LocaldataService, useClass: LocalMockService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('search results should be two when filtered with available value', () => {
    component.searchValue = "guide";
    fixture.detectChanges();
    component.loadSearchResults();
    expect(component.results.length).toBe(2);
  });

  class LocalMockService {

    data: Item[] =  [
      {"by":"phyllis","descendants":0,"id":2,"kids":[454411],"score":16,"time":1160418628,"title":"A Student's Guide to Startups","type":"story","url":"http://www.paulgraham.com/mit.html",
    "deleted": false},
    {"by":"phyllis","descendants":0,"id":2,"kids":[454411],"score":16,"time":1160418628,"title":"A Student's Guide to Startups","type":"story","url":"http://www.paulgraham.com/mit.html",
  "deleted": false}
    ];

    getData() {
          return this.data;
    }
    };

});
