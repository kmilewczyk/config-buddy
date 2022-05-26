import { TestBed } from '@angular/core/testing'

import { InitialSpinnerService } from './initial-spinner.service'
import { RouterTestingModule } from '@angular/router/testing'
import { Router } from '@angular/router'
import { firstValueFrom, toArray } from 'rxjs'

describe('InitialSpinnerService', () => {
  let service: InitialSpinnerService
  let router: Router

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    })

    service = TestBed.inject(InitialSpinnerService)
    router = TestBed.inject(Router)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should return once on navigation end', async () => {
    const values$ = firstValueFrom(service.appReady$.pipe(toArray()))

    expect(await firstValueFrom(service.appReady$)).toEqual(false)

    await router.navigate([''])
    expect(await firstValueFrom(service.appReady$)).toEqual(true)

    await router.navigate([''])
    expect(await firstValueFrom(service.appReady$)).toEqual(true)

    const values = await values$

    expect(values).toEqual([false, true])
  })
})
