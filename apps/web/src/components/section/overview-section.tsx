'use client';

import { useEffect, useState } from 'react';
import ExamEntryCard from '../ui/exam-entry-card';

export default function OverviewSection() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = date.getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const formatDate = (d: Date) =>
    d.toLocaleDateString('en-US', { weekday: 'long', month: 'numeric', day: 'numeric', year: 'numeric' });

  const formatTime = (d: Date) => d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full items-start justify-between p-12">
        {/* Tengah: Sapaan */}
        <div className="text-3xl font-bold">
          {getGreeting()},<br />
          Dian Sastro!
        </div>

        {/* Kanan: Tanggal dan Waktu */}
        <div className="text-right text-sm text-gray-500">
          <p>{date.toLocaleDateString('en-US', { weekday: 'long' })}</p>
          <p>{formatDate(date)}</p>
          <p>{formatTime(date)}</p>
        </div>
      </div>
      <div className="px-12">
        <p className="mb-6">What's coming up: </p>
        <div className="flex flex-col gap-6">
          <ExamEntryCard />
          <ExamEntryCard />
        </div>
        <div className="my-12">
          <p>   
            <span className="font-bold">That's it!</span> Make sure you utilize your free time well!
          </p>
        </div>
      </div>
    </div>
  );
}
