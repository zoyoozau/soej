import { motion } from 'framer-motion';
import { ArrowRight, Search, Heart, MessageCircle, Bookmark } from 'lucide-react';

const Hero = () => {
    return (
        <section id="we-are" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Background container spanning full width */}
            <div className="absolute top-0 right-0 w-full lg:w-[65%] h-full z-0 overflow-hidden">
                {/* Abstract pink gradient background shape */}
                <div className="absolute top-10 right-0 w-[90%] h-[90%] bg-gradient-to-br from-[#FF99FF] to-[#FF66CC] rounded-l-[3rem] shadow-2xl z-0 transform translate-x-10"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center text-left lg:pr-12 mb-16 lg:mb-0">
                    <p className="text-gray-600 font-medium mb-4 text-sm sm:text-base">
                        Your On-Demand Content Team
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-tight mb-6">
                        ผลิตคอนเทนต์ครบ
                        <br />
                        จบในที่เดียว
                    </h1>
                    <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-lg">
                        ถ่ายทำ ตัดต่อ ไลฟ์สด กราฟิก และหา KOL เลือกบริการเองได้ตามงบ ไม่ผูกสัญญาระยะยาว
                    </p>

                    {/* Call to action text section for mobile, hidden on desktop if following design strictly, 
              but added here as part of text flow */}
                    <div className="lg:hidden mt-8 text-center text-[#FF66CC] font-bold text-xl uppercase tracking-wide">
                        Crafting Your
                        <br />
                        Success
                    </div>
                </div>

                {/* Right Content - Phone Mockup */}
                <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">

                    {/* Main Title text overlaying the pink background */}
                    <div className="absolute -top-16 lg:-top-32 left-0 lg:-left-20 z-10 text-white font-black uppercase hidden md:block">
                        <h2 className="text-5xl lg:text-7xl leading-tight drop-shadow-md">
                            Crafting Your<br />Success
                        </h2>
                        <p className="normal-case font-medium text-lg lg:text-xl mt-4 max-w-sm drop-shadow">
                            เลือกจำนวนงาน เลือกรูปแบบบริการ ระบบจะแสดงราคาทันที ไม่มีค่าใช้จ่ายซ่อน
                        </p>
                    </div>

                    {/* Call to action pill */}
                    <div className="absolute bottom-20 -left-10 lg:bottom-1/4 lg:-left-32 z-30 hidden md:flex items-center bg-white/40 backdrop-blur-md rounded-full py-3 px-6 shadow-xl border border-white/50">
                        <span className="text-white font-bold mr-4 text-right leading-tight">
                            ออกแบบแพ็คเกจได้เอง<br />ตามสิ่งที่คุณต้องการ
                        </span>
                        <div className="bg-white text-[#FF66CC] rounded-full p-2">
                            <ArrowRight className="h-6 w-6" />
                        </div>
                    </div>

                    {/* The Phone Container */}
                    <div className="relative z-20 w-[300px] h-[600px] sm:w-[350px] sm:h-[700px]">
                        {/* Phone Image from public folder */}
                        <img
                            src={`${import.meta.env.BASE_URL}MobileMocup.png`}
                            alt="Mobile App Mockup"
                            className="w-full h-full object-contain drop-shadow-2xl"
                        />

                        {/* Simulated screen content inside phone (absolute positioned) */}
                        <div className="absolute top-[8%] left-[7%] right-[7%] bottom-[8%] rounded-[2rem] overflow-hidden -z-10 bg-[#0B0F19] flex flex-col">

                            {/* Header inside phone */}
                            <div className="flex justify-between items-center px-6 pt-10 pb-4">
                                <div className="text-white text-sm">9:41</div>
                                <div className="bg-white rounded-full px-3 py-1 text-xs font-bold text-black flex items-center">
                                    <span className="mr-1">🔔</span> 1
                                </div>
                            </div>

                            {/* Search bar inside phone */}
                            <div className="px-6 mb-6">
                                <div className="bg-gray-800 rounded-full flex items-center px-4 py-2 border border-gray-600">
                                    <Search className="h-4 w-4 text-gray-400 mr-2" />
                                    <input type="text" placeholder="Search" className="bg-transparent border-none outline-none text-white w-full text-sm" />
                                </div>
                            </div>

                            {/* Central Graphic Area inside phone */}
                            <div className="px-6 flex-grow flex flex-col justify-center">
                                <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 transform -rotate-2 relative">
                                    <div className="flex items-center justify-center space-x-2 text-[#FF66CC] font-bold text-2xl">
                                        <img src={`${import.meta.env.BASE_URL}IconStar.png`} className="w-8 h-8 object-contain" alt="" />
                                        <span>Graphic</span>
                                    </div>
                                </div>

                                {/* Social icons row inside phone */}
                                <div className="flex justify-center space-x-3 mb-8">
                                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-xs">TikTok</div>
                                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">f</div>
                                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">Line</div>
                                    <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs">S</div>
                                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs">IG</div>
                                </div>
                            </div>

                            {/* Bottom interaction bar inside phone */}
                            <div className="px-8 pb-10 flex justify-between text-white border-t border-gray-800 pt-4">
                                <div className="flex flex-col items-center">
                                    <Heart className="h-6 w-6 mb-1" />
                                    <span className="text-xs">50K</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <MessageCircle className="h-6 w-6 mb-1" />
                                    <span className="text-xs">200</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Bookmark className="h-6 w-6 mb-1" />
                                    <span className="text-xs">9000</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badges */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="absolute -left-12 sm:-left-16 top-1/4 bg-white rounded-full py-2 px-6 shadow-xl flex items-center space-x-2 z-30"
                        >
                            <div className="w-6 h-6 rounded-full bg-[#FF66CC] flex items-center justify-center">
                                <img src={`${import.meta.env.BASE_URL}IconLive.png`} className="w-4 h-4" alt="Live" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                            </div>
                            <span className="font-bold text-black uppercase">Live</span>
                        </motion.div>

                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="absolute -right-8 sm:-right-12 top-1/3 bg-white rounded-full py-2 px-6 shadow-xl flex items-center space-x-2 z-30"
                        >
                            <div className="w-6 h-6 rounded-full bg-[#FF66CC] flex items-center justify-center text-white text-xs font-bold">
                                KOL
                            </div>
                            <span className="font-bold text-black uppercase">KOL</span>
                        </motion.div>

                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="absolute -left-10 sm:-left-12 bottom-1/3 bg-white rounded-full py-2 px-6 shadow-xl flex items-center space-x-2 z-30"
                        >
                            <div className="w-6 h-6 rounded-full bg-[#FF66CC] flex items-center justify-center">
                                <img src={`${import.meta.env.BASE_URL}IconVDO.png`} className="w-4 h-4" alt="VDO" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                            </div>
                            <span className="font-bold text-black uppercase">VDO</span>
                        </motion.div>

                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute rounded-full w-12 h-12 bg-white/80 backdrop-blur-sm -left-4 top-1/5 shadow-lg z-30"
                        />

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="absolute -right-10 sm:-right-16 bottom-1/4 bg-white rounded-full py-2 px-6 shadow-xl flex items-center space-x-2 z-30 border border-gray-100"
                        >
                            <div className="w-6 h-6 rounded-full bg-[#FF66CC] flex items-center justify-center">
                                <img src={`${import.meta.env.BASE_URL}IconShop.png`} className="w-4 h-4" alt="Shop" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                            </div>
                            <span className="font-bold text-black uppercase">Shop</span>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
