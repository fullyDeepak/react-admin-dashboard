import BarChartBox from '../../components/barchartbox/BarChartBox';
import ChartBox from '../../components/chartBox/ChartBox';
import PieChartBox from '../../components/piechartbox/PieChartBox';
import StackedAreaChart from '../../components/stackedareachart/StackedAreaChart';
import TopBox from '../../components/topBox/TopBox';
import {
  chartBoxUser,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  barChartBoxVisit,
  barChartBoxRevenue,
  LeadsBySource,
  revenueAnalytics,
} from '../../data';
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
      <div className='box box3'>
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className='box box4'>
        <PieChartBox {...LeadsBySource} />
      </div>
      <div className='box box5'>
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className='box box6'>
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className='box box7'>
        <StackedAreaChart {...revenueAnalytics} />
      </div>
      <div className='box box8'>
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className='box box9'>
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
}
