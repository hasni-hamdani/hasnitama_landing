import React from 'react';
import { useState } from 'react';



const ApplyFormSection = () => {

    const [name, setName] = useState('');
    const [instagram, setInstagram] = useState('');
    const [goal, setGoal] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace with your actual WhatsApp number (without +)
        const phone = '213559947488';
        // const message = 'je suis intéressé.\nNom: ${name}\nInstagram: ${instagram}\nObjectif: ${goal}';
        const message = `أنا مهتم 💪
الاسم: ${name}
إنستغرام: ${instagram}
الهدف: ${goal}`;



        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phone}?text=${encodedMessage}`;


        // Redirect to WhatsApp
        window.open(whatsappURL, '_blank');
    };


    return (
        <section
            id="apply"
            className="px-4 py-12 bg-gradient-to-r from-pink-100 to-yellow-100 md:px-10 lg:px-20"
        >
            <div className="max-w-md mx-auto text-right" dir="rtl">
                {/* Section Title */}
                <h2
                    data-aos="fade-up"
                    className="mb-6 text-2xl font-bold text-pink-700 md:text-3xl"
                >
                    التحوّل الذي أريده – قدّمي طلبك الآن
                </h2>

                {/* Application Form */}
                <form
                    onSubmit={handleSubmit}
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="space-y-5"
                >
                    {/* Name */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-1 text-sm font-semibold text-gray-700"
                        >
                            الاسم
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="اكتبي اسمك الكامل"
                            className="w-full px-4 py-3 text-right border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                    </div>

                    {/* Instagram Handle */}
                    <div>
                        <label
                            htmlFor="instagram"
                            className="block mb-1 text-sm font-semibold text-gray-700"
                        >
                            حساب إنستغرام @
                        </label>
                        <input
                            type="text"
                            id="instagram"
                            value={instagram}
                            onChange={(e) => setInstagram(e.target.value)}
                            placeholder="@اسمك على إنستغرام"
                            className="w-full px-4 py-3 text-right border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                    </div>

                    {/* Goal Selection */}
                    <div>
                        <label
                            htmlFor="goal"
                            className="block mb-1 text-sm font-semibold text-gray-700"
                        >
                            هدفك
                        </label>
                        <select
                            id="goal"
                            value={goal}
                            onChange={(e) => setGoal(e.target.value)}
                            className="w-full px-4 py-3 text-right border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                        >
                            <option value="">ما هو هدفك؟</option>
                            <option value="gain">خسارة وزن</option>
                            <option value="strong">زيادة الوزن</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-4 font-semibold text-white transition bg-pink-600 rounded-full hover:bg-pink-700"
                    >
                        قدّمي الطلب الآن
                    </button>

                    {/* Notice */}
                    <p className="mt-6 text-base font-bold text-center text-red-600">
                        ✅ بعد إرسال الطلب، سيتم توجيهك إلى واتساب لإجراء استشارة مجانية لمدة 30 دقيقة 💬
                    </p>
                </form>
            </div>
        </section>

    );
};

export default ApplyFormSection;
