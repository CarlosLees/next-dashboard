'use client';

import Announcements from '@/components/Announcements';
import BigCalendar from '@/components/BigCalendar';

const TeacherPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col xl:flex-row flex-1">
            {/*    left */}
            <div className="w-full xl:w-2/3">
                <div className="bg-white h-full p-4 rounded-md">
                    <h1 className="text-xl font-semibold mb-2">Schedule</h1>
                    <BigCalendar />
                </div>
            </div>
            {/*    right */}
            <div className="w-full xl:w-1/3">
                <Announcements />
            </div>
        </div>
    );
};

export default TeacherPage;
