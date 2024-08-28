'use client';

import Image from 'next/image';
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import { fianceChartConstantsData } from '@/constants/FianceChartConstants';

const FianceChart = () => {
    return (
        <div className="bg-white rounded-lg p-4 h-full">
            {/* title */}
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">FianceChart</h1>
                <Image src="/moreDark.png" alt="more" width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={fianceChartConstantsData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#d1d5db' }}
                        tickMargin={10}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#d1d5db' }}
                        tickMargin={20}
                    />
                    <Tooltip />
                    <Legend
                        align="center"
                        verticalAlign="top"
                        wrapperStyle={{ paddingTop: '10px', paddingBottom: '30px' }}
                    />
                    <Line type="monotone" dataKey="income" stroke="#C3EBFA" strokeWidth={5} />
                    <Line type="monotone" dataKey="expense" stroke="#CFCEFF " strokeWidth={5} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default FianceChart;
