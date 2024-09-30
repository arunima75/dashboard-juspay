import React from 'react';
import DynamicTable from './Datatable'

const columnsTable = [
  { id: 'name', label: 'Name' },
  { id: 'price', label: 'Price'},
  { id: 'qty', label: 'Quantity' },
  { id: 'amt', label: 'Amount' }
];

const rowsTable = [
  {name: 'ASOS Ridley High Waist', price: '$79.49', qty: '82', amt: '$6,518.18' },
  {name: 'Marco Lightweight Shirt', price: '$128.50', qty: '37', amt: '$4,754.50' },
  {name: 'Half Sleeve Shirt', price: '$39.99', qty: '64', amt: '$2,559.36' },
  {name: 'Lightweight Jacket', price: '$20.00', qty: '184', amt: '$3,680.00' },
  {name: 'Macro Shoes', price: '$79.49', qty: '64', amt: '$1,965.81' },
];

function TopSellingList() {
  return (
    <div>
      <DynamicTable columns={columnsTable} rows={rowsTable}/>
    </div>
  );
};

export default TopSellingList;