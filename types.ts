export interface Product {
  id: number;
  nome: string;
  unidades_pct: number;
  preco_sugerido: number;
}

export interface CalculationResult {
  custoPorcao: number;
  lucroLiquido: number;
  margemLucro: number;
}

export interface HistoryItem {
  id: string;
  timestamp: number;
  nome: string;
  inputs: {
    custoPacote: number;
    unidadesPacote: number;
    precoVenda: number;
    unidadesPorcao: number;
  };
  resultado: CalculationResult;
}