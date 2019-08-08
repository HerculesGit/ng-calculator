import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

// este decorator diz que essa classe é um componente
@Component({
  selector: 'app-calculator', // podemos dar nome a nossa tag html criada
  templateUrl: './calculator.component.html', // podemos usar apenas template para nosso componente de exibição
  styleUrls: ['./calculator.component.css'] // uma ou mais folhas de estilo
})

export class CalculatorComponent implements OnInit {

  private operator: string
  private num1: string
  private num2: string
  private result: string = '0'

  constructor(private service: CalculatorService) { }

  ngOnInit() {
    this.limpar()
  }

  limpar(): void {
    this.num1 = '0'
    this.num2 = null
    this.operator = null
    this.result = '0'
  }

  calcular (): string {
    let r = this.service.calcular(parseInt(this.num1), parseInt(this.num2), this.operator).toString()  
    return r
  }

  calculatorScreen(): void{
    this.result = this.calcular()
  }
  

  addOperator(operator: string): void {
    this.operator = operator
    console.log(operator)
  }


  adicionarNumero (key: string){
    if (this.operator === null ) {
      this.num1 = this.contatenarValor(this.num1, key)
    } else {
      this.num2 = this.contatenarValor(this.num2, key)
    }
    console.log(this.num1 + ' | ' + this.num2)
  }

  private contatenarValor(numAtual: string, numConcat: string): string {
    if (numAtual === null || numAtual === '0'){
      numAtual = ''
    }

    if (numConcat === '.' && numAtual === ''){
      return '0.'
    }

    if (numConcat === '.' && numAtual.indexOf('.') > -1){
      return numAtual
    }

    return numAtual + numConcat
    
  }


}
