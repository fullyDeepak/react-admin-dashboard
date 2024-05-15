import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import './datatable.scss';
import { Link } from 'react-router-dom';
import { PiEye } from 'react-icons/pi';
import { MdDeleteOutline } from 'react-icons/md';
import { useQueryClient, useMutation } from '@tanstack/react-query';
const serverUrl = import.meta.env.VITE_BASE_URL;
type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

export default function DataTable(props: Props) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id: number) => {
      return fetch(`${serverUrl}/api/${props.slug}/${id}`, {
        method: 'delete',
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries([`all${props.slug}`]);
    },
  });
  const handleDelete = (id: number) => {
    //delete the id
    mutation.mutate(id);
  };

  const actionColumn: GridColDef = {
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell: (params) => {
      return (
        <div className='action'>
          <Link to={`/${props.slug}/${params.row.id}`}>
            <PiEye color='green' size={20} />
          </Link>
          <div className='delete' onClick={() => handleDelete(params.row.id)}>
            <MdDeleteOutline color='red' size={20} />
          </div>
        </div>
      );
    },
  };
  return (
    <div className='datatable'>
      <DataGrid
        sx={{ width: '100%' }}
        className='dataGrid'
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: {
              debounceMs: 500,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
}
