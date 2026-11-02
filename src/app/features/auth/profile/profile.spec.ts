import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Profile } from './profile';

@Component({ template: '' })
class DummyLoginComponent {}

describe('Profile', () => {
  let component: Profile;
  let fixture: ComponentFixture<Profile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Profile],
      providers: [
        provideRouter([
          { path: 'login', component: DummyLoginComponent }
        ])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Profile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
