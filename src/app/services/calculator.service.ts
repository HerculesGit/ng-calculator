import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private SOMA:string = '+'
  private SUBTRACAO: string = "-"
  private MULTIPLICACAO:string = '*'
  private DIVISAO: string = "/"

  constructor() { }

  calcular(num1: number, num2:number, operacao: string): number {
    switch (operacao) {
      // 
      case this.SOMA:
        return num1 + num2
      
      // 
      case this.SUBTRACAO:
        return num1 - num2

      // 
      case this.MULTIPLICACAO:
      return num1 * num2
      
      // 
      case this.DIVISAO:
      return num1 / num2
    }
  }



}
