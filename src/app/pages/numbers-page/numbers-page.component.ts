import { Component, signal } from '@angular/core';
import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common'

@Component({
  selector: 'app-numbers-page',
  imports: [CurrencyPipe, DecimalPipe, PercentPipe],
  templateUrl: './numbers-page.component.html',
})
export default class NumbersPageComponent {
  totalSells = signal<number>(2_443_232.5567);
  percent = signal<number>(0.4856);

}
