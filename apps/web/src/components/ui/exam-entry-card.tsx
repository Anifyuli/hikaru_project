import { Clock, Ellipsis } from 'lucide-react';

export default function ExamEntryCard() {
  return (
    <div className="flex h-20 w-full flex-row overflow-hidden rounded-lg shadow-sm">
      <div className="flex w-16 items-center justify-center bg-emerald-500 py-3">
        <p className="text-primary-content text-sm font-bold">CS100</p>
      </div>
      <div className="flex flex-1 flex-row items-center justify-between bg-white p-3">
        <div className="font-medium">Midterm Exam #1</div>
        <div className="flex items-center text-xs text-neutral">
          <Clock size={14} className="mx-1 inline" />
          <span>IN 2 HOURS AND 2 MINUTES</span>
          <button className="mx-3">
            <Ellipsis />
          </button>
        </div>
      </div>
    </div>
  );
}
