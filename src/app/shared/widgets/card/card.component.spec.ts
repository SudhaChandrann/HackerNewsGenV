import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('item should be added to favorites increasing length when isFav is toggled', () => {
    component.toggleSelected({"by":"phyllis","descendants":0,"id":2,"kids":[454411],"score":16,"time":1160418628,"title":"A Student's Guide to Startups","type":"story","url":"http://www.paulgraham.com/mit.html",
       "deleted": false, isFav: false});
    expect(component.favoutiteItems.length == 1).toBeTruthy();
  });

  it('return equivalend mat icon', () => {
    const val = component.getIconByType("story");
    expect(val).toBe("book");
  });

  it('pageitems should be based on index and page number', () => {
    component.data = [{"by":"phyllis","descendants":0,"id":2,"kids":[454411],"score":16,"time":1160418628,"title":"A Student's Guide to Startups","type":"story","url":"http://www.paulgraham.com/mit.html",
       "deleted": false},
       {"by":"phyllis","descendants":0,"id":2,"kids":[454411],"score":16,"time":1160418628,"title":"A Student's Guide to Startups","type":"story","url":"http://www.paulgraham.com/mit.html",
      "deleted": false}];
    component.getData({pageIndex: 2, pageSize: 7});
    expect(component.pageItems.length == 0).toBeTruthy();
  });

});
