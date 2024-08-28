import EventCalendar from '@/components/EventCalendar';
import Announcements from '@/components/Announcements';

const StudentPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col xl:flex-row">
            {/*    left */}
            <div className="w-full xl:w-2/3">
                <div className="bg-white h-full p-4 rounded-md">
                    <h1 className="text-xl font-semibold">Schedule (4A)</h1>
                </div>
            </div>
            {/*    right */}
            <div className="w-full xl:w-1/3">
                <EventCalendar />
                <Announcements />
            </div>
        </div>
    );
};

export default StudentPage;
