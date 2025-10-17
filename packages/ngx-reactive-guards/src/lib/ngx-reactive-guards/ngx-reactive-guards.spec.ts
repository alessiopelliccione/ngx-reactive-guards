import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxReactiveGuards } from './ngx-reactive-guards';

describe('NgxReactiveGuards', () => {
  let component: NgxReactiveGuards;
  let fixture: ComponentFixture<NgxReactiveGuards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxReactiveGuards],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxReactiveGuards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
