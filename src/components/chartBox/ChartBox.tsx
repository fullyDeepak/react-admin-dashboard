import './chartbox.scss';
import { Link } from 'react-router-dom';
import { ResponsiveContainer, LineChart, Line, Tooltip } from 'recharts';

type Props = {
  color: string;
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  dataKey: string;
  number: string;
  percentage: number;
  chartData: object[];
};

export default function ChartBox(props: Props) {
  return (
    <div className='chartbox'>
      <div className='boxInfo'>
        <div className='title'>
          {<props.icon size={28} />}
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to='/' style={{ color: props.color }}>
          View All
        </Link>
      </div>
      <div className='chartInfo'>
        <div className='chart'>
          <ResponsiveContainer
            width='99%'
            height='100%'
            minHeight={100}
            minWidth={100}>
            <LineChart data={props.chartData}>
              <Line
                type='monotone'
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'transparent',
                  border: 'none',
                }}
                labelStyle={{ display: 'none' }}
                position={{ x: 20, y: 50 }}
                label={{ color: 'white' }}
                itemStyle={{
                  color: 'white',
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className='texts'>
          <div
            className='percentage'
            style={{ color: props.percentage < 0 ? 'tomato' : 'limegreen' }}>
            {props.percentage}%
          </div>
          <div className='duration'>this months</div>
        </div>
      </div>
    </div>
  );
}
