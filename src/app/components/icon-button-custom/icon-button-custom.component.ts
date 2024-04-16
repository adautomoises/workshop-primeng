import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PrimeNGModule } from '../../modules/prime-ng.module';

@Component({
  selector: 'app-icon-button-custom',
  standalone: true,
  imports: [PrimeNGModule],
  templateUrl: './icon-button-custom.component.html',
  styleUrl: './icon-button-custom.component.scss'
})
export class IconButtonCustomComponent {
  @Input() titulo: string = '';
  @Input() icone: string = '';
  @Input() badge?: number;

  @Output() onclick = new EventEmitter();

  onClick(){
    this.onclick.emit();
  }

  buscarIcone(icone: string): string {
    switch(icone) {
      case 'alerta':
        return "../../../assets/icons/icone-alerta.svg";

      case 'notificacao':
        return "../../../assets/icons/icone-notificacao.svg";

      default:
        return "";
    }
  }
}
