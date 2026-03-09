import { motion } from "framer-motion";
import {
    ArrowRight,
    Search,
    Heart,
    MessageCircle,
    Bookmark,
} from "lucide-react";

const base = import.meta.env.BASE_URL;

const CraftingSuccess = () => {
    return (
        <section className="relative overflow-hidden bg-[#0A101D]">
            {/* ===== PINK GRADIENT BACKGROUND with diagonal cut ===== */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background:
                        "linear-gradient(135deg, #F9A8C9 0%, #E88DB8 30%, #D97AAF 60%, #C468A5 100%)",
                    clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 78%)",
                }}
            />

            {/* ===== MAIN CONTENT ===== */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
                    {/* ===== LEFT: Text Content ===== */}
                    <div className="w-full lg:w-5/12 flex flex-col justify-center text-left pt-4 lg:pt-12 relative z-20">
                        <h2 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black text-white leading-[1.05] mb-6 tracking-tight italic">
                            CRAFTING YOUR
                            <br />
                            SUCCESS
                        </h2>
                        <p className="text-white/90 text-base sm:text-lg font-medium mb-10 max-w-[300px] leading-relaxed">
                            เลือกจำนวนงาน เลือกรูปแบบบริการ
                            <br />
                            ระบบจะแสดงราคาทันที ไม่มีค่าใช้จ่ายซ่อน
                        </p>

                        {/* CTA Pill */}
                        <div className="flex items-center self-start bg-white/20 backdrop-blur-md rounded-full py-2.5 px-6 shadow-lg border border-white/30 cursor-pointer hover:bg-white/30 transition-all group">
                            <span className="text-white font-bold mr-4 text-sm sm:text-base leading-snug">
                                ออกแบบแพ็คเกจได้เอง
                                <br />
                                ตามสิ่งที่คุณต้องการ
                            </span>
                            <div className="bg-white text-pink-500 rounded-full p-2 shadow-md flex-shrink-0 group-hover:scale-110 transition-transform">
                                <ArrowRight className="h-5 w-5 stroke-[3]" />
                            </div>
                        </div>
                    </div>

                    {/* ===== RIGHT: Phone Mockup Area ===== */}
                    <div
                        className="w-full lg:w-7/12 relative flex justify-center lg:justify-center mt-8 lg:mt-0"
                        style={{ minHeight: "620px" }}
                    >
                        {/* Phone wrapper */}
                        <div className="relative w-[280px] h-[560px] sm:w-[320px] sm:h-[640px] lg:w-[340px] lg:h-[680px]">
                            {/* Phone bezel image on top */}
                            <img
                                src={`${base}MobileMocup.png`}
                                alt="Phone Mockup"
                                className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
                            />

                            {/* Screen content behind bezel */}
                            <div className="absolute top-[3%] left-[5%] right-[5%] bottom-[3%] rounded-[2.2rem] overflow-hidden bg-[#0B0F1A] flex flex-col z-10">
                                {/* Status bar */}
                                <div className="flex justify-between items-center px-5 pt-4 pb-1">
                                    <span className="text-white text-xs font-medium opacity-80">
                                        9:41
                                    </span>
                                    <div className="bg-white rounded-full px-2.5 py-0.5 text-[10px] font-bold text-gray-800 flex items-center shadow">
                                        <span className="mr-0.5">🔔</span> 1
                                    </div>
                                </div>

                                {/* Search bar */}
                                <div className="px-5 mb-3">
                                    <div className="bg-[#1A1F2E] rounded-full flex items-center px-3 py-1.5 border border-white/10">
                                        <Search className="h-3 w-3 text-gray-500 mr-1.5" />
                                        <span className="text-gray-500 text-xs flex-1">Search</span>
                                        <Search className="h-3 w-3 text-gray-400" />
                                    </div>
                                </div>

                                {/* Main content area - pink gradient background like reference */}
                                <div className="flex-1 flex flex-col items-center justify-center px-3 relative">
                                    {/* Pink gradient fill behind content (matching reference) */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF8EC7] via-[#E87DB5] to-[#C86EA3] opacity-90 rounded-lg" />

                                    <div className="relative z-10 flex flex-col items-center justify-center w-full py-4">
                                        {/* Graphic Card - white card floating on pink */}
                                        <div className="bg-white rounded-2xl py-3 px-5 shadow-xl flex items-center gap-3 justify-center mb-4 transform -rotate-1">
                                            <div className="bg-[#FF5A96] p-2 rounded-xl text-white flex-shrink-0">
                                                <svg
                                                    className="w-5 h-5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                    />
                                                </svg>
                                            </div>
                                            <span className="text-[#FF5A96] font-black text-2xl tracking-tight">
                                                Graphic
                                            </span>
                                        </div>

                                        {/* Social media icons row on pink bg */}
                                        <div className="flex items-center justify-center gap-1.5">
                                            <div className="w-7 h-7 rounded-lg bg-black flex items-center justify-center shadow">
                                                <span className="text-white text-[6px] font-bold">
                                                    TikTok
                                                </span>
                                            </div>
                                            <div className="w-7 h-7 rounded-lg bg-[#1877F2] flex items-center justify-center shadow">
                                                <span className="text-white font-bold text-sm">f</span>
                                            </div>
                                            <div className="w-7 h-7 rounded-lg bg-[#00B900] flex items-center justify-center shadow">
                                                <span className="text-white text-[6px] font-bold">
                                                    LINE
                                                </span>
                                            </div>
                                            <div className="w-7 h-7 rounded-lg bg-[#FFBF00] flex items-center justify-center shadow">
                                                <span className="text-white font-bold text-xs">S</span>
                                            </div>
                                            <div className="w-7 h-7 rounded-lg bg-[#F16A28] flex items-center justify-center shadow">
                                                <span className="text-white text-[6px] font-bold">
                                                    Shop
                                                </span>
                                            </div>
                                            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] flex items-center justify-center shadow">
                                                <span className="text-white text-[6px] font-bold">
                                                    IG
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom engagement metrics on dark bg */}
                                <div className="px-6 pb-5 flex justify-around items-center text-white/80 pt-3 border-t border-white/5">
                                    <div className="flex flex-col items-center gap-0.5">
                                        <Heart className="h-5 w-5 fill-white text-white" />
                                        <span className="text-[9px] font-medium">50K</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-0.5">
                                        <MessageCircle className="h-5 w-5 fill-white text-white" />
                                        <span className="text-[9px] font-medium">200</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-0.5">
                                        <Bookmark className="h-5 w-5 fill-white text-white" />
                                        <span className="text-[9px] font-medium">9000</span>
                                    </div>
                                </div>
                            </div>

                            {/* ===== FLOATING BADGES using actual exported icons ===== */}

                            {/* LIVE Badge - top left */}
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="absolute z-30 -left-14 sm:-left-20 top-[12%] bg-white rounded-full py-2 px-4 shadow-[0_8px_25px_rgba(0,0,0,0.12)] flex items-center gap-2"
                            >
                                <img
                                    src={`${base}Icon Live.png`}
                                    alt="Live"
                                    className="w-7 h-7 object-contain"
                                />
                                <span className="font-bold text-gray-800 text-base tracking-wide">
                                    LIVE
                                </span>
                            </motion.div>

                            {/* KOL Badge - top right */}
                            <motion.div
                                initial={{ x: 30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="absolute z-30 -right-14 sm:-right-20 top-[18%] bg-white rounded-full py-2 px-4 shadow-[0_8px_25px_rgba(0,0,0,0.12)] flex items-center gap-2"
                            >
                                <img
                                    src={`${base}IconKOL.png`}
                                    alt="KOL"
                                    className="w-7 h-7 object-contain"
                                />
                                <span className="font-bold text-gray-800 text-base tracking-wide">
                                    KOL
                                </span>
                            </motion.div>

                            {/* VDO Badge - left middle */}
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="absolute z-30 -left-12 sm:-left-16 top-[45%] bg-white rounded-full py-2 px-4 shadow-[0_8px_25px_rgba(0,0,0,0.12)] flex items-center gap-2"
                            >
                                <img
                                    src={`${base}IconVDO.png`}
                                    alt="VDO"
                                    className="w-7 h-7 object-contain"
                                />
                                <span className="font-bold text-gray-800 text-base tracking-wide">
                                    VDO
                                </span>
                            </motion.div>

                            {/* Shop Badge - bottom right */}
                            <motion.div
                                initial={{ x: 30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="absolute z-30 -right-12 sm:-right-18 bottom-[28%] bg-white rounded-full py-2 px-4 shadow-[0_8px_25px_rgba(0,0,0,0.12)] flex items-center gap-2"
                            >
                                <img
                                    src={`${base}IconShop.png`}
                                    alt="Shop"
                                    className="w-7 h-7 object-contain"
                                />
                                <span className="font-bold text-gray-800 text-base tracking-wide">
                                    Shop
                                </span>
                            </motion.div>

                            {/* Star decorations */}
                            <img
                                src={`${base}IconStar.png`}
                                alt=""
                                className="absolute z-30 w-4 h-4 -left-6 top-[28%] opacity-80"
                            />
                            <img
                                src={`${base}IconStar.png`}
                                alt=""
                                className="absolute z-30 w-3 h-3 right-2 top-[32%] opacity-60"
                            />
                            <img
                                src={`${base}IconStar.png`}
                                alt=""
                                className="absolute z-30 w-5 h-5 -left-2 top-[58%] opacity-50"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== Background circle glow at bottom-right ===== */}
            <div className="absolute bottom-0 right-0 z-0 pointer-events-none opacity-20 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] translate-x-1/4 translate-y-1/4">
                <img
                    src={`${base}Background circle.png`}
                    alt=""
                    className="w-full h-full object-cover mix-blend-screen"
                />
            </div>
        </section>
    );
};

export default CraftingSuccess;
