import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import './single.scss';

type Props = {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities: { time: string; text: string }[];
};

export default function Single(props: Props) {
  console.log(props);
  return (
    <div className='single'>
      <div className='view'>
        <div className='info'>
          <div className='topInfo'>
            {props.img && <img src={props.img} alt='' />}
            <h1>{props.title}</h1>
            <button>Update</button>
          </div>
        </div>
        <div className='detail'>
          {Object.entries(props.info).map((item) => (
            <div className='item' key={item[0]}>
              <span className='itemTitle'>{item[0]}:</span>
              <span className='itemValue'>{item[1]}</span>
            </div>
          ))}
        </div>
        <hr />
        {props.chart && (
          <div className='chart'>
            <ResponsiveContainer width='100%' height='100%'>
              <LineChart
                width={500}
                height={300}
                data={props.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}>
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                {props.chart.dataKeys.map((dataKey) => (
                  <Line
                    key={dataKey.color[0]}
                    type='monotone'
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                    // activeDot={{ r: 8 }}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className='activities'>
        <h2>Activities</h2>
        {props.activities && (
          <ul>
            {props.activities.map((activity, index) => (
              <li key={index}>
                <div>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
