import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts';
import './barchartbox.scss';

type Props = {
  title: string;
  dataKey: string;
  color: string;
  chartData: object[];
};

export default function BarChartBox(props: Props) {
  return (
    <div className='barChartBox'>
      <h1>{props.title}</h1>
      <div className='chart'>
        <ResponsiveContainer width='100%' height={150}>
          <BarChart width={150} height={40} data={props.chartData}>
            <Tooltip
              contentStyle={{ backgroundColor: '#2a3447', borderRadius: '5px' }}
              labelStyle={{ display: 'none' }}
              cursor={{ fill: 'none' }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
