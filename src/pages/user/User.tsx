import Single from '../../components/single/Single';
import { singleUser } from '../../data';
import './user.scss';

export default function User() {
  //fetch data and send to single user
  return (
    <div className='user'>
      <Single {...singleUser} />
    </div>
  );
}
