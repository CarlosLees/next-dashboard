const Announcements = () => {
    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Announcements</h1>
                <span className="text-[12px] text-gray-500">View All</span>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                {/* 1 */}
                <div className="bg-lamaSkyLight rounded-md p-4">
                    <div className="flex justify-between items-center">
                        <h2 className="font-medium">Lorem ipsum dolor sit amet</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                            2023-12-31
                        </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi
                        cumque
                    </p>
                </div>
                {/* 2 */}
                <div className="bg-lamaPurpleLight rounded-md p-4">
                    <div className="flex justify-between items-center">
                        <h2 className="font-medium">Lorem ipsum dolor sit amet</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                            2023-12-31
                        </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi
                        cumque
                    </p>
                </div>
                {/* 3 */}
                <div className="bg-lamaYellowLight rounded-md p-4">
                    <div className="flex justify-between items-center">
                        <h2 className="font-medium">Lorem ipsum dolor sit amet</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                            2023-12-31
                        </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi
                        cumque
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Announcements;
