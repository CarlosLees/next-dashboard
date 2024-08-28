'use client';

import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Calendar from 'react-calendar';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
    {
        id: 1,
        title: 'Lorem ipsum dolor',
        time: '12:00 PM - 2:00 PM',
        description: 'Lorem ipsum dolor sit amet, consectetur ',
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor',
        time: '12:00 PM - 2:00 PM',
        description: 'Lorem ipsum dolor sit amet, consectetur ',
    },
    {
        id: 3,
        title: 'Lorem ipsum dolor',
        time: '12:00 PM - 2:00 PM',
        description: 'Lorem ipsum dolor sit amet, consectetur ',
    },
];

const EventCalendar = () => {
    const [value, onchange] = useState<Value>(new Date());
    return (
        <div className="bg-white p-4 rounded-md">
            <Calendar value={value} onChange={onchange} locale="zh" />
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold my-4">Events</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <div className="flex flex-col gap-4">
                {events.map((item) => (
                    <div
                        key={item.id}
                        className="p-5 rounded-md border-2 border-gray-100 odd:border-t-lamaSky
                    even:border-t-lamaPurple"
                    >
                        <div className="flex justify-between items-center">
                            <h1 className="font-semibold text-gray-600">{item.title}</h1>
                            <span className="text-gray-300 text-xs">{item.time}</span>
                        </div>
                        <div className="mt-2 text-gray-400 text-sm">{item.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventCalendar;
