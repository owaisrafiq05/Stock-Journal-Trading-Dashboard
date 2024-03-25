const hero2 = () => {
    const tableData = [
      {
        date: '3/11/2022',
        symbol: 'SAAP',
        status: 'SHORT',
        side: 'SELL',
        qty: '50',
        entry: '10.80',
        exit: '11.80',
        entTot: '540.00',
        extTot: '590.00',
        hold: '-',
        return: '50.00',
        returnPerc: '9.26%',
        statusColor: 'text-green-500'
      },
      {
        date: '3/10/2022',
        symbol: 'BROS',
        status: 'SHORT',
        side: 'SELL',
        qty: '50',
        entry: '44.16',
        exit: '49.00',
        entTot: '2208.00',
        extTot: '2450.00',
        hold: '-',
        return: '242.00',
        returnPerc: '10.96%',
        statusColor: 'text-green-500'
      },
      {
        date: '11/9/2021',
        symbol: 'PLTR',
        status: 'SHORT',
        side: 'SELL',
        qty: '200',
        entry: '26.89',
        exit: '25.90',
        entTot: '5378.00',
        extTot: '5180.00',
        hold: '-',
        return: '-198.00',
        returnPerc: '-3.68%',
        statusColor: 'text-red-500'
      },
    ];
  
    return (
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-[95%] mx-auto">
        <table className="w-full text-sm text-left text-gray-400 rounded-3xl">
          <thead className="text-xs uppercase  text-gray-400 uppercase bg-gray-800 rounded-t-lg">
  <tr>
              <th scope="col" className="py-3 px-6">Date</th>
              <th scope="col" className="py-3 px-6">Symbol</th>
              <th scope="col" className="py-3 px-6">Status</th>
              <th scope="col" className="py-3 px-6">Side</th>
              <th scope="col" className="py-3 px-6">Qty</th>
              <th scope="col" className="py-3 px-6">Entry</th>
              <th scope="col" className="py-3 px-6">Exit</th>
              <th scope="col" className="py-3 px-6">Ent Tot</th>
              <th scope="col" className="py-3 px-6">Ext Tot</th>
              <th scope="col" className="py-3 px-6">Pos</th>
              <th scope="col" className="py-3 px-6">Hold</th>
              <th scope="col" className="py-3 px-6">Return</th>
              <th scope="col" className="py-3 px-6">Return %</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index} className={`bg-gray-800 border-gray-700 ${index === 0 ? 'rounded-t-lg' : ''} ${index === tableData.length - 1 ? 'rounded-b-lg' : ''}`}>
                <td className="py-4 px-6">{item.date}</td>
                <td className="py-4 px-6">{item.symbol}</td>
                <td className="py-4 px-6">{item.status}</td>
                <td className="py-4 px-6">{item.side}</td>
                <td className="py-4 px-6">{item.qty}</td>
                <td className="py-4 px-6">{item.entry}</td>
                <td className="py-4 px-6">{item.exit}</td>
                <td className="py-4 px-6">{item.entTot}</td>
                <td className="py-4 px-6">{item.extTot}</td>
                <td className="py-4 px-6">{item.pos}</td>
                <td className="py-4 px-6">{item.hold}</td>
                <td className={`py-4 px-6 font-semibold ${item.statusColor}`}>{item.return}</td>
                <td className={`py-4 px-6 font-semibold ${item.statusColor}`}>{item.returnPerc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default hero2;