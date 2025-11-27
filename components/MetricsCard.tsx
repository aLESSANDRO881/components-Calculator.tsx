import React from 'react';

interface MetricsCardProps {
  label: string;
  value: string;
  subValue?: string;
  colorClass?: string;
  highlight?: boolean;
}

export const MetricsCard: React.FC<MetricsCardProps> = ({ 
  label, 
  value, 
  subValue,
  colorClass = "text-slate-800",
  highlight = false
}) => {
  return (
    <div className={`p-4 rounded-xl border ${highlight ? 'bg-slate-50 border-slate-200' : 'bg-white border-slate-100'} shadow-sm flex flex-col items-center justify-center text-center transition-all duration-300`}>
      <span className="text-slate-500 text-xs uppercase font-semibold tracking-wider mb-1">{label}</span>
      <span className={`text-2xl font-bold ${colorClass}`}>
        {value}
      </span>
      {subValue && (
        <span className="text-xs text-slate-400 mt-1">{subValue}</span>
      )}
    </div>
  );
};