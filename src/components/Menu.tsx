import { Link } from 'react-router-dom';
import './menu.scss';
import { menu } from '../data';

export default function Menu() {
  return (
    <div className='menu'>
      {menu.map((item) => (
        <div className='item' key={item.id}>
          <span className='title'>{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className='listItem' key={listItem.id}>
              <listItem.iconComponent />
              <span>{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
