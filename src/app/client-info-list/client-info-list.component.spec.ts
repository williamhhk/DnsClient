import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInfoListComponent } from './client-info-list.component';

describe('ClientInfoListComponent', () => {
  let component: ClientInfoListComponent;
  let fixture: ComponentFixture<ClientInfoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientInfoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
