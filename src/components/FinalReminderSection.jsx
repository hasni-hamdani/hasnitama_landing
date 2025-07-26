import React from 'react';

const FinalReminderSection = () => {
    return (
        <section className="px-4 py-12 text-right bg-red-50" dir="rtl">
            <div className="max-w-md mx-auto">
                <h2
                    data-aos="fade-up"
                    className="mb-4 text-xl font-bold text-red-700 md:text-3xl"
                >
                    ⚠️ باقي 6 من أصل 10 أماكن فقط!
                </h2>

                <p
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="mb-6 text-base text-gray-800 md:text-lg"
                >
                    فرصتك الآن باش تبدئي التغيير الحقيقي. 📍 سجّلي قبل ما يغلق التسجيل.
                </p>

                <a
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    href="#apply"
                    className="block w-full py-4 text-sm font-semibold text-center text-white transition bg-red-600 rounded-full hover:bg-red-700 md:text-base"
                >
                    أنا أريد هذا التحول — قدّمي الطلب الآن
                </a>
            </div>
        </section>

    );
};

export default FinalReminderSection;
