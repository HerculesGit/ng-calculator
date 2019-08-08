import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

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
