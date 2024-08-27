'use client';

import Image from 'next/image';
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import { attendanceChartData } from '@/constants/AttendanceChartConstants';

const AttendanceChart = () => {
    return (
        <div className="bg-white rounded-lg p-4 h-full">
            {/* title */}
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Attendance</h1>
                <Image src="/moreDark.png" alt="more" width={20} height={20} />
            </div>
            {/*  chart  */}
            <ResponsiveContainer width="100%" height="90%">
                <BarChart width={500} height={300} data={attendanceChartData} barSize={20}>
                    {/* CartesianGrid坐标表格 vertical纵轴 stroke横轴颜色 */}
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
                    {/* XAxis YAxis 两条坐标轴 */}
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#d1d5db' }}
                    />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#d1d5db' }} />
                    {/* Tooltip 鼠标放上后的提示 */}
                    <Tooltip contentStyle={{ borderRadius: '10px', borderColor: 'lightgray' }} />
                    {/* Legend 下面的分类提示 */}
                    <Legend
                        align="left"
                        verticalAlign="top"
                        wrapperStyle={{ paddingTop: '20px', paddingBottom: '40px' }}
                    />
                    <Bar
                        dataKey="present"
                        fill="#FAE27C"
                        // activeBar={<Rectangle fill="pink" stroke="blue" />}
                        legendType="circle"
                        radius={[10, 10, 0, 0]}
                    />
                    <Bar
                        dataKey="absent"
                        fill="#C3EBFA"
                        // activeBar={<Rectangle fill="gold" stroke="purple" />}
                        legendType="circle"
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AttendanceChart;
