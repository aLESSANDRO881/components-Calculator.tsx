import React from 'react';
import { Calculator } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 text-white p-6 shadow-lg rounded-b-2xl mb-6">
      <div className="flex items-center justify-center gap-3">
        <div className="bg-orange-500 p-2 rounded-lg">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <div className="text-center">
          <h1 className="text-xl font-bold tracking-tight">Calculadora</h1>
          <p className="text-slate-300 text-sm font-medium">de Lucro por Porção</p>
        </div>
      </div>
    </header>
  );
};

export default Header;