import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
 enterInitialInvestment = '0';
 enterAnnualInvestment='0';
 enterExpectedReturn = '5';
 enterDuration= '10';

 onSubmit(){
  console.log("submitted!");
  console.log(this.enterAnnualInvestment);
  console.log(this.enterExpectedReturn);
  console.log(this.enterDuration);
  console.log(this.enterInitialInvestment)
 }
 

}
