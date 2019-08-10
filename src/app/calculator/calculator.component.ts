import { Component, OnInit, HostListener } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

export enum KEY_CODE {
  NUMERIC_ZERO = 96,
  NUMERIC_ONE = 97,
  NUMERIC_TWO = 98, 
  NUMERIC_THREE = 99,
  NUMERIC_FOUR = 100,
  NUMERIC_FIVE = 101,
  NUMERIC_SIX = 102,
  NUMERIC_SEVEN = 103,
  NUMERIC_EIGHT = 104,
  NUMERIC_NINE = 105,

  ALPHANUMERIC_ZERO = 48,
  ALPHANUMERIC_ONE = 49,
  ALPHANUMERIC_TWO = 50, 
  ALPHANUMERIC_THREE = 51,
  ALPHANUMERIC_FOUR = 52,
  ALPHANUMERIC_FIVE = 53,
  ALPHANUMERIC_SIX = 54,
  ALPHANUMERIC_SEVEN = 55,
  ALPHANUMERIC_EIGHT = 56,
  ALPHANUMERIC_NINE = 57,

  ALPHANUMERIC_PLUS = 107,
  ALPHANUMERIC_SUB  = 109,
  ALPHANUMERIC_MULT = 106,
  ALPHANUMERIC_DIV  = 111,
  ALPHANUMERIC_EQUAL = 13
}


// this decorator says this class os a component
@Component({

  // tag name
  selector: 'app-calculator',
  
  // this is html component template 
  templateUrl: './calculator.component.html',

  // one stylesheet
  styleUrls: ['./calculator.component.css'] 
})
export class CalculatorComponent implements OnInit {

  private operator: string
  private num1: string
  private num2: string
  private result: string

  constructor(private service: CalculatorService) { }

  ngOnInit() {
    this.clearAll()
  }

  clearAll(): void {
    this.num1 = '0'
    this.num2 = null
    this.operator = null
    this.result = '0'
  }

  calculate (): void {
    if(this.num1 != null && this.num2 != null){
      let result = this.service.calcular(parseInt(this.num1), parseInt(this.num2), this.operator).toString()  
      this.setValueOnScreen(result)
    }
  }

  private setValueOnScreen(value: string): void{
    this.result = value
  }
  

  addOperator(operator: string): void {
    this.operator = operator
  }

  addNumber (key: string){
    if (this.operator === null ) {
      this.num1 = this.concatenateValue(this.num1, key)
      this.result = this.num1
    } else {
      this.num2 = this.concatenateValue(this.num2, key)
      this.result = this.num2
    }
  }

  @HostListener('window:keyup', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    console.log(event.keyCode)
    // numeric keyboard
    if (event.keyCode >= 96 && event.keyCode <= 105){
      console.log(event.keyCode)
      this.numericKeyboard(event.keyCode)
    } else if (event.keyCode >= 48 && event.keyCode <= 57){
      // alphanumeric teclado
      console.log(event.keyCode)
      this.alphanumericKeyboard(event.keyCode)
    } else {
      this.alphanumericOperatorKeyboard(event.keyCode)
    }

  }

  numericKeyboard(keyCode: number){
    switch(keyCode){
      case KEY_CODE.NUMERIC_ZERO:
        this.addNumber('0')
        break
      case KEY_CODE.NUMERIC_ONE:
          this.addNumber('1')
        break
      case KEY_CODE.NUMERIC_TWO:
          this.addNumber('2')
        break
      case KEY_CODE.NUMERIC_THREE:
        this.addNumber('3')
        break
      case KEY_CODE.NUMERIC_FOUR:
          this.addNumber('4')
        break
      case KEY_CODE.NUMERIC_FIVE:
        this.addNumber('5')
      break
      case KEY_CODE.NUMERIC_SIX:
          this.addNumber('6')
        break
      case KEY_CODE.NUMERIC_SEVEN:
        this.addNumber('7')
      break
      case KEY_CODE.NUMERIC_EIGHT:
          this.addNumber('8')
        break
      case KEY_CODE.NUMERIC_NINE:
        this.addNumber('9')
      break
    }
  }

  alphanumericKeyboard(keyCode: number){
    switch(keyCode){
      case KEY_CODE.ALPHANUMERIC_ZERO:
        this.addNumber('0')
        break
      case KEY_CODE.ALPHANUMERIC_ONE:
          this.addNumber('1')
        break
      case KEY_CODE.ALPHANUMERIC_TWO:
          this.addNumber('2')
        break
      case KEY_CODE.ALPHANUMERIC_THREE:
          this.addNumber('3')
        break
      case KEY_CODE.ALPHANUMERIC_FOUR:
          this.addNumber('4')
        break
      case KEY_CODE.ALPHANUMERIC_FIVE:
          this.addNumber('5')
          break
      case KEY_CODE.ALPHANUMERIC_SIX:
          this.addNumber('6')
        break
      case KEY_CODE.ALPHANUMERIC_SEVEN:
          this.addNumber('7')
        break
      case KEY_CODE.ALPHANUMERIC_EIGHT:
          this.addNumber('8')
        break
      case KEY_CODE.ALPHANUMERIC_NINE:
          this.addNumber('9')
        break
      }
  }

  alphanumericOperatorKeyboard(keyCode: number){
    switch(keyCode){
      case KEY_CODE.ALPHANUMERIC_PLUS:
        this.addOperator('+')
        break
      case KEY_CODE.ALPHANUMERIC_SUB:
          this.addOperator('-')
        break
      case KEY_CODE.ALPHANUMERIC_MULT:
          this.addOperator('*')
        break
      case KEY_CODE.ALPHANUMERIC_DIV:
          this.addOperator('/')
        break
      case KEY_CODE.ALPHANUMERIC_EQUAL:
          this.calculate()
          break
      }
  }


  private concatenateValue(currentNumber: string, concatenateValue: string): string {
    if (currentNumber === null || currentNumber === '0'){
      currentNumber = ''
    }

    if (concatenateValue === '.' && currentNumber === ''){
      return '0.'
    }

    if (concatenateValue === '.' && currentNumber.indexOf('.') > -1){
      return currentNumber
    }

    return currentNumber + concatenateValue
    
  }


}
