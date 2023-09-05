import { GridColDef } from '@mui/x-data-grid';
import './add.scss';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { useQueryClient, useMutation } from '@tanstack/react-query';
const serverUrl = import.meta.env.VITE_BASE_URL;

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Add(props: Props) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => {
      return fetch(`${serverUrl}/api/${props.slug}s/`, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: 111,
          img: '',
          lastName: 'Last',
          firstName: 'First',
          email: 'ok@google.com',
          phone: '123456',
          createdAt: '05.09.2023',
          verified: true,
        }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries([`all${props.slug}s`]);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate();
    props.setOpen(false);
  };
  return (
    <div className='add'>
      <div className='modal'>
        <span className='close' onClick={() => props.setOpen(false)}>
          <IoCloseCircleOutline size={30} />
        </span>
        <h1>Add New {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== 'id' && item.field !== 'img')
            .map((item) => (
              <div className='item' key={item.headerName}>
                <label>{item.headerName}</label>
                <input
                  type={item.type}
                  name=''
                  id=''
                  placeholder={item.field}
                />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}
