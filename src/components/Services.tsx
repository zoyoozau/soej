const servicesData = [
    {
        title: 'Video Production',
        desc: 'วิดีโอสั้นสำหรับ TikTok, Reels, Shopee และแพลตฟอร์มออนไลน์ ถ่ายทำและตัดต่อจบครบในที่เดียว'
    },
    {
        title: 'Live Streaming Service',
        desc: 'บริการไลฟ์สดเพื่อขยายยอดขายร้านค้า หรือไลฟ์เดี่ยวเฉพาะแบรนด์ เลือกจำนวนชั่วโมงได้ตามต้องการ'
    },
    {
        title: 'Graphic Design',
        desc: 'ภาพสินค้า โพสต์โซเชียล แบนเนอร์โปรโมชั่น ผลิตงานต่อเนื่องแบบรายเดือนหรือเป็นชุด'
    },
    {
        title: 'Ads Support',
        desc: 'ช่วยตั้งค่าและดูแลโฆษณาตามงบที่กำหนด ไม่หักเปอร์เซ็นต์โฆษณา'
    },
    {
        title: 'KOL Coordination',
        desc: 'คัดเลือกและประสานงาน KOL ให้ตรงกับประเภทสินค้า ดูแลขั้นตอนการทำงานจนจบโปรเจกต์'
    },
    {
        title: 'Packshot',
        desc: 'การถ่ายภาพสินค้าพร้อมจัดองค์ประกอบฉาก ด้วยการออกแบบ Concept นำเสนอเรื่องราวของสินค้า'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl sm:text-5xl font-black text-center text-black mb-16">
                    Services
                </h2>

                {/* Text Grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-24">
                    {servicesData.map((s, idx) => (
                        <div key={idx} className="text-center px-4">
                            <h3 className="text-xl font-bold text-black mb-4">{s.title}</h3>
                            <p className="text-gray-600 text-sm">{s.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Live Streaming Highlight Section */}
                <div className="mt-20 pt-16 relative">
                    <h2 className="text-3xl sm:text-5xl font-black text-center text-[#FF66CC] mb-16">
                        Live Streaming Service
                    </h2>

                    <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12">

                        {/* Live streaming mockup cards */}
                        <div className="w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0 relative min-h-[500px]">

                            {/* Card 1 */}
                            <div className="absolute left-1/2 -translate-x-1/2 sm:-translate-x-[60%] lg:-translate-x-2/3 top-0 w-[240px] sm:w-[280px] z-10 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                                <img src="/Card01.png" alt="Live Promo 1" className="w-full h-auto drop-shadow-2xl rounded-3xl" />
                            </div>

                            {/* Card 2 */}
                            <div className="absolute left-1/2 -translate-x-1/2 top-20 w-[260px] sm:w-[300px] z-20 hover:scale-105 transition-transform duration-300">
                                <img src="/Card02.png" alt="Live Promo 2" className="w-full h-auto drop-shadow-2xl rounded-3xl" />
                            </div>

                            {/* Stats Card overlapping */}
                            <div className="absolute right-1/2 translate-x-1/2 sm:translate-x-[60%] top-1/2 w-[220px] sm:w-[260px] z-30 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                                <img src="/Card03.png" alt="Live Stats" className="w-full h-auto drop-shadow-2xl rounded-3xl" />
                            </div>

                        </div>

                        {/* Phone Live Interface Mockup */}
                        <div className="w-full lg:w-1/2 flex justify-center relative scale-90 sm:scale-100">
                            <img src="/card06.png" alt="Live Interface" className="w-auto h-[600px] object-contain drop-shadow-2xl" />
                        </div>
                    </div>

                    <div className="text-center mt-12 bg-gray-50 max-w-2xl mx-auto py-4 px-6 rounded-2xl border border-gray-100 shadow-sm">
                        <p className="text-xl font-medium text-black">
                            Live Commerce ไลฟ์ทุกแพลตฟอร์ม จบในที่เดียว
                            <br />
                            <span className="text-gray-600 text-lg">บริการไลฟ์สด โฮสต์ที่เข้าใจสินค้า รู้จังหวะพูด จังหวะขาย</span>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;
