import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component.router, 'navigate'); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search value', () => {
    spyOn(component.eventData, 'emit');
    let input = fixture.debugElement.query(By.css('input'));
      let el = input.nativeElement;
      el.value = 'facebook';
      const event = new KeyboardEvent("keyup",{
        "key": "Enter"
    });
    el.dispatchEvent(event);
    expect(component.eventData.emit).toHaveBeenCalled();
  });

  it('should route to home when search is cancelled', () => {
    component.resetSearch();
    expect(component.router.navigate).toHaveBeenCalled();
    expect(component.router.navigate).toHaveBeenCalledWith(['']);
  });

});
