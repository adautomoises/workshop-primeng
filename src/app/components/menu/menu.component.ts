import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PrimeNGModule } from '../../modules/prime-ng.module';
import { MessageService } from 'primeng/api';
import { IconButtonCustomComponent } from '../icon-button-custom/icon-button-custom.component';

interface MenuItem {
  value?: string;
  link?: string;
  icon?: string;
  itens?: MenuItem[];
}

interface MenuUsuario {
  label: string;
  icon: string;
  command: () => void;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet, RouterLink, PrimeNGModule, IconButtonCustomComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  hidden: boolean = true;
  menus: MenuItem[] = [];
  badgeAlerta: number = 1;
  badgeNotificacao: number = 5;
  tituloPagina: string = '';
  nomeUsuario: string = 'Joaquim Bezerra';
  menuUsuario: MenuUsuario[] = [];

  constructor(
    private messageService: MessageService
  ){}

  ngOnInit(): void {
    this.menus = this.preencheMenus();
    this.menuUsuario = this.preencheMenuUsuario();
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

  public setNomeUsuario(value: string){
    this.nomeUsuario = value;
  }

  public setTituloPagina(value: string){
    this.tituloPagina = value;
  }

  public setbadgeAlerta(value: number){
    this.badgeAlerta = value;
  }

  public setbadgeNotificacao(value: number){
    this.badgeNotificacao = value;
  }

  preencheMenuUsuario(): MenuUsuario[] {
    return [
      {
        label: 'Minha Conta',
        icon: 'pi pi-user',
        command: () => {
          this.opcaoNaoImplementada();
        }
      },
      {
        label: 'Alterar Senha',
        icon: 'pi pi-lock',
        command: () => {
          this.opcaoNaoImplementada();
        }
      },
      {
        label: 'Sair',
        icon: 'pi pi-sign-out',
        command: () => {
          this.opcaoNaoImplementada();
        }
      },
    ];
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
