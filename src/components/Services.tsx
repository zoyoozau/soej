const servicesData = [
  {
    title: "Video Production",
    desc: "วิดีโอสั้นสำหรับ TikTok, Reels, Shopee และแพลตฟอร์มออนไลน์ ถ่ายทำและตัดต่อจบครบในที่เดียว",
  },
  {
    title: "Live Streaming Service",
    desc: "บริการไลฟ์สดเพื่อขยายยอดขายร้านค้า หรือไลฟ์เดี่ยวเฉพาะแบรนด์ เลือกจำนวนชั่วโมงได้ตามต้องการ",
  },
  {
    title: "Graphic Design",
    desc: "ภาพสินค้า โพสต์โซเชียล แบนเนอร์โปรโมชั่น ผลิตงานต่อเนื่องแบบรายเดือนหรือเป็นชุด",
  },
  {
    title: "Ads Support",
    desc: "ช่วยตั้งค่าและดูแลโฆษณาตามงบที่กำหนด ไม่หักเปอร์เซ็นต์โฆษณา",
  },
  {
    title: "KOL Coordination",
    desc: "คัดเลือกและประสานงาน KOL ให้ตรงกับประเภทสินค้า ดูแลขั้นตอนการทำงานจนจบโปรเจกต์",
  },
  {
    title: "Packshot",
    desc: "การถ่ายภาพสินค้าพร้อมจัดองค์ประกอบฉาก ด้วยการออกแบบ Concept นำเสนอเรื่องราวของสินค้า",
  },
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
          <h2 className="text-[2rem] sm:text-[3rem] lg:text-[4rem] font-bold text-center text-[#FF65CC] mb-12 sm:mb-16 tracking-wide drop-shadow-sm mb-16">
            Live Streaming Service
          </h2>

          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between lg:space-x-8 max-w-[1280px] mx-auto px-4">
            {/* Left Column: Mockup Cards */}
            <div className="w-full lg:w-[48%] relative min-h-[450px] sm:min-h-[550px] lg:min-h-[700px] mb-16 lg:mb-0">
              {/* Back Card (Promotion - Card03) */}
              <div className="absolute left-[5%] sm:left-[10%] top-0 w-[200px] sm:w-[260px] lg:w-[320px] z-10 transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src={`${import.meta.env.BASE_URL}Card03.png`}
                  alt="Promotion"
                  className="w-full h-auto drop-shadow-2xl rounded-[1.5rem]"
                />
              </div>

              {/* Front Card (Brand Rimberio - Card02) */}
              <div className="absolute left-[30%] sm:left-[35%] lg:left-[35%] top-[20%] lg:top-[25%] w-[210px] sm:w-[280px] lg:w-[340px] z-20 transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src={`${import.meta.env.BASE_URL}Card02.png`}
                  alt="Brand Rimberio"
                  className="w-full h-auto drop-shadow-2xl rounded-[1.5rem]"
                />
              </div>

              {/* Top Stats Pop-up (Card01) */}
              <div className="absolute right-[0%] sm:right-[5%] lg:right-[-5%] top-[10%] lg:top-[12%] w-[180px] sm:w-[220px] lg:w-[260px] z-30 transition-transform duration-300 hover:scale-105">
                <img
                  src={`${import.meta.env.BASE_URL}Card01.png`}
                  alt="Stats 1"
                  className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] rounded-3xl"
                />
              </div>

              {/* Bottom Stats Pop-up (Card04) */}
              <div className="absolute left-[20%] sm:left-[25%] lg:left-[15%] bottom-[5%] lg:bottom-[8%] w-[180px] sm:w-[220px] lg:w-[260px] z-30 transition-transform duration-300 hover:scale-105">
                <img
                  src={`${import.meta.env.BASE_URL}Card04.png`}
                  alt="Stats 2"
                  className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] rounded-3xl"
                />
              </div>
            </div>

            {/* Right Column: Phones and Text */}
            <div className="w-full lg:w-[52%] flex flex-col justify-center items-center lg:items-start lg:pl-4">
              {/* Two Phones Container */}
              <div className="relative w-full flex justify-center lg:justify-start items-center h-[450px] sm:h-[650px] lg:h-[750px] xl:h-[780px]">
                {/* Right/Back Phone (Analytics - card06) */}
                <div className="absolute right-0 sm:right-[15%] lg:right-[5%] xl:right-[15%] top-0 lg:top-[5%] w-[180px] sm:w-[260px] lg:w-[290px] z-10 transition-transform duration-300 hover:scale-[1.02]">
                  <img
                    src={`${import.meta.env.BASE_URL}card06.png`}
                    alt="Analytics Dashboard"
                    className="w-full h-auto drop-shadow-2xl rounded-[2.5rem]"
                  />
                </div>

                {/* Left/Front Phone (Host - Card05) */}
                <div className="absolute left-0 sm:left-[10%] lg:left-0 top-[10%] lg:top-[15%] w-[190px] sm:w-[280px] lg:w-[320px] z-20 transition-transform duration-300 hover:scale-[1.02]">
                  <img
                    src={`${import.meta.env.BASE_URL}Card05.png`}
                    alt="Live Stream Host"
                    className="w-full h-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.25)] rounded-[2.5rem]"
                  />
                </div>
              </div>

              {/* Text underneath the phones */}
              <div className="text-center lg:text-left mt-4 sm:mt-8 w-full px-4 lg:px-0 z-30 relative">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 font-display">
                  Live Commerce ไลฟ์ทุกแพลตฟอร์ม จบในที่เดียว
                </p>
                <p className="text-gray-600 text-base sm:text-lg">
                  บริการไลฟ์สด โฮสต์ที่เข้าใจสินค้า รู้จังหวะพูด จังหวะขาย
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
