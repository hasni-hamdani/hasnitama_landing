import React from 'react';
import CountdownTimer from './CountdownTimer';

const UrgencySection = () => {
    return (
        <section
            className="px-4 py-12 text-right border-red-600 shadow-lg md:px-10 lg:px-20 bg-gradient-to-r from-red-100 to-yellow-100 border-y-4"
            dir="rtl"
        >
            <div className="max-w-md mx-auto">
                <h2
                    data-aos="fade-up"
                    className="mb-6 text-2xl font-extrabold leading-snug text-red-700 md:text-4xl animate-pulse"
                >
                    🚨 تبقّت فقط بعض الأماكن للتدريب الخاص!
                </h2>

                <div
                    data-aos="zoom-in"
                    className="inline-block w-full px-5 py-4 text-lg font-bold text-gray-900 bg-white border-2 border-red-400 shadow-md rounded-xl md:text-2xl"
                >
                    ⏳ ينتهي العرض خلال: <CountdownTimer />
                </div>

                <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="mt-4 text-base font-semibold text-red-800 md:text-lg"
                >
                    اغتنمي الفرصة الآن واحصلي على استشارة مجانية لمدة 30 دقيقة 💬
                </p>
            </div>
        </section>
    );
};

export default UrgencySection;
