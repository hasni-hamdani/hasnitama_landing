import React, { useEffect, useState } from 'react';




const CountdownTimer = () => {
    const targetDate = new Date('2025-07-24T23:00:00'); // ⏰ Fixed deadline

    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / (1000 * 60)) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                setTimeLeft(null); // expired
            }
        };

        const timer = setInterval(updateCountdown, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-wrap justify-end gap-2 mt-2 text-lg font-bold text-right text-red-600" dir="rtl">
            {timeLeft ? (
                <>
                    {timeLeft.days > 0 && <span>{timeLeft.days} يوم</span>}
                    {timeLeft.hours > 0 && <span>{timeLeft.hours} ساعة</span>}
                    {timeLeft.minutes > 0 && <span>{timeLeft.minutes} دقيقة</span>}
                    {timeLeft.seconds > 0 && <span>{timeLeft.seconds} ثانية</span>}
                </>
            ) : (
                <span>انتهى العرض – سجّلي لتكوني ضمن الدفعة القادمة 🔒</span>
            )}
        </div>
    );
};
;

export default CountdownTimer;
