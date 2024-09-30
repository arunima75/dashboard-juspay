import React from 'react';
import DynamicTable from './Datatable'
import { Avatar } from '@mui/material';

// Status color helper function
const statusColor = (status) => {
  switch (status) {
    case 'In Progress':
      return '#8A8CD9';
    case 'Complete':
      return '#4AA785';
    case 'Pending':
      return '#59A8D4';
    case 'Approved':
      return '#FFC555';
    case 'Rejected':
      return 'rgba(28, 28, 28, 0.4)';
    default:
      return 'default';
  }
};

const columnsTable = [
  { id: 'id', label: 'Order ID'},
  { id: 'user', label: 'User', render: (row) => (
      <>
        <Avatar alt={row.user.name} src={row.user.avatar} style={{height:"24px", width:"24px", borderRadius:8}} />
        {row.user.name}
      </>
    ) },
  { id: 'project', label: 'Project' },
  { id: 'address', label: 'Address' },
  { id: 'date', label: 'Date', render:(row) =>(
       <>
       <img height={16} alt='date icon' src={row.date.icon} style={{marginRight:"8px"}}/>
       {row.date.time}
       </>
  ) },
  { id: 'status', label: 'Status', render: (row) => (
    <span  className='status' style={{ color: statusColor(row.status),  }}>
    • {row.status}
  </span>
    ) }
];

const rowsTable = [
  { id: '#CM9801', user: { name: 'Natali Craig', avatar: '/images/Natali.png' }, project: 'Landing Page', address: 'Meadow Lane Oakland', date: {icon: '/images/date.png', time:'Just now'}, status: 'In Progress' },
  { id: '#CM9802', user: { name: 'Kate Morrison', avatar: '/images/Kate.png' }, project: 'CRM Admin pages', address: 'Larry San Francisco', date: {icon: '/images/date.png', time:'A minute ago'}, status: 'Complete' },
  { id: '#CM9803', user: { name: 'Drew Cano', avatar: '/images/Drew.png' }, project: 'Client Project', address: 'Bagwell Avenue Ocala', date: {icon: '/images/date.png', time:'1 hour ago'}, status: 'Pending' },
  { id: '#CM9804', user: { name: 'Orlando Diggs', avatar: '/images/Orlando.png' }, project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: {icon: '/images/date.png', time:'Yesterday'}, status: 'Approved' },
  { id: '#CM9805', user: { name: 'Andi Lane', avatar: '/images/Andi.png' }, project: 'App Landing Page', address: 'Nest Lane Olivette', date: {icon: '/images/date.png', time: 'Feb 2, 2023'}, status: 'Rejected' },
];

function ProjectDetails () {
  return (
    <div>
      <h2>Order List</h2>
      <DynamicTable columns={columnsTable} rows={rowsTable} enablePagination={true} enableSorting={true}  enableSearch={true}  enableCheckbox={true} />
    </div>
  );
};

export default ProjectDetails;