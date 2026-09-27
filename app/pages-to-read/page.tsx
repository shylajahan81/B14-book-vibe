'use client';

import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';

const booksData = [
  { bookName: "The Great Gatsby", totalPages: 180 },
  { bookName: "To Kill a Mockingbird", totalPages: 324 },
  { bookName: "1984", totalPages: 328 },
  { bookName: "The Alchemist", totalPages: 208 },
  { bookName: "Pride and Prejudice", totalPages: 279 },
];

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#DC2626'];

const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height} C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props: any) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function PagesToRead() {
  return (
    <main className="px-6 py-12 max-w-7xl mx-auto bg-white min-h-screen">
      <div className="bg-gray-50 rounded-3xl p-8 shadow-sm flex flex-col items-center justify-center min-h-[600px]">
        <div className="w-full h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={booksData}
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="bookName" 
                interval={0} 
                tick={{ fontSize: 12 }} 
                angle={-10}
                textAnchor="end"
              />
              <YAxis />
              <Tooltip />
              <Bar 
                dataKey="totalPages" 
                shape={<TriangleBar />} 
                label={{ position: 'top' }}
              >
                {booksData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}