// app.routes.ts
import { Routes } from '@angular/router';

// Importe os componentes
import { InicioComponent } from './pages/inicio/inicio.component';
import { NovoOrcamentoComponent } from './pages/orcamento/novo-orcamento/novo-orcamento.component';
import { EditarOrcamentoComponent } from './pages/orcamento/editar-orcamento/editar-orcamento.component';
import { TaxaEntregaComponent } from './pages/orcamento/taxa-entrega/taxa-entrega.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ClientesComponent } from './pages/cadastros/clientes/clientes.component';
import { FuncionariosComponent } from './pages/cadastros/funcionarios/funcionarios.component';
import { ProdutosComponent } from './pages/cadastros/produtos/produtos.component';
import { RelatorioProdutosComponent } from './pages/relatorios/relatorio-produtos/relatorio-produtos.component';
import { RelatorioPedidosComponent } from './pages/relatorios/relatorio-pedidos/relatorio-pedidos.component';
import { RelatorioClientesComponent } from './pages/relatorios/relatorio-clientes/relatorio-clientes.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  
  // Menu Principal
  { path: 'inicio', component: InicioComponent },
  
  // Orçamentos
  { path: 'orcamento/novo', component: NovoOrcamentoComponent },
  { path: 'orcamento/editar', component: EditarOrcamentoComponent },
  { path: 'orcamento/taxa-entrega', component: TaxaEntregaComponent },
  
  // Pedidos
  { path: 'pedidos', component: PedidosComponent },
  
  // Cadastros
  { path: 'cadastros/clientes', component: ClientesComponent },
  { path: 'cadastros/funcionarios', component: FuncionariosComponent },
  { path: 'cadastros/produtos', component: ProdutosComponent },
  
  // Relatórios
  { path: 'relatorios/produtos', component: RelatorioProdutosComponent },
  { path: 'relatorios/pedidos', component: RelatorioPedidosComponent },
  { path: 'relatorios/clientes', component: RelatorioClientesComponent }
];
