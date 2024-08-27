'use client';

import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';

import Image from 'next/image';

import { radiaChartData } from '@/constants/CountChartConstants';

const CountChart = () => {
    return (
        <div className="bg-white w-full h-full p-4 rounded-xl">
            {/* title */}
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Student</h1>
                <Image src="/moreDark.png" alt="more" width={20} height={20} />
            </div>
            {/* charts */}
            <div className="w-full h-[75%] relative">
                <ResponsiveContainer>
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="40%"
                        outerRadius="100%"
                        barSize={32}
                        data={radiaChartData}
                    >
                        <RadialBar background dataKey="count" />
                    </RadialBarChart>
                </ResponsiveContainer>

                <Image
                    src="/maleFemale.png"
                    alt="male"
                    width={50}
                    height={50}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
            </div>
            {/* bottom */}
            <div className="flex justify-center gap-16">
                {/* left */}
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-lamaSky rounded-full" />
                    <h1 className="font-bold">1,234</h1>
                    <h2 className="text-xs text-gray-300">Boys (55%)</h2>
                </div>
                {/* right */}
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-lamaYellow rounded-full" />
                    <h1 className="font-bold">1,234</h1>
                    <h2 className="text-xs text-gray-300">Girls (45%)</h2>
                </div>
            </div>
        </div>
    );
};

export default CountChart;
