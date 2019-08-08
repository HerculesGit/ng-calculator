import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service).toBeTruthy();
  });


  it ('deve garantir que a soma de 1 + 4 seja igual a 5', ()=>{
    const service: CalculatorService = TestBed.get(CalculatorService)
    expect(service.calcular(1, 4, "+")).toEqual(5)
  })


});
