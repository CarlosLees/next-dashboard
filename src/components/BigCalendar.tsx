import { Calendar, Event, momentLocalizer, View, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { useState } from 'react';

import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment-timezone';

import { calendarEvents } from '@/lib/data';

moment.locale('zh-cn');
moment.tz.setDefault('Asia/Shanghai');

const localizer = momentLocalizer(moment);

const MyEvent = ({ event }: { event: Event }) => (
    <div>
        <p>{event.title}</p>
    </div>
);

const BigCalendar = () => {
    const [view, setView] = useState<View>(Views.WORK_WEEK);

    return (
        <div className="h-full relative pb-8 hidden sm:block">
            <Calendar
                components={{
                    event: MyEvent,
                }}
                localizer={localizer}
                events={calendarEvents}
                startAccessor="start"
                endAccessor="end"
                views={['day', 'work_week'] as View[]}
                view={view}
                style={{ minHeight: '98%' }}
                onView={(selectView) => setView(selectView)}
                min={new Date(2025, 1, 0, 8, 0, 0)}
                max={new Date(2025, 1, 0, 22, 0, 0)}
            />
        </div>
    );
};

export default BigCalendar;
