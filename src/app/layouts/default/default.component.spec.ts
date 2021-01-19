import { EventEmitter } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Item } from 'src/app/models/item';
import { ItemPreview } from 'src/app/models/itemPreview';
import { HackernewsService } from 'src/app/services/hackernews.service';
import { DefaultComponent } from './default.component';


describe('DefaultComponent', () => {
  let component: DefaultComponent;
  let fixture: ComponentFixture<DefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultComponent ],
      imports: [RouterTestingModule],
      providers: [{provide: HackernewsService, useClass: HackernewsMockService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase side nav width when increase()', () => {
    component.increase();
    expect(component.sidenavWidth).toBe(20);
  });

  it('should decrease side nav width when decrease()', () => {
    component.decrease();
    expect(component.sidenavWidth).toBe(4);
  });

  it('should load items', () => {
    component.getNewStories();
    expect(component.items.length).toBe(2);
  });

  it('should load carasoul items', () => {
    component.getNewStories();
    expect(component.localdataService.getCarasoulData().length > 0).toBeTruthy();
  });

  class HackernewsMockService {

    data: Item[] =  [
      {"by":"phyllis","descendants":0,"id":2,"kids":[454411],"score":16,"time":1160418628,"title":"A Student's Guide to Startups","type":"story","url":"http://www.paulgraham.com/mit.html",
    "deleted": false},
    {"by":"phyllis","descendants":0,"id":2,"kids":[454411],"score":16,"time":1160418628,"title":"A Student's Guide to Startups","type":"story","url":"http://www.paulgraham.com/mit.html",
  "deleted": false}
    ];

    previewData: ItemPreview[]= [
      {
        "description": "October 2006(This essay is derived from a talk at MIT.)Till recently graduating seniors had two choices: get a job or go to grad school. I think there will increasingly be a third option: to start your own startup. But how common will that be?I'm sure the default will always be to get a job, but starting a startup could well become as popular as grad school. In the late 90s my professor friends used to complain that they couldn't get grad students, because all the undergrads were going to work for startups. I wouldn't be surprised if that situation returns, but with one difference: this time they'll be starting their own instead of going to work for other people's.The most ambitious students will at this point be asking: Why wait till you graduate? Why not start a startup while you're in college? In fact, why go to college at all?...",
        "image": "http://ycombinator.com/arc/arc.png",
      },
      {
        "description": "October 2006(This essay is derived from a talk at MIT.)Till recently graduating seniors had two choices: get a job or go to grad school. I think there will increasingly be a third option: to start your own startup. But how common will that be?I'm sure the default will always be to get a job, but starting a startup could well become as popular as grad school. In the late 90s my professor friends used to complain that they couldn't get grad students, because all the undergrads were going to work for startups. I wouldn't be surprised if that situation returns, but with one difference: this time they'll be starting their own instead of going to work for other people's.The most ambitious students will at this point be asking: Why wait till you graduate? Why not start a startup while you're in college? In fact, why go to college at all?...",
        "image": "http://ycombinator.com/arc/arc.png",
      }
    ];

    getNewStories() {
          return of(this.data);
    }

    getStoryPreview(previewUrl)
    {
      return of(this.previewData);
    }
    };

});
