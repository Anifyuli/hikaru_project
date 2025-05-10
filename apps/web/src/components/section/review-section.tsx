import React from 'react';

type ReviewItem = {
  examTitle: string;
  courseCode: string;
  courseName: string;
  date: string; // ISO format
  reviewed: boolean;
};

const reviews: ReviewItem[] = [
  {
    examTitle: 'Midterm Exam #1',
    courseCode: 'CS100',
    courseName: 'Introduction to Computer Science',
    date: '2025-05-09T13:00:00Z',
    reviewed: false,
  },
  {
    examTitle: 'Weekly Exam #3',
    courseCode: 'CS288',
    courseName: 'Data Structures',
    date: '2025-05-10T08:00:00Z',
    reviewed: true,
  },
  {
    examTitle: 'Final Exam',
    courseCode: 'CS100',
    courseName: 'Introduction to Computer Science',
    date: '2025-05-20T09:00:00Z',
    reviewed: false,
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

export const ReviewSection: React.FC = () => {
  return (
    <div className="w-full space-y-6 p-6">
      <h2 className="text-2xl font-bold">Review Exams</h2>

      <div className="space-y-4">
        {reviews.map((item, index) => (
          <div
            key={`${item.courseCode}-${item.examTitle}-${index}`}
            className="flex items-center justify-between rounded-xl bg-white p-4 shadow hover:bg-gray-50"
          >
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
                {item.courseCode}
              </span>
              <div>
                <div className="font-semibold">{item.examTitle}</div>
                <div className="text-sm text-gray-500">{item.courseName}</div>
                <div className="text-xs text-gray-400">{formatDate(item.date)}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className={`badge ${item.reviewed ? 'badge-success' : 'badge-warning'} text-xs`}>
                {item.reviewed ? 'Reviewed' : 'Not Reviewed'}
              </span>
              <button className="btn btn-sm btn-outline">{item.reviewed ? 'View' : 'Start Review'}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
