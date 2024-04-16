import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PrimeNGModule } from '../../modules/prime-ng.module';
import { MessageService } from 'primeng/api';

interface MenuItem {
  value?: string;
  link?: string;
  icon?: string;
  itens?: MenuItem[];
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet, RouterLink, PrimeNGModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  menus: MenuItem[] = [];
  hidden: boolean = true;

  constructor(
    private messageService: MessageService
  ){}

  ngOnInit(): void {
    this.menus = this.preencheMenus();
  }

  opcaoNaoImplementada(){
    this.messageService.add({severity: 'error', detail: 'Opção não implementada'});
  }

  onMouseMove(){
    const body = document.querySelector('body');
    body?.addEventListener('mousemove', (event: any) => {
      event.target.closest('#navbar-container') ? this.hidden = false : this.hidden = true;
    })
  }

  preencheMenus(): MenuItem[] {
    return [
        this.menuDashboard,
        this.menuCadastro,
        this.menuFinanceiro,
        this.menuFrota,
        this.menuRelatorios,
        this.menuDuvidas,
    ];
  }

  private get menuDashboard(): MenuItem {
    return {
      value: 'DASHBOARD',
      icon: 'icone-dashboard',
      link: '/dashboard',
    }
  }

  private get menuCadastro(): MenuItem {
    return {
        value: 'CADASTROS',
        icon: 'icone-cadastro',
        itens: [
            {
                itens: [
                    { value: 'AUTORIZADOS', link: '/cadastros/autorizados' },
                    { value: 'VEÍCULOS', link: '/cadastros/veiculos' },
                ],
            },
        ],
    };
  }

  private get menuFinanceiro(): MenuItem {
    return {
        value: 'FINANCEIRO',
        icon: 'icone-financeiro',
        itens: [
            {
                itens: [
                    { value: '2 VIA BOLETO', link: '/financeiro/autorizados' },
                    { value: 'DANFE DA NOTA FISCAL', link: '/financeiro/veiculos' },
                ],
            },
        ],
    };
  }

  private get menuFrota(): MenuItem {
    return {
        value: 'FROTA',
        icon: 'icone-frota',
        itens: [
            {
                itens: [
                    { value: 'GRUPO DE FROTA', link: '/frota/autorizados' },
                    { value: 'REQUISIÇÃO DE LIBERAÇÃO', link: '/frota/veiculos' },
                ],
            },
        ],
    };
  }

  private get menuRelatorios(): MenuItem {
    return {
        value: 'RELATÓRIOS',
        icon: 'icone-relatorios',
        itens: [
            {
                itens: [
                    { value: 'RELAÇÃO DE VALES', link: '/relatorios/autorizados' },
                    { value: 'RELAÇÃO DE PRODUTOS', link: '/relatorios/veiculos' },
                    { value: 'CONTROLE DE FROTA', link: '/relatorios/veiculos' },
                ],
            },
        ],
    };
  }

  private get menuDuvidas(): MenuItem {
    return {
      value: 'DÚVIDAS',
      icon: 'icone-duvidas',
      link: '/duvidas',
    }
  }
}
