import { Component,EventEmitter, Output, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input-model';

@Component({
  selector: 'app-user-input',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
//  @Output() calculate = new EventEmitter<InvestmentInput>(); // need to emit data to be used by parent component
//  enterInitialInvestment = '0';
//  enterAnnualInvestment='0';
//  enterExpectedReturn = '5';
//  enterDuration= '10';

//when using signal
calculate = output<InvestmentInput>();
enterInitialInvestment = signal('0');
 enterAnnualInvestment=signal('0');
 enterExpectedReturn = signal('5');
 enterDuration= signal('10');

//  onSubmit(){
//   this.calculate.emit({
//     initialInvestment:+this.enterInitialInvestment,
//     duration: +this.enterDuration,
//     expectedReturn: +this.enterExpectedReturn,
//     annualInvestment: +this.enterAnnualInvestment
//   })
//  }

//when using signal

onSubmit(){
    this.calculate.emit({
      initialInvestment:+this.enterInitialInvestment(),
      duration: +this.enterDuration(),
      expectedReturn: +this.enterExpectedReturn(),
      annualInvestment: +this.enterAnnualInvestment()
    });
    this.enterAnnualInvestment.set('0');
    this.enterInitialInvestment.set('0');
    this.enterExpectedReturn.set('5');
    this.enterDuration.set('10');

   }

 

}
