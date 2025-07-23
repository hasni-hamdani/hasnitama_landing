import React from 'react';

const FAQSection = () => {
    return (
        <section className="px-4 py-12 text-right bg-gray-50 md:px-10 lg:px-20" dir="rtl">
            <div className="max-w-xl mx-auto">
                <h2
                    data-aos="fade-up"
                    className="mb-8 text-2xl font-bold text-right text-gray-800 md:text-3xl"
                >
                    الأسئلة المتكررة
                </h2>

                <div className="space-y-6">
                    {/* FAQ Item 1 */}
                    <div data-aos="fade-up" data-aos-delay="100">
                        <h3 className="mb-1 text-base font-semibold text-pink-600 md:text-lg">
                            🧘&nbsp;ماذا لو كنتِ مبتدئة؟
                        </h3>
                        <p className="text-sm text-gray-700 md:text-base">
                            ماشي مشكل! نبدأ معك خطوة بخطوة حتى تصبحي واثقة من كل شيء.
                        </p>
                    </div>

                    {/* FAQ Item 2 */}
                    <div data-aos="fade-up" data-aos-delay="200">
                        <h3 className="mb-1 text-base font-semibold text-pink-600 md:text-lg">
                            🏋️&nbsp;هل لازم صالة رياضية؟
                        </h3>
                        <p className="text-sm text-gray-700 md:text-base">
                            نقدر نحضر لك برنامج كامل للبيت حسب ما يتوفر عندك.
                        </p>
                    </div>

                    {/* FAQ Item 3 */}
                    <div data-aos="fade-up" data-aos-delay="300">
                        <h3 className="mb-1 text-base font-semibold text-pink-600 md:text-lg">
                            📈&nbsp;وماذا لو ما يزيد وزني؟
                        </h3>
                        <p className="text-sm text-gray-700 md:text-base">
                            أنا معك يوميًا، نعدل البرنامج حتى يشتغل لك — ماشي تخمين، بل خطة دقيقة حسب جسمك.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default FAQSection;
