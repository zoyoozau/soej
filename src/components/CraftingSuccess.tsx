import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const base = import.meta.env.BASE_URL;

const CraftingSuccess = () => {
    return (
        <section className="relative overflow-x-clip">
            {/* ===== Pink gradient background - covers entire section ===== */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "linear-gradient(135deg, #FFB6D9 0%, #FF8EC4 30%, #F472B6 50%, #E55FA3 70%)",
                }}
            />

            {/* ===== Curved navy overlay at bottom ===== */}
            <svg
                className="absolute bottom-0 left-0 w-full z-0"
                style={{ height: "65%" }}
                viewBox="0 0 1440 600"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,280 C300,380 600,80 1440,180 L1440,600 L0,600 Z"
                    fill="#050a30"
                />
            </svg>

            {/* ===== MAIN CONTENT ===== */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 pb-6 sm:pt-14 sm:pb-8 lg:pt-16 lg:pb-12">
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-2 sm:gap-4 lg:gap-8">

                    {/* ===== LEFT: Text Content ===== */}
                    <div className="w-full lg:w-5/12 flex flex-col justify-start items-center lg:items-start text-center lg:text-left pt-2 lg:pt-6 relative z-20">
                        <h2 className="text-[1.75rem] sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] mb-3 sm:mb-4 tracking-tight drop-shadow-sm" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontStyle: "italic" }}>
                            CRAFTING YOUR
                            <br />
                            SUCCESS
                        </h2>
                        <p className="text-white/90 text-xs sm:text-base font-medium mb-5 sm:mb-8 max-w-[320px] lg:max-w-[280px] leading-relaxed">
                            เลือกจำนวนงาน เลือกรูปแบบบริการ
                            <br />
                            ระบบจะแสดงราคาทันที ไม่มีค่าใช้จ่ายซ่อน
                        </p>

                        {/* CTA Pill */}
                        <div className="flex items-center self-center lg:self-start bg-white/25 backdrop-blur-md rounded-full py-2.5 sm:py-2 px-5 sm:px-5 shadow-lg border border-white/30 cursor-pointer hover:bg-white/35 transition-all group">
                            <span className="text-white font-bold mr-3 text-xs sm:text-sm leading-snug">
                                ออกแบบแพ็คเกจได้เอง
                                <br />
                                ตามสิ่งที่คุณต้องการ
                            </span>
                            <div className="bg-white text-pink-500 rounded-full p-2 sm:p-1.5 shadow-md flex-shrink-0 group-hover:scale-110 transition-transform">
                                <ArrowRight className="h-5 w-5 sm:h-4 sm:w-4 stroke-[3]" />
                            </div>
                        </div>
                    </div>

                    {/* ===== RIGHT: Phone Mockup (single image - already has all content) ===== */}
                    <div className="w-full lg:w-7/12 relative flex justify-center mt-6 sm:mt-4 lg:mt-0" style={{ paddingLeft: "40px", paddingRight: "40px" }}>

                        {/* Container for phone + badges */}
                        <div className="relative w-[260px] sm:w-[320px] lg:w-[380px]">

                            {/* The phone image - already contains all screen content */}
                            <img
                                src={`${base}MobileMocup.png`}
                                alt="Phone Mockup"
                                className="w-full h-auto relative z-10"
                                style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.25))" }}
                            />

                            {/* ===== FLOATING BADGES around the phone ===== */}

                            {/* LIVE Badge - left of phone, upper-middle */}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="absolute z-20 bg-white rounded-full py-1 px-2.5 sm:py-2 sm:px-4 shadow-[0_4px_15px_rgba(0,0,0,0.1)] flex items-center gap-1 sm:gap-2"
                                style={{ left: "-55px", top: "26%" }}
                            >
                                <img src={`${base}Icon Live.png`} alt="Live" className="w-4 h-4 sm:w-6 sm:h-6 object-contain" />
                                <span className="font-bold text-gray-800 text-xs sm:text-base tracking-wide">LIVE</span>
                            </motion.div>

                            {/* VDO Badge - left of phone, middle-lower */}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="absolute z-20 bg-white rounded-full py-1 px-2.5 sm:py-2 sm:px-4 shadow-[0_4px_15px_rgba(0,0,0,0.1)] flex items-center gap-1 sm:gap-2"
                                style={{ left: "-50px", top: "48%" }}
                            >
                                <img src={`${base}IconVDO.png`} alt="VDO" className="w-4 h-4 sm:w-6 sm:h-6 object-contain" />
                                <span className="font-bold text-gray-800 text-xs sm:text-base tracking-wide">VDO</span>
                            </motion.div>

                            {/* KOL Badge - right of phone, upper area */}
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="absolute z-20 bg-white rounded-full py-1 px-2.5 sm:py-2 sm:px-4 shadow-[0_4px_15px_rgba(0,0,0,0.1)] flex items-center gap-1 sm:gap-2"
                                style={{ right: "-55px", top: "28%" }}
                            >
                                <img src={`${base}IconKOL.png`} alt="KOL" className="w-4 h-4 sm:w-6 sm:h-6 object-contain" />
                                <span className="font-bold text-gray-800 text-xs sm:text-base tracking-wide">KOL</span>
                            </motion.div>

                            {/* Shop Badge - right of phone, lower area */}
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="absolute z-20 bg-white rounded-full py-1 px-2.5 sm:py-2 sm:px-4 shadow-[0_4px_15px_rgba(0,0,0,0.1)] flex items-center gap-1 sm:gap-2"
                                style={{ right: "-55px", top: "58%" }}
                            >
                                <img src={`${base}IconShop.png`} alt="Shop" className="w-4 h-4 sm:w-6 sm:h-6 object-contain" />
                                <span className="font-bold text-gray-800 text-xs sm:text-base tracking-wide">Shop</span>
                            </motion.div>

                            {/* Star sparkle decorations */}
                            <img src={`${base}IconStar.png`} alt="" className="absolute z-20 w-3 h-3 sm:w-4 sm:h-4" style={{ left: "-20px", top: "36%", opacity: 0.7 }} />
                            <img src={`${base}IconStar.png`} alt="" className="absolute z-20 w-2.5 h-2.5 sm:w-3 sm:h-3" style={{ left: "20%", top: "40%", opacity: 0.5 }} />
                            <img src={`${base}IconStar.png`} alt="" className="absolute z-20 w-3 h-3 sm:w-4 sm:h-4" style={{ right: "-10px", top: "42%", opacity: 0.6 }} />
                            <img src={`${base}IconStar.png`} alt="" className="absolute z-20 w-2.5 h-2.5 sm:w-3 sm:h-3" style={{ left: "12%", top: "55%", opacity: 0.4 }} />
                            <img src={`${base}IconStar.png`} alt="" className="absolute z-20 w-2.5 h-2.5 sm:w-3 sm:h-3" style={{ right: "3%", top: "68%", opacity: 0.5 }} />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CraftingSuccess;
