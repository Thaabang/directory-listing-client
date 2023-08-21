import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryListingComponent } from './directory-listing.component';

describe('DirectoryListingComponent', () => {
  let component: DirectoryListingComponent;
  let fixture: ComponentFixture<DirectoryListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectoryListingComponent]
    });
    fixture = TestBed.createComponent(DirectoryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
