import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPImagesComponent } from './add-pimages.component';

describe('AddPImagesComponent', () => {
  let component: AddPImagesComponent;
  let fixture: ComponentFixture<AddPImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
