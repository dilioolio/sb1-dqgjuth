import React, { useState, useEffect } from 'react';
import { HelpCircle, Calculator, DollarSign } from 'lucide-react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => (
  <div className="group relative inline-block">
    {children}
    <div className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full opacity-0 transition-opacity group-hover:opacity-100">
      <div className="whitespace-nowrap rounded bg-gray-900 px-3 py-1.5 text-sm text-white">
        {text}
        <div className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  </div>
);

const CPCCalculator: React.FC = () => {
  const [adSpend, setAdSpend] = useState<string>('1000');
  const [clicks, setClicks] = useState<string>('100');
  const [cpc, setCPC] = useState<number>(0);

  useEffect(() => {
    const adSpendNum = parseFloat(adSpend) || 0;
    const clicksNum = parseInt(clicks) || 1;
    setCPC(adSpendNum / clicksNum);
  }, [adSpend, clicks]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const value = e.target.value.replace(/[^\d.]/g, '');
    setter(value);
  };

  return (
    <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calculator className="h-6 w-6 text-indigo-600" />
          <h2 className="text-xl font-bold text-gray-900">CPC Calculator</h2>
        </div>
        <div className="rounded-full bg-indigo-100 p-2">
          <DollarSign className="h-5 w-5 text-indigo-600" />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700">
            Ad Spend
            <Tooltip text="Total amount spent on your advertising campaign">
              <HelpCircle className="h-4 w-4 cursor-help text-gray-400" />
            </Tooltip>
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              $
            </span>
            <input
              type="text"
              value={adSpend}
              onChange={(e) => handleInputChange(e, setAdSpend)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-8 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter ad spend"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700">
            Total Clicks
            <Tooltip text="Number of clicks received from your ads">
              <HelpCircle className="h-4 w-4 cursor-help text-gray-400" />
            </Tooltip>
          </label>
          <input
            type="text"
            value={clicks}
            onChange={(e) => handleInputChange(e, setClicks)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter total clicks"
          />
        </div>

        <div className="mt-6 rounded-lg bg-gradient-to-r from-indigo-50 to-indigo-100 p-4">
          <div className="text-center">
            <p className="text-sm font-medium text-gray-600">
              Cost Per Click (CPC)
            </p>
            <p className="mt-1 text-3xl font-bold text-indigo-600">
              ${cpc.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center text-xs text-gray-500">
        CPC = Total Ad Spend / Number of Clicks
      </div>
    </div>
  );
};

export default CPCCalculator;