import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ShellComponent } from './shell.component'
import { RouterTestingModule } from '@angular/router/testing'
import { Router } from '@angular/router'
import { Type } from '@angular/core'

describe('ShellComponent', () => {
  let component: ShellComponent
  let fixture: ComponentFixture<ShellComponent>
  let router: Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellComponent],
      imports: [RouterTestingModule],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
