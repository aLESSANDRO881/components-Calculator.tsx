import React from 'react';
import Header from './components/Header';
import Calculator from './components/Calculator';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100 font-sans selection:bg-orange-200">
      <Header />
      <main>
        <Calculator />
      </main>
    </div>
  );
};

export default App;