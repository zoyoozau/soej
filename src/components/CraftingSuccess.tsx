
import { motion } from 'framer-motion';
import { ArrowRight, Search, Heart, MessageCircle, Bookmark } from 'lucide-react';

const CraftingSuccess = () => {
    return (
        <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-[#0A101D]">

            {/* Background elements to match the design structure */}
            {/* The main pink gradient that covers the top part and has a slanted bottom edge */}
            <div
                className="absolute top-0 left-0 w-full bg-gradient-header z-0"
                style={{
                    height: '100%',
                    clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 100%)'
                }}
            ></div>

            {/* Optional curved overlay if the intersection needs to be soft, can use SVG, but clip-path is sharp like the design */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between">

                {/* Left Content */}
                <div className="w-full lg:w-5/12 flex flex-col justify-center text-left lg:pr-12 mb-16 lg:mb-0 pb-16 lg:pb-0">
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 drop-shadow-sm">
                        CRAFTING YOUR<br />SUCCESS
                    </h2>
                    <p className="text-white text-lg sm:text-lg font-medium mb-8 max-w-[280px] drop-shadow-md">
                        เลือกจำนวนงาน เลือกรูปแบบบริการ ระบบจะแสดงราคาทันที ไม่มีค่าใช้จ่ายซ่อน
                    </p>

                    {/* Call to action pill */}
                    <div className="flex items-center self-start bg-white/30 backdrop-blur-md rounded-full py-2 px-6 shadow-xl border border-white/40 cursor-pointer hover:bg-white/40 transition-colors">
                        <span className="text-white font-bold mr-4 text-sm sm:text-base text-right leading-snug">
                            ออกแบบแพ็คเกจได้เอง<br />ตามสิ่งที่คุณต้องการ
                        </span>
                        <div className="bg-white text-pink-400 rounded-full p-1.5 shadow-md flex-shrink-0">
                            <ArrowRight className="h-6 w-6 stroke-[3]" />
                        </div>
                    </div>
                </div>

                {/* Right Content - Phone Mockup */}
                <div className="w-full lg:w-7/12 relative flex justify-center lg:justify-end mt-8 lg:mt-0">

                    {/* The Phone Container */}
                    <div className="relative z-20 w-[300px] h-[600px] sm:w-[350px] sm:h-[700px] transform lg:translate-x-8">
                        {/* Phone Image from public folder */}
                        <img
                            src={`${import.meta.env.BASE_URL} MobileMocup.png`}
                            alt="Mobile App Mockup"
                            className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        />

                        {/* Simulated screen content inside phone (absolute positioned) */}
                        <div className="absolute top-[8%] left-[7%] right-[7%] bottom-[8%] rounded-[2rem] overflow-hidden -z-10 bg-[#0B0F19] flex flex-col">

                            {/* Header inside phone */}
                            <div className="flex justify-between items-center px-6 pt-10 pb-4">
                                <div className="text-white text-sm font-medium">9:41</div>
                                <div className="bg-white rounded-full px-3 py-1 text-xs font-bold text-black flex items-center shadow-lg">
                                    <span className="mr-1">🔔</span> 1
                                </div>
                            </div>

                            {/* Search bar inside phone */}
                            <div className="px-6 mb-4">
                                <div className="bg-[#1C2333] rounded-full flex items-center px-4 py-2 border border-white/10">
                                    <Search className="h-4 w-4 text-gray-400 mr-2" />
                                    <input type="text" placeholder="Search" className="bg-transparent border-none outline-none text-white w-full text-sm" />
                                </div>
                            </div>

                            {/* Central Graphic Area inside phone */}
                            <div className="px-6 flex-grow flex flex-col justify-center relative">

                                <div className="bg-white rounded-[2rem] p-6 shadow-2xl mb-8 transform -rotate-2 relative z-10 w-full aspect-video flex items-center justify-center">
                                    <div className="flex items-center justify-center space-x-3 text-[#FF5A96] font-black text-4xl tracking-tight">
                                        <div className="bg-[#FF5A96] p-2 rounded-xl text-white">
                                            {/* Generic image placeholder icon */}
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        </div>
                                        <span>Graphic</span>
                                    </div>
                                    <div className="absolute -right-2 top-1/2 text-[#FF5A96] text-3xl font-light transform translate-x-full">*</div>
                                </div>

                                {/* Social icons row inside phone */}
                                <div className="flex justify-center space-x-2.5 mb-8 relative z-20">
                                    <div className="w-8 h-8 rounded-[8px] bg-black flex items-center justify-center text-white font-bold text-[10px] shadow-md">TikTok</div>
                                    <div className="w-8 h-8 rounded-[8px] bg-[#1877F2] flex items-center justify-center text-white font-bold text-lg shadow-md">f</div>
                                    <div className="w-8 h-8 rounded-[8px] bg-[#00B900] flex items-center justify-center text-white font-bold text-xs shadow-md">LINE</div>
                                    <div className="w-8 h-8 rounded-[8px] bg-[#FFBF00] flex items-center justify-center text-white font-bold text-xs shadow-md">S</div>
                                    <div className="w-8 h-8 rounded-[8px] bg-[#F16A28] flex items-center justify-center text-[10px] text-white font-bold shadow-md">Shop</div>
                                    <div className="w-8 h-8 rounded-[8px] bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] flex items-center justify-center text-white font-bold text-[10px] shadow-md">IG</div>
                                </div>
                            </div>

                            {/* Bottom interaction bar inside phone */}
                            <div className="px-8 pb-8 flex justify-between text-white border-t border-white/10 pt-4">
                                <div className="flex flex-col items-center">
                                    <Heart className="h-6 w-6 mb-1 text-white fill-white" />
                                    <span className="text-[10px] font-medium text-white/80">50K</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <MessageCircle className="h-6 w-6 mb-1 text-white fill-white" />
                                    <span className="text-[10px] font-medium text-white/80">200</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Bookmark className="h-6 w-6 mb-1 text-white fill-white" />
                                    <span className="text-[10px] font-medium text-white/80">9000</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badges */}

                        {/* Decorative circle top left */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="absolute -left-4 sm:-left-8 top-[15%] w-10 h-10 bg-white rounded-full shadow-lg z-30"
                        />

                        {/* LIVE Badge */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="absolute -left-8 sm:-24 top-[22%] bg-white rounded-full py-2.5 px-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] flex items-center space-x-3 z-30 transform -rotate-3"
                        >
                            <div className="w-6 h-6 rounded-full bg-[#FF5A96] flex items-center justify-center">
                                {/* SVG for gear/live icon instead of image to ensure it loads */}
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                            </div>
                            <span className="font-bold text-gray-800 text-lg uppercase tracking-wide">LIVE</span>
                        </motion.div>

                        {/* KOL Badge */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="absolute -right-6 sm:-right-8 top-[35%] bg-white rounded-full py-2.5 px-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] flex items-center space-x-3 z-30 transform rotate-3"
                        >
                            <div className="w-6 h-6 rounded-full bg-[#FF5A96] flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            </div>
                            <span className="font-bold text-gray-800 text-lg uppercase tracking-wide">KOL</span>
                        </motion.div>

                        {/* VDO Badge */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="absolute -left-4 sm:-left-16 bottom-[30%] bg-white rounded-full py-2.5 px-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] flex items-center space-x-3 z-30 transform -rotate-2"
                        >
                            <div className="w-6 h-6 rounded-full bg-[#FF5A96] flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v4a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1h10a1 1 0 011 1v4z" /></svg>
                            </div>
                            <span className="font-bold text-gray-800 text-lg uppercase tracking-wide">VDO</span>
                        </motion.div>

                        {/* Shop Badge */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="absolute -right-6 sm:-right-16 bottom-[15%] bg-white rounded-full py-2.5 px-6 shadow-[0_10px_20px_rgba(0,0,0,0.1)] flex items-center space-x-3 z-30"
                        >
                            <div className="w-6 h-6 rounded-full bg-[#FF5A96] flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            </div>
                            <span className="font-bold text-gray-800 text-lg uppercase tracking-wide">Shop</span>
                        </motion.div>

                        {/* Decorative star symbols */}
                        <div className="absolute -left-6 top-[32%] text-white text-3xl font-light">*</div>

                    </div>
                </div>
            </div>

            {/* The circular background element at the very bottom right of the black section */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none opacity-50">
                <img src={`${import.meta.env.BASE_URL}Background circle.png`} alt="Background Decor" className="w-[800px] h-[800px] object-cover mix-blend-screen" />
            </div>

        </section>
    );
};

export default CraftingSuccess;
