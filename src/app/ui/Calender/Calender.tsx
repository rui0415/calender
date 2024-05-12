"use client"

import React, { useState } from 'react';
import Card from './Card';
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
import { TbPlayerTrackPrev, TbPlayerTrackNext } from "react-icons/tb";
import { createClient } from '../../../../utils/supabase/client';
import { User } from '@supabase/supabase-js';

const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const dayOfWeek = (year: number, month: number, day: number) => new Date(year, month, day).getDay();

enum Week {
    Sunday = "日",
    Monday = "月",
    Tuesday = "火",
    Wednesday = "水",
    Thursday = "木",
    Friday = "金",
    Saturday = "土",
}

const weekColorMap: { [key in Week]: string } = {
    "月": "grey",
    "火": "red",
    "水": "cyan",
    "木": "lime",
    "金": "violet",
    "土": "teal",
    "日": "orange",
};

const weekDays: Week[] = [Week.Sunday, Week.Monday, Week.Tuesday, Week.Wednesday, Week.Thursday, Week.Friday, Week.Saturday];

const Calendar = (user :{user:User|null}) => {
    // const supabase = createClient()
    // const { data, error } = await supabase.auth.getUser()
    // if (error || !data?.user) {
    //     console.error(error)
    // } 

    const now = new Date();
    const [year, setYear] = useState(now.getFullYear());
    const [month, setMonth] = useState(now.getMonth());
    const numDays = daysInMonth(year, month);
    const firstDayOfWeek = dayOfWeek(year, month, 1);

    const days = [];
    // 月の最初の日まで空白で埋める
    for (let i = 0; i < firstDayOfWeek; i++) {
        days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    // daysに日を追加していく
    for (let day = 1; day <= numDays; day++) {
        const weekDayIndex = dayOfWeek(year, month, day);
        const isToday = day === now.getDate() && month === now.getMonth() && year === now.getFullYear();
        days.push(<Card key={day} day={day} weekday={weekDayIndex} todayFlag={isToday ? true : false } user={user.user} />);
    }

    const prevMonth = () => {
        setMonth(prev => prev === 0 ? 11 : prev - 1);
        if (month === 0) {
            setYear(prev => prev - 1);
        }
    };

    const nextMonth = () => {
        setMonth(prev => prev === 11 ? 0 : prev + 1);
        if (month === 11) {
            setYear(prev => prev + 1);
        }
    };

    const prevYear = () => {
        setYear(prev => prev - 1);
    };

    const nextYear = () => {
        setYear(prev => prev + 1);
    };

    const resetToCurrentDate = () => {
        setYear(now.getFullYear());
        setMonth(now.getMonth());
    };

    return (
        <div className="">
            {/* 前月や来月に変わるボタン */}
            <div className="flex justify-between mb-4">
                <button onClick={prevYear} className="btn scale-[1.5] font-bold py-2 px-4"><TbPlayerTrackPrev /></button>
                <button onClick={prevMonth} className="btn scale-[1.5] font-bold py-2 px-4"><GrCaretPrevious /></button>
                <span className="text-xl font-bold">{year}年 {month + 1}月</span>
                <button onClick={nextMonth} className="btn scale-[1.5] font-bold py-2 px-4"><GrCaretNext /></button>
                <button onClick={nextYear} className="btn scale-[1.5] font-bold py-2 px-4"><TbPlayerTrackNext /></button>
            </div>

            {/* 日~土までの曜日を表示 */}
            <div className="grid grid-cols-7">
                {weekDays.map((weekDay) => (
                    <div key={weekDay} className={`py-2 text-center m-1`}
                    style={{ borderBottom: `3px solid ${weekColorMap[weekDay]}`}}
                    >
                        {weekDay}
                    </div>
                ))}
            </div>

            {/* 日を表示 */}
            <div className="grid grid-cols-7 hover:gred-cols-6">
                {days}
            </div>

            {/* 今日に戻るボタン */}
            <div className='flex items-center justify-center'>
                <button onClick={resetToCurrentDate} className="btn bg-indigo-500 hover:bg-indigo-700 text-slate-100 py-2 px-4 rounded-lg mt-4">
                    今日に戻る
                </button>
            </div>
            
        </div>
    );
};

export default Calendar;