// import React from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import test1 from '../assets/test1.jpg'
// import test2 from '../assets/test2.jpg'
// import { useEffect } from 'react';


// const HeroSection = () => {

//     useEffect(() => {
//         AOS.init({ duration: 1000 });
//     }, []);


//     return (
//         <section className="px-4 py-12 text-right bg-pink-50 md:px-10 lg:px-20" dir="rtl">
//             <div className="max-w-xl mx-auto">
//                 {/* Headline */}
//                 <h1
//                     data-aos="fade-up"
//                     className="mb-4 text-2xl font-extrabold leading-snug text-gray-900 font-mont md:text-4xl"
//                 >
//                     اكتسبي الوزن، انحتي جسمك وكوني واثقة من نفسك
//                 </h1>

//                 {/* Subheadline */}
//                 <p
//                     data-aos="fade-up"
//                     data-aos-delay="100"
//                     className="mb-6 text-base leading-relaxed text-gray-700 font-open md:text-lg"
//                 >
//                     شوفتِ الفيديوهات على إنستغرام؟ الآن جاء دورك!
//                     <br />
//                     عميلتي زادت 5 كغ خلال 30 يوم فقط – بدون حيل – فقط تدريب ذكي – تغذية مناسبة – متابعة يومية حقيقية
//                 </p>

//                 {/* CTA Button */}
//                 <a
//                     data-aos="zoom-in"
//                     data-aos-delay="200"
//                     href="#apply"
//                     className="block w-full py-4 text-sm font-semibold text-center text-white transition bg-pink-600 rounded-full hover:bg-pink-700 md:text-base"
//                 >
//                     ابدئي تدريبك الآن – الأماكن محدودة!
//                 </a>

//                 {/* Transformation Image */}
//                 <div className="mt-8">
//                     <img
//                         data-aos="fade-up"
//                         data-aos-delay="300"
//                         src={test1}
//                         alt="Before and after transformation"
//                         className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
//                     />
//                 </div>
//             </div>
//         </section>

//     );
// };

// export default HeroSection;


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import test1 from '../assets/test1.jpg';
import test2 from '../assets/test2.jpg';
import test3 from '../assets/test3.jpg'; // Add as needed

const HeroSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="px-4 py-12 text-right bg-pink-50 md:px-10 lg:px-20" dir="rtl">
            <div className="max-w-xl mx-auto">
                {/* Headline */}
                <header className="px-4 py-16 text-right text-white bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400 md:px-12 lg:px-20" dir="rtl">
                    <div className="max-w-2xl mx-auto space-y-6">
                        {/* Logo / Name */}
                        <h1 className="text-3xl font-extrabold tracking-wide md:text-5xl animate-pulse">
                            HASNITAMA 🌟
                        </h1>

                        {/* Tagline */}
                        <p className="text-lg font-light leading-relaxed md:text-xl">
                            التدريب الشخصي مع دعم يومي – نتائج مضمونة 💪<br />
                            ابدئي التحوّل الجسدي بثقة وبإشراف خبير.
                        </p>

                        {/* Call to Action */}
                        <a
                            href="#apply"
                            className="inline-block px-6 py-3 font-semibold text-pink-600 transition bg-white rounded-full shadow-lg hover:bg-pink-50 md:text-lg"
                        >
                            قدّمي طلبك الآن – الأماكن محدودة!
                        </a>
                    </div>
                </header>


                {/* Subheadline */}
                <p data-aos="fade-up" data-aos-delay="100" className="mb-6 text-base leading-relaxed text-gray-700 md:text-lg font-open">
                    شوفتِ الفيديوهات على إنستغرام؟ الآن جاء دورك!
                    <br />
                    عميلتي زادت 5 كغ خلال 30 يوم فقط – بدون حيل – فقط تدريب ذكي – تغذية مناسبة – متابعة يومية حقيقية
                </p>

                {/* CTA Button */}
                <a
                    href="#apply"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    className="block w-full py-4 text-sm font-semibold text-center text-white transition bg-pink-600 rounded-full md:text-base hover:bg-pink-700"
                >
                    ابدئي تدريبك الآن – الأماكن محدودة!
                </a>

                {/* Image Carousel */}
                <div className="mt-10" data-aos="fade-up" data-aos-delay="300">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        dir="rtl"
                        className="w-full max-w-sm mx-auto rounded-lg shadow-xl"
                    >
                        <SwiperSlide>
                            <img src={test1} alt="Transformation 1" className="w-full rounded-lg" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={test3} alt="Transformation 3" className="w-full rounded-lg" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
