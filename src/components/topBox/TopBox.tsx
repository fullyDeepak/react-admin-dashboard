import './topbox.scss';
import { topDealUsers } from '../../data';

export default function TopBox() {
  return (
    <div className='topbox'>
      <h1>Top Deals</h1>
      {topDealUsers.map((item) => (
        <div key={item.id} className='topDealsItem'>
          <div>
            <img src={item.img} alt='' />
            <span>
              <p>{item.username}</p>
              <p>{item.email}</p>
            </span>
          </div>
          <p className='deal-amount'>₹{item.amount}</p>
        </div>
      ))}
    </div>
  );
}
