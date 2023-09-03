import ChartBox from '../../components/chartBox/ChartBox';
import TopBox from '../../components/topBox/TopBox';
import { chartBoxUser } from '../../data';
import './home.scss';
export default function Home() {
  return (
    <div className='home'>
      <div className='box box1'>
        <TopBox />
      </div>
      <div className='box box2'>
        <ChartBox {...chartBoxUser} />
      </div>
      <div className='box box3'>box 3</div>
      <div className='box box4'>box 4</div>
      <div className='box box5'>box 5</div>
      <div className='box box6'>box 6</div>
      <div className='box box7'>box 7</div>
      <div className='box box8'>box 8</div>
      <div className='box box9'>box 9</div>
    </div>
  );
}
