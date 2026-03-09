
import { motion } from "framer-motion";
import {
    ArrowRight,
    Search,
    Heart,
    MessageCircle,
    Bookmark,
} from "lucide-react";

const CraftingSuccess = () => {
    return (
        <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-[#0A101D]">
            {/* Background elements to match the design structure */}
            {/* The main pink gradient that covers the top part and has a slanted bottom edge */}
            <div
                className="absolute top-0 left-0 w-full bg-gradient-header z-0"
                style={{
                    height: "140%",
                    top: "-20%", // Bring gradient from higher up
                    clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 85%)", // Slanted more dramatically
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between">
                {/* Left Content */}
                <div className="w-full lg:w-5/12 flex flex-col justify-center text-left lg:pr-12 mb-16 lg:mb-0 pb-16 lg:pb-0 relative z-20">
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 drop-shadow-sm">
                        CRAFTING YOUR
                        <br />
                        SUCCESS
                    </h2>
                    <p className="text-white text-lg sm:text-lg font-medium mb-12 max-w-[320px] drop-shadow-md opacity-90">
                        เลือกจำนวนงาน เลือกรูปแบบบริการ ระบบจะแสดงราคาทันที ไม่มีค่าใช้จ่ายซ่อน
                    </p>

                    {/* Call to action pill */}
                    <div className="flex items-center self-start bg-white/20 backdrop-blur-md rounded-full py-2.5 px-8 shadow-xl border border-white/30 cursor-pointer hover:bg-white/30 transition-colors">
                        <span className="text-white font-bold mr-6 text-sm sm:text-base text-right leading-snug">
                            ออกแบบแพ็คเกจได้เอง
                            <br />
                            ตามสิ่งที่คุณต้องการ
                        </span>
                        <div className="bg-white text-pink-500 rounded-full p-2 shadow-lg flex-shrink-0">
                            <ArrowRight className="h-6 w-6 stroke-[3]" />
                        </div>
                    </div>
                </div>

                {/* Right Content - Phone Mockup */}
                <div className="w-full lg:w-7/12 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
                    {/* The Phone Container */}
                    <div className="relative z-20 w-[300px] h-[600px] sm:w-[350px] sm:h-[700px] transform lg:translate-x-4">

                        {/* Phone Image from public folder (using absolute to cover) */}
                        <div className="absolute inset-0 z-10 pointer-events-none">
                            <img
                                src={`${import.meta.env.BASE_URL} MobileMocup.png`}
                                alt="Mobile App Mockup bezel"
                                className="w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                            />
                        </div>

                        {/* Simulated screen content inside phone (absolute positioned) */}
                        <div className="absolute top-[8%] left-[7%] right-[7%] bottom-[8%] rounded-[2.5rem] overflow-hidden bg-[#0A101D] flex flex-col z-0">
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
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="bg-transparent border-none outline-none text-white w-full text-sm placeholder-gray-500"
                                    />
                                    <Search className="h-4 w-4 text-white ml-2" />
                                </div>
                            </div>

                            {/* Central Graphic Area inside phone */}
                            <div className="px-6 flex-grow flex flex-col justify-center relative">

                                {/* Embedded Graphic Card (Like reference) */}
                                <div className="bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl w-full h-[180px] flex flex-col items-center justify-center relative shadow-inner overflow-visible">

                                    {/* Main graphic badge overlapping */}
                                    <div className="absolute bg-white rounded-2xl py-3 px-6 shadow-2xl flex items-center space-x-3 transform -translate-y-4 right-2 left-2 flex justify-center z-10">
                                        <div className="bg-[#FF5A96] p-2 rounded-xl text-white shadow-md">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        </div>
                                        <span className="text-[#FF5A96] font-black text-3xl tracking-tight">Graphic</span>
                                    </div>

                                    <div className="absolute left-4 top-4 text-white text-2xl font-light opacity-80">*</div>
                                    <div className="absolute right-4 bottom-16 text-white text-xl font-light opacity-80">*</div>

                                    {/* Social icons row inside phone over pink card */}
                                    <div className="absolute bottom-4 left-0 w-full flex justify-center space-x-2.5 z-20">
                                        <div className="w-6 h-6 rounded-[6px] bg-black flex items-center justify-center text-white font-bold text-[8px] shadow-md">
                                            TikTok
                                        </div>
                                        <div className="w-6 h-6 rounded-[6px] bg-[#1877F2] flex items-center justify-center text-white font-bold text-sm shadow-md">
                                            f
                                        </div>
                                        <div className="w-6 h-6 rounded-[6px] bg-[#00B900] flex items-center justify-center text-white font-bold text-[8px] shadow-md">
                                            LINE
                                        </div>
                                        <div className="w-6 h-6 rounded-[6px] bg-[#FFBF00] flex items-center justify-center text-white font-bold text-[8px] shadow-md">
                                            S
                                        </div>
                                        <div className="w-6 h-6 rounded-[6px] bg-[#F16A28] flex items-center justify-center text-[8px] text-white font-bold shadow-md">
                                            Shop
                                        </div>
                                        <div className="w-6 h-6 rounded-[6px] bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] flex items-center justify-center text-white font-bold text-[8px] shadow-md">
                                            IG
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Bottom interaction bar inside phone */}
                            <div className="px-10 pb-8 flex justify-between text-white border-t border-white/5 pt-4 mt-auto">
                                <div className="flex flex-col items-center">
                                    <Heart className="h-6 w-6 mb-1 text-white fill-white" />
                                    <span className="text-[10px] font-medium text-white/80">
                                        50K
                                    </span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <MessageCircle className="h-6 w-6 mb-1 text-white fill-white" />
                                    <span className="text-[10px] font-medium text-white/80">
                                        200
                                    </span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Bookmark className="h-6 w-6 mb-1 text-white fill-white" />
                                    <span className="text-[10px] font-medium text-white/80">
                                        9000
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badges OUTSIDE Phone */}

                        {/* LIVE Badge */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="absolute -left-12 sm:-left-20 top-[18%] bg-white rounded-full py-2 px-5 shadow-[0_15px_30px_rgba(0,0,0,0.15)] flex items-center space-x-3 z-30 transform -rotate-3"
                        >
                            <div className="w-6 h-6 rounded-full bg-[#FF5A96] flex items-center justify-center ring-4 ring-pink-100">
                                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                            </div>
                            <span className="font-bold text-gray-800 text-lg uppercase tracking-wide">
                                LIVE
                            </span>
                        </motion.div>

                        {/* VDO Badge */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="absolute -left-8 sm:-left-12 top-[45%] bg-white rounded-full py-2 px-5 shadow-[0_15px_30px_rgba(0,0,0,0.15)] flex items-center space-x-2.5 z-30 transform -rotate-2"
                        >
                            <div className="w-6 h-6 rounded-full bg-[#FF5A96] flex items-center justify-center text-white">
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v4a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1h10a1 1 0 011 1v4z"></path></svg>
                            </div>
                            <span className="font-bold text-gray-800 text-lg uppercase tracking-wide">
                                VDO
                            </span>
                        </motion.div>

                        {/* KOL Badge */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="absolute -right-10 sm:-right-16 top-[22%] bg-white rounded-full py-2 px-5 shadow-[0_15px_30px_rgba(0,0,0,0.15)] flex items-center space-x-2.5 z-30 transform rotate-2"
                        >
                            <div className="w-6 h-6 rounded-full bg-[#FF5A96] flex items-center justify-center text-white">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            </div>
                            <span className="font-bold text-gray-800 text-lg uppercase tracking-wide">
                                KOL
                            </span>
                        </motion.div>

                        {/* Shop Badge */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="absolute -right-8 sm:-right-14 bottom-[35%] bg-white rounded-full py-2 px-5 shadow-[0_15px_30px_rgba(0,0,0,0.15)] flex items-center space-x-2.5 z-30 transform rotate-3"
                        >
                            <div className="w-6 h-6 rounded-full bg-[#FF5A96] flex items-center justify-center text-white">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </div>
                            <span className="font-bold text-gray-800 text-lg uppercase tracking-wide">
                                Shop
                            </span>
                        </motion.div>

                        {/* Decorative white circle & stars outside */}
                        <div className="absolute -left-1 sm:-left-6 top-[28%] w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full shadow-lg z-10 border border-white/40 border-t-0 border-l-0 border-b-2 border-r-2" />

                        <div className="absolute -left-8 top-[36%] text-white text-4xl font-light z-30 drop-shadow-md">*</div>
                        <div className="absolute right-4 top-[32%] text-white text-3xl font-light z-30 drop-shadow-md">*</div>
                        <div className="absolute right-12 bottom-[45%] text-[#FF5A96] text-2xl font-black z-30">*</div>

                    </div>
                </div>
            </div>

            {/* The circular background element at the very bottom right of the black section */}
            <div className="absolute bottom-0 right-0 z-0 pointer-events-none opacity-[0.15] mix-blend-screen overflow-hidden w-[600px] h-[600px] lg:w-[1000px] lg:h-[1000px] transform translate-x-1/4 translate-y-1/4">
                <img
                    src={`${import.meta.env.BASE_URL}Background circle.png`}
                    alt="Background Decor"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
};

export default CraftingSuccess;
