import React from 'react';

type HistoryItem = {
  examTitle: string;
  courseCode: string;
  courseName: string;
  date: string; // ISO
  score: number;
  passed: boolean;
};

const historyData: HistoryItem[] = [
  {
    examTitle: 'Midterm Exam #1',
    courseCode: 'CS100',
    courseName: 'Introduction to Computer Science',
    date: '2025-05-09T13:00:00Z',
    score: 82,
    passed: true,
  },
  {
    examTitle: 'Weekly Exam #3',
    courseCode: 'CS288',
    courseName: 'Data Structures',
    date: '2025-05-10T08:00:00Z',
    score: 58,
    passed: false,
  },
  {
    examTitle: 'Final Exam',
    courseCode: 'CS100',
    courseName: 'Introduction to Computer Science',
    date: '2025-05-20T09:00:00Z',
    score: 91,
    passed: true,
  },
];

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export const HistorySection: React.FC = () => {
  return (
    <div className="w-full space-y-6 p-6">
      <h2 className="text-2xl font-bold">Exam History</h2>

      <div className="space-y-4">
        {historyData.map((item, index) => (
          <div
            key={`${item.courseCode}-${item.examTitle}-${index}`}
            className="flex items-center justify-between rounded-xl bg-white p-4 shadow hover:bg-gray-50"
          >
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-gray-500 px-3 py-1 text-sm font-semibold text-white">
                {item.courseCode}
              </span>
              <div>
                <div className="font-semibold">{item.examTitle}</div>
                <div className="text-sm text-gray-500">{item.courseName}</div>
                <div className="text-xs text-gray-400">{formatDate(item.date)}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className={`badge text-xs ${item.passed ? 'badge-success' : 'badge-error'}`}>
                {item.passed ? 'Passed' : 'Failed'}
              </span>
              <span className="font-semibold">{item.score} / 100</span>
              <button className="btn btn-sm btn-outline">View Result</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
