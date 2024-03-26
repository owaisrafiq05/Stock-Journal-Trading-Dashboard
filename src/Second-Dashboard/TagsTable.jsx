const TagsTable = () => {
    const tagsData = [
      { tag: 'consolidation', trades: 1, pnl: '$242.00', pnlPerc: '10.96%', weightedPerc: '257.45%' },
      { tag: 'bottom-bounce', trades: 1, pnl: '$50.00', pnlPerc: '9.26%', weightedPerc: '53.19%' },
      { tag: 'momentum', trades: 1, pnl: '-$198.00', pnlPerc: '-3.68%', weightedPerc: '210.64%' },
    ];
  
    return (
      <div className="overflow-x-auto relative shadow-md rounded-lg md:w-[50%]">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs uppercase bg-[#1E1F29]">
            <tr>
              <th scope="col" className="py-3 px-6">Tag</th>
              <th scope="col" className="py-3 px-6">Trades</th>
              <th scope="col" className="py-3 px-6">PnL</th>
              <th scope="col" className="py-3 px-6">PnL %</th>
              <th scope="col" className="py-3 px-6">Weighted %</th>
            </tr>
          </thead>
          <tbody className="bg-[#252836]">
            {tagsData.map((item, index) => (
              <tr key={index} className={`border-b border-[#1E1F29] ${index === tagsData.length - 1 ? 'rounded-b-lg' : ''}`}>
                <td className="py-4 px-6">{item.tag}</td>
                <td className="py-4 px-6">{item.trades}</td>
                <td className={`py-4 px-6 ${item.pnl.includes('-') ? 'text-red-500' : 'text-green-500'}`}>{item.pnl}</td>
                <td className={`py-4 px-6 ${item.pnlPerc.includes('-') ? 'text-red-500' : 'text-green-500'}`}>{item.pnlPerc}</td>
                <td className="py-4 px-6">{item.weightedPerc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  const SymbolsTable = () => {
    const symbolsData = [
      { symbol: 'BROS', trades: 1, pnl: '$242.00', pnlPerc: '10.96%', weightedPerc: '38.84%' },
      { symbol: 'PLTR', trades: 2, pnl: '-$148.00', pnlPerc: '-2.50%', weightedPerc: '37.90%' },
    ];
  
    return (
      <div className="overflow-x-auto relative shadow-md rounded-lg mt-8 md:w-[50%]">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs uppercase bg-[#1E1F29]">
            <tr>
              <th scope="col" className="py-3 px-6">Symbol</th>
              <th scope="col" className="py-3 px-6">Trades</th>
              <th scope="col" className="py-3 px-6">PnL</th>
              <th scope="col" className="py-3 px-6">PnL %</th>
              <th scope="col" className="py-3 px-6">Weighted %</th>
            </tr>
          </thead>
          <tbody className="bg-[#252836]">
            {symbolsData.map((item, index) => (
              <tr key={index} className={`border-b border-[#1E1F29] ${index === symbolsData.length - 1 ? 'rounded-b-lg' : ''}`}>
                <td className="py-4 px-6">{item.symbol}</td>
                <td className="py-4 px-6">{item.trades}</td>
                <td className={`py-4 px-6 ${item.pnl.includes('-') ? 'text-red-500' : 'text-green-500'}`}>{item.pnl}</td>
                <td className={`py-4 px-6 ${item.pnlPerc.includes('-') ? 'text-red-500' : 'text-green-500'}`}>{item.pnlPerc}</td>
                <td className="py-4 px-6">{item.weightedPerc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const Dashboard = () => {
  return (
    <div className="p-8 bg-[#2E313F] flex flex-wrap gap-7 justify-center">
      <TagsTable />
      <SymbolsTable />
    </div>
  );
};
