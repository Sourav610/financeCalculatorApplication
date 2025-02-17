import { Component, computed, inject} from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  standalone:false,
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  private InvestmentService = inject(InvestmentService);

  // get results(){
  //   return this.InvestmentService.resultsData;
  // }
  results = computed(() => this.InvestmentService.resultsData());

  // results = this.InvestmentService.resultsData.asReadonly(); //readOnly will only provide readonly access.
}
