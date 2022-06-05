import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import './index.css'

const data = [
  { name: '5 Star', value: 10 },
  { name: '4 Star', value: 8 },
  { name: '3 Star', value: 2 },
  { name: '2 Star', value: 2 },
  { name: '1 Star', value: 1 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#4B3F72'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function Graph () {

    return (
      <div className='graph-wrapper'>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={800} height={800}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              // label={renderCustomizedLabel}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
}



// export const Graph = () => {
//   return (
//     <div>This is the Graph component</div>
//   )
// }

