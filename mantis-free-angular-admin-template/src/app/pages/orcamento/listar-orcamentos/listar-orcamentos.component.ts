import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Orcamento {
  id: string;
  numeroOrcamento: string;
  nomeCliente: string;
  dataOrcamento: Date;
  dataValidade: Date;
  total: number;
  itens: number;
  status: string;
  expirado: boolean;
}

@Component({
  selector: 'app-listar-orcamentos',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './listar-orcamentos.component.html',
  styleUrls: ['./listar-orcamentos.component.scss']
})
export class ListarOrcamentosComponent implements OnInit {
  orcamentos: Orcamento[] = [];
  orcamentosFiltrados: Orcamento[] = [];
  visualizacao: 'cards' | 'tabela' = 'cards';
  paginaAtual: number = 1;
  totalPaginas: number = 1;

  filtro = {
    busca: '',
    status: '',
    ordenar: 'data-desc'
  };

  constructor() {}

  ngOnInit(): void {
    this.carregarOrcamentos();
  }

  carregarOrcamentos(): void {
    // AQUI você carregaria do backend/API
    // Por enquanto, dados de exemplo:
    this.orcamentos = [
      {
        id: '1',
        numeroOrcamento: 'ORC-001',
        nomeCliente: 'João Silva',
        dataOrcamento: new Date('2025-11-01'),
        dataValidade: new Date('2025-12-01'),
        total: 1500.00,
        itens: 3,
        status: 'aprovado',
        expirado: false
      },
      {
        id: '2',
        numeroOrcamento: 'ORC-002',
        nomeCliente: 'Maria Santos',
        dataOrcamento: new Date('2025-10-20'),
        dataValidade: new Date('2025-11-20'),
        total: 2500.00,
        itens: 5,
        status: 'pendente',
        expirado: false
      }
    ];
    this.aplicarFiltros();
  }

  aplicarFiltros(): void {
    let filtrados = [...this.orcamentos];

    // Filtro por busca
    if (this.filtro.busca) {
      filtrados = filtrados.filter(o =>
        o.numeroOrcamento.toLowerCase().includes(this.filtro.busca.toLowerCase()) ||
        o.nomeCliente.toLowerCase().includes(this.filtro.busca.toLowerCase())
      );
    }

    // Filtro por status
    if (this.filtro.status) {
      filtrados = filtrados.filter(o => o.status === this.filtro.status);
    }

    // Ordenação
    switch (this.filtro.ordenar) {
      case 'data-asc':
        filtrados.sort((a, b) => a.dataOrcamento.getTime() - b.dataOrcamento.getTime());
        break;
      case 'valor-desc':
        filtrados.sort((a, b) => b.total - a.total);
        break;
      case 'valor-asc':
        filtrados.sort((a, b) => a.total - b.total);
        break;
      case 'cliente':
        filtrados.sort((a, b) => a.nomeCliente.localeCompare(b.nomeCliente));
        break;
      default: // data-desc
        filtrados.sort((a, b) => b.dataOrcamento.getTime() - a.dataOrcamento.getTime());
    }

    this.orcamentosFiltrados = filtrados;
  }

  limparFiltros(): void {
    this.filtro = {
      busca: '',
      status: '',
      ordenar: 'data-desc'
    };
    this.aplicarFiltros();
  }

  confirmarDelecao(id: string, numero: string): void {
    if (confirm(`Tem certeza que quer deletar o orçamento ${numero}?`)) {
      this.orcamentos = this.orcamentos.filter(o => o.id !== id);
      this.aplicarFiltros();
      alert('Orçamento deletado com sucesso!');
    }
  }
}
