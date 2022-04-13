import React, { useEffect, useState } from 'react';
import { ClockContainer, DateContainer, FullDateContainer } from './Clock.style';

const date = new Date();

export const Clock = () => {
    const [dateTime, setDateTime] = useState({
        hours: date.getHours(),
        minutes: (date.getMinutes() < 10 ? '0' : '') + date.getMinutes(),
        dayExtensive: formatDayDate(date.getDay()),
        day: date.getDate(),
        month: formatMonthDate(date.getMonth()),
        year: date.getFullYear(),
    });

    function formatMonthDate(month) {
        if (month === 0) return 'janeiro';
        if (month === 1) return 'fevereiro';
        if (month === 2) return 'março';
        if (month === 3) return 'abril';
        if (month === 4) return 'maio';
        if (month === 5) return 'junho';
        if (month === 6) return 'julho';
        if (month === 7) return 'agosto';
        if (month === 8) return 'setembro';
        if (month === 9) return 'outubro';
        if (month === 10) return 'novembro';
        if (month === 11) return 'dezembro';
    }

    function formatDayDate(day) {
        if (day === 0) return 'domingo';
        if (day === 1) return 'segunda-feira';
        if (day === 2) return 'terça-feira';
        if (day === 3) return 'quarta-feira';
        if (day === 4) return 'quinta-feira';
        if (day === 5) return 'sexta-feira';
        if (day === 6) return 'sábado';
    }

    useEffect(() => {
        const timer = setInterval(() => {
            const date = new Date();
            setDateTime({
                hours: date.getHours(),
                minutes:
                    (date.getMinutes() < 10 ? '0' : '') + date.getMinutes(),
                dayExtensive: formatDayDate(date.getDay()),
                day: date.getDate(),
                month: formatMonthDate(date.getMonth()),
                year: date.getFullYear(),
            });
        }, 1000);
        return () => clearInterval(timer);
    },[dateTime]);

    return (
        <DateContainer>
            <ClockContainer>
                {dateTime.hours}:{dateTime.minutes}
            </ClockContainer>
            <FullDateContainer>
                {dateTime.dayExtensive}, {dateTime.day} de {dateTime.month}{' '}
                de {dateTime.year}
            </FullDateContainer>
        </DateContainer>
    );
};
