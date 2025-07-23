import React from 'react';

const OfferBreakdownSection = () => {
    return (
        <section className="px-4 py-12 text-right bg-yellow-50 md:px-10 lg:px-20" dir="rtl">
            <div className="max-w-md mx-auto">
                {/* Section Title */}
                <h2
                    data-aos="fade-up"
                    className="mb-6 text-xl font-bold text-yellow-800 md:text-3xl"
                >
                    💥 كل ما ستحصلين عليه في برنامج التدريب الخاص بي
                </h2>

                {/* Value Stack */}
                <div
                    data-aos="zoom-in"
                    data-aos-delay="600"
                    className="space-y-3 text-base text-gray-800 md:text-lg font-open"
                >
                    <p data-aos="fade-up" data-aos-delay="100">✅ برنامج تغذية مخصص بالكامل <span className="text-gray-500">(ما يعادل 15,000 دج)</span></p>
                    <p data-aos="fade-up" data-aos-delay="200">✅ خطة تدريب شخصية تناسب جسمك وهدفك <span className="text-gray-500">(ما يعادل 18,000 دج)</span></p>
                    <p data-aos="fade-up" data-aos-delay="300">✅ متابعة أسبوعية وتعديلات حسب تطورك <span className="text-gray-500">(ما يعادل 20,000 دج)</span></p>
                    <p data-aos="fade-up" data-aos-delay="400">✅ دعم يومي على واتساب – أسأليني في أي وقت! <span className="text-gray-500">(ما يعادل 9,000 دج)</span></p>
                    <p data-aos="fade-up" data-aos-delay="500">✅ النتائج مضمونة <span className="text-gray-500">(لا تُقدر بثمن)</span></p>
                </div>

                {/* Price Offer */}
                <div
                    data-aos="zoom-in"
                    data-aos-delay="600"
                    className="p-5 mt-8 text-right bg-white border border-yellow-300 shadow-lg rounded-xl"
                >
                    <p className="mb-2 text-base font-bold text-yellow-700 md:text-xl">💰 القيمة الإجمالية للبرنامج: أكثر من 60,000 دج</p>
                    <p className="text-lg font-extrabold leading-relaxed text-red-600 md:text-2xl">
                        اليوم فقط ❗ ستحصلين على البرنامج كامل بـ <span className="underline decoration-red-400">5900 دج</span> فقط 🔥 نعم، كامل: خطة التغذية، التدريب، الدعم، المتابعة... وكل شيء
                    </p>
                    <p className="mt-2 text-sm text-gray-700 md:text-base">
                        🔥 أول 5 مشتركات هذا الشهر يحصلن عليه بسعر خاص – بعد ذلك سيرتفع السعر تدريجياً
                    </p>
                </div>
            </div>
        </section>


    );
};

export default OfferBreakdownSection;
