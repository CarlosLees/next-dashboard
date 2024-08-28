import UserCard from '@/components/UserCard';
import CountChart from '@/components/CountChart';
import AttendanceChart from '@/components/AttendanceChart';
import FianceChart from '@/components/FianceChart';
import EventCalendar from '@/components/EventCalendar';
import Announcements from '@/components/Announcements';

const AdminPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            {/*  left  */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                {/* user card */}
                <div className="flex justify-between gap-4 flex-wrap">
                    <UserCard type="student" />
                    <UserCard type="teacher" />
                    <UserCard type="parent" />
                    <UserCard type="staff" />
                </div>
                {/* middle charts */}
                <div className="flex gap-4 flex-col lg:flex-row">
                    {/* count charts */}
                    <div className="w-full lg:w-1/3 h-[450px]">
                        <CountChart />
                    </div>
                    {/* attendance charts */}
                    <div className="w-full lg:w-2/3 h-[450px]">
                        <AttendanceChart />
                    </div>
                </div>
                {/* bottom charts */}
                <div className="w-full h-[500px]">
                    <FianceChart />
                </div>
            </div>
            {/*  right  */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
                <EventCalendar />
                <Announcements />
            </div>
        </div>
    );
};

export default AdminPage;
