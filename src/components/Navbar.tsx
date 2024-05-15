import './navbar.scss';
import {
  MdSearch,
  MdOutlineSettings,
  MdOutlineSpaceDashboard,
} from 'react-icons/md';
import { RxEnterFullScreen } from 'react-icons/rx';
import { FcCircuit } from 'react-icons/fc';
import { BsBell } from 'react-icons/bs';
import { PiUserCircleDuotone } from 'react-icons/pi';
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <FcCircuit size={32} />
        <span>React Dashboard</span>
      </div>
      <div className='icons'>
        <MdSearch className='icon' />
        <MdOutlineSpaceDashboard className='icon' />
        <RxEnterFullScreen className='icon' />
        <div className='notification'>
          <BsBell />
          <span>1</span>
        </div>
        <div className='user'>
          <PiUserCircleDuotone />
          <span>Deepak</span>
        </div>
        <MdOutlineSettings className='icon' />
      </div>
    </div>
  );
}
