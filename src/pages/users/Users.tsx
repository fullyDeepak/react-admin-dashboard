import { FcManager } from 'react-icons/fc';
import DataTable from '../../components/dataTable/DataTable';
import './users.scss';
import { GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';
import Add from '../../components/add/Add';
import { useQuery } from '@tanstack/react-query';
const serverUrl = import.meta.env.VITE_BASE_URL;

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'img',
    headerName: 'Avatar',
    width: 100,
    renderCell: (params) => {
      return params.row.img ? (
        <img src={params.row.img} alt='' />
      ) : (
        <FcManager size={30} />
      );
    },
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 150,
    editable: true,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 150,
    editable: true,
    type: 'string',
  },
  {
    field: 'verified',
    headerName: 'Verified',
    width: 100,
    type: 'boolean',
  },
];

export default function Users() {
  const [open, setOpen] = useState(false);

  const { isLoading, data } = useQuery({
    queryKey: ['allusers'],
    queryFn: () => fetch(`${serverUrl}/api/users`).then((res) => res.json()),
  });

  return (
    <div className='users'>
      <div className='info'>
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      {isLoading ? (
        'Loading...'
      ) : (
        <DataTable slug='users' columns={columns} rows={data} />
      )}
      {open && <Add slug='user' columns={columns} setOpen={setOpen} />}
    </div>
  );
}
