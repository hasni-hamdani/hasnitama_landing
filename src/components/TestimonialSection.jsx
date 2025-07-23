import React from 'react';
import test1 from '../assets/test1.jpg'
import test2 from '../assets/test2.jpg'

const TestimonialSection = () => {
    return (
        <section className="px-6 py-16 bg-white md:px-12 lg:px-20">
            <div className="max-w-3xl mx-auto text-center">
                {/* Transformation Image */}
                <img
                    data-aos="fade-up"
                    data-aos-delay="100"
                    src={test2} // replace with client pic
                    alt="Client before and after"
                    className="w-full max-w-md mx-auto mb-6 shadow-md rounded-xl"
                />

                {/* Quote */}
                <blockquote
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="mb-4 text-xl italic font-semibold text-gray-800">
                    "كنت أشعر بأنني نحيفة جدًا وغير واثقة من نفسي. خلال 30 يوم فقط، أصبحت أشعر بالقوة وبدأت أحب جسدي فعلاً."
                </blockquote>

                {/* Social Proof */}
                <p
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="text-gray-600">
                    أكثر من <span className="font-bold">118,000 متابع</span> يثقون بي للحصول على التحفيز وخطط اللياقة البدنية
                </p>
            </div>
        </section>
    );
};

export default TestimonialSection;
