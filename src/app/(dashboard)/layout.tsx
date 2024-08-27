import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Menu from '@/components/Menu';
import Navbar from '@/components/Navbar';

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen">
            {/* left */}
            <div className="w-1/6 md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
                <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
                    <Image src="/logo.png" alt="logo" width={32} height={32} />
                    <span className="hidden lg:block">School Lama</span>
                </Link>
                <Menu />
            </div>
            {/* right */}
            <div className="w-5/6 md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
                <Navbar />
                {children}
            </div>
        </div>
    );
};

export default DashBoardLayout;
