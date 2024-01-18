import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Todays",
};

const TodaysLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>{children}</div>
    )
}

export default TodaysLayout;