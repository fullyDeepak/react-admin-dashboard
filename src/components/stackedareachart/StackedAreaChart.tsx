import {
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  AreaChart,
} from 'recharts';
import './stackedareachart.scss';

type AreaData = {
  dataKey: string;
  stroke: string;
  fill: string;
};

type ChartData = {
  name: string;
  books: number;
  clothes: number;
  electronic: number;
};

type Props = {
  title: string;
  chartData: ChartData[];
  areaData: AreaData[];
};

export default function StackedAreaChart(props: Props) {
  return (
    <div className='stackedAreaChart'>
      <h1>{props.title}</h1>
      <div className='chart'>
        <ResponsiveContainer width='99%' height='100%'>
          <AreaChart
            width={500}
            height={400}
            data={props.chartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}>
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            {props.areaData.map((item) => (
              <Area
                type='natural'
                dataKey={item.dataKey}
                stackId='1'
                stroke={item.stroke}
                fill={item.fill}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
