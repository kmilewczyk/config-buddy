import { TestBed } from '@angular/core/testing'

import { InitialSpinnerService } from './initial-spinner.service'

describe('InitialSpinnerService', () => {
  let service: InitialSpinnerService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(InitialSpinnerService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
