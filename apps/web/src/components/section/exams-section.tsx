import React, { useState } from 'react';

type Exam = {
  courseCode: string;
  courseName: string;
  examTitle: string;
  date: string; // ISO format
};

const exams: Exam[] = [
  {
    courseCode: 'CS100',
    courseName: 'Introduction to Computer Science',
    examTitle: 'Midterm Exam #1',
    date: '2025-05-09T13:00:00Z',
  },
  {
    courseCode: 'CS288',
    courseName: 'Data Structures',
    examTitle: 'Weekly Exam #3',
    date: '2025-05-10T08:00:00Z',
  },
  {
    courseCode: 'CS100',
    courseName: 'Introduction to Computer Science',
    examTitle: 'Final Exam',
    date: '2025-05-20T09:00:00Z',
  },
];

const formatDateTime = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const ExamsSection: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const courseOptions = Array.from(new Set(exams.map((e) => `${e.courseCode}|${e.courseName}`)));
  const filteredExams = filter === 'All' ? exams : exams.filter((e) => `${e.courseCode}|${e.courseName}` === filter);

  const selectedLabel =
    filter === 'All'
      ? 'All Courses'
      : (() => {
          const [code, name] = filter.split('|');
          return `${code} – ${name}`;
        })();

  return (
    <div className="w-full space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">All Upcoming Exams</h2>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-md">
            {selectedLabel} ▼
          </div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[100] w-52 shadow">
            <li>
              <a onClick={() => setFilter('All')} className={filter === 'All' ? 'active' : ''}>
                All Courses
              </a>
            </li>
            {courseOptions.map((opt) => {
              const [code, name] = opt.split('|');
              return (
                <li key={opt}>
                  <a onClick={() => setFilter(opt)} className={filter === opt ? 'active' : ''}>
                    {code} – {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        {filteredExams.map((exam) => (
          <div
            key={`${exam.courseCode}-${exam.examTitle}`}
            className="flex items-center justify-between rounded-xl bg-white p-4 shadow transition hover:bg-gray-50"
          >
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-green-600 px-3 py-1 text-sm font-semibold text-white">
                {exam.courseCode}
              </span>
              <div>
                <div className="font-semibold">{exam.examTitle}</div>
                <div className="text-sm text-gray-500">{exam.courseName}</div>
              </div>
            </div>
            <div className="text-sm text-gray-600">{formatDateTime(exam.date)}</div>
          </div>
        ))}
        {filteredExams.length === 0 && <p className="text-gray-500 italic">No exams found for selected course.</p>}
      </div>
    </div>
  );
};
