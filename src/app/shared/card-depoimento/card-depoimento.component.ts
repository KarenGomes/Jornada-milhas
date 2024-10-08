import { Component, Input } from '@angular/core';
import { Depoimentos } from 'src/app/core/types/types';

@Component({
  selector: 'app-card-depoimento',
  templateUrl: './card-depoimento.component.html',
  styleUrls: ['./card-depoimento.component.scss']
})
export class CardDepoimentoComponent {
  @Input('depoimento') depoimento!: Depoimentos;
}
