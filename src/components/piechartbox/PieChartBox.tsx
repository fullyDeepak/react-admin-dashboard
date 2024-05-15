import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import './piechartbox.scss';

type ChartDataItem = {
  name: string;
  value: number;
  color: string;
};

type Props = {
  title: string;
  chartData: ChartDataItem[];
};

export default function PieChartBox(props: Props) {
  return (
    <div className='pieChartBox'>
      <h1>{props.title}</h1>
      <div className='chart'>
        <ResponsiveContainer width='99%' height={300}>
          <PieChart>
            <Pie
              data={props.chartData}
              //   cx={120}
              //   cy={200}
              innerRadius={'70%'}
              outerRadius={'90%'}
              //   fill='#ff0000'
              paddingAngle={5}
              dataKey='value'>
              {props.chartData.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: 'white', borderRadius: '5px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className='optionContainer'>
        {props.chartData.map((item) => (
          <div className='option' key={item.name}>
            <div className='title'>
              <div className='dot' style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
