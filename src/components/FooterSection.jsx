import React from 'react';

const FooterSection = () => {
    return (
        <footer className="px-4 py-8 text-right text-white bg-gray-900 md:px-10 lg:px-20" dir="rtl">
            <div className="max-w-md mx-auto space-y-4">
                <p className="text-base md:text-lg">📧 تواصل معي: <span className="font-medium">hasni.p.tama@gmail.com</span></p>

                <p className="text-base md:text-lg">
                    📱 إنستغرام:
                    <a
                        href="https://instagram.com/hasnitama"
                        target="_blank"
                        rel="noreferrer"
                        className="underline transition hover:text-pink-400"
                    >
                        instagram.com/hasnitama
                    </a>
                </p>

                <hr className="my-4 border-gray-700" />

                <p className="text-sm text-center text-gray-400">
                    سياسة الخصوصية • الشروط والأحكام © 2025 كل الحقوق محفوظة
                </p>
            </div>
        </footer>

    );
};

export default FooterSection;
