import { GridColDef } from '@mui/x-data-grid';
import './add.scss';
import { IoCloseCircleOutline } from 'react-icons/io5';

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Add(props: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //add new item
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
              <div className='item'>
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
