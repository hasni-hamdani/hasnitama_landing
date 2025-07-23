import React from 'react';

const CoachingDifferenceSection = () => {
    return (
        <section className="px-4 py-12 text-right bg-indigo-50 md:px-10 lg:px-20" dir="rtl">
            <div className="max-w-xl mx-auto">
                {/* Section Title */}
                <h2
                    data-aos="fade-up"
                    className="mb-6 text-2xl font-bold text-indigo-700 md:text-3xl"
                >
                    قسم: ما الذي يجعل هذا التدريب مختلفًا
                </h2>

                {/* Key Statements */}
                <p
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="mb-3 text-base text-gray-800 md:text-lg"
                >
                    "أنتِ لا تشترين ملف PDF جاهز."
                </p>

                <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="mb-3 text-base text-gray-700 md:text-lg"
                >
                    – دعم حقيقي يومي – خطط مخصصة لجسمك وهدفك – نتائج حقيقية
                </p>

                <p
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="text-base text-gray-600 md:text-lg"
                >
                    هذا البرنامج من تصميم شخص يمارس ما يُعلِّم — مش مجرد نظري، بل عملي ومتجرب عليه.
                </p>
            </div>
        </section>

    );
};

export default CoachingDifferenceSection;
