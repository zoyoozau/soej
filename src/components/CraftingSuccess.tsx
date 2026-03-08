import { motion } from 'framer-motion';
import { ArrowRight, Search, Heart, MessageCircle, Bookmark } from 'lucide-react';

const CraftingSuccess = () => {
    return (
        <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 bg-gradient-header overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between">

                {/* Left Content */}
                <div className="w-full lg:w-5/12 flex flex-col justify-center text-left lg:pr-12 mb-16 lg:mb-0">
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 drop-shadow-sm">
                        CRAFTING YOUR<br />SUCCESS
                    </h2>
                    <p className="text-white text-lg sm:text-xl font-medium mb-12 max-w-sm drop-shadow-sm">
                        เลือกจำนวนงาน เลือกรูปแบบบริการ ระบบจะแสดงราคาทันที ไม่มีค่าใช้จ่ายซ่อน
                    </p>

                    {/* Call to action pill */}
                    <div className="flex items-center self-start bg-white/30 backdrop-blur-md rounded-full py-3 px-6 shadow-xl border border-white/40 mb-8 cursor-pointer hover:bg-white/40 transition-colors">
                        <span className="text-white font-bold mr-4 text-right leading-tight">
                            ออกแบบแพ็คเกจได้เอง<br />ตามสิ่งที่คุณต้องการ
                        </span>
                        <div className="bg-white text-[#FF66CC] rounded-full p-2 shadow-md">
                            <ArrowRight className="h-6 w-6" />
                        </div>
                    </div>
                </div>

                {/* Right Content - Phone Mockup */}
                <div className="w-full lg:w-7/12 relative flex justify-center lg:justify-end">

                    {/* The Phone Container */}
                    <div className="relative z-20 w-[300px] h-[600px] sm:w-[350px] sm:h-[700px] transform lg:translate-y-12">
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
                                <div className="text-white text-sm font-medium">9:41</div>
                                <div className="bg-white rounded-full px-3 py-1 text-xs font-bold text-black flex items-center shadow-lg">
                                    <span className="mr-1">🔔</span> 1
                                </div>
                            </div>

                            {/* Search bar inside phone */}
                            <div className="px-6 mb-4">
                                <div className="bg-gray-800 rounded-full flex items-center px-4 py-2 border border-gray-600">
                                    <Search className="h-4 w-4 text-gray-400 mr-2" />
                                    <input type="text" placeholder="Search" className="bg-transparent border-none outline-none text-white w-full text-sm" />
                                </div>
                            </div>

                            {/* Central Graphic Area inside phone */}
                            <div className="px-6 flex-grow flex flex-col justify-center relative">

                                <div className="bg-white rounded-3xl p-6 shadow-2xl mb-8 transform -rotate-3 relative z-10 mx-2">
                                    <div className="flex items-center justify-center space-x-3 text-[#FF66CC] font-black text-3xl italic tracking-tight">
                                        <img src={`${import.meta.env.BASE_URL}IconStar.png`} className="w-8 h-8 object-contain" alt="" />
                                        <span>Graphic</span>
                                    </div>
                                </div>

                                {/* Social icons row inside phone */}
                                <div className="flex justify-center space-x-2 mb-8 relative z-20">
                                    <div className="w-8 h-8 rounded-xl bg-black flex items-center justify-center text-white font-bold text-xs shadow-md">TikTok</div>
                                    <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-md">f</div>
                                    <div className="w-8 h-8 rounded-xl bg-green-500 flex items-center justify-center text-white font-bold text-sm shadow-md">Line</div>
                                    <div className="w-8 h-8 rounded-xl bg-[#F0533C] flex items-center justify-center text-white font-bold text-xs shadow-md">S</div>
                                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md">IG</div>
                                </div>
                            </div>

                            {/* Bottom interaction bar inside phone */}
                            <div className="px-8 pb-10 flex justify-between text-white border-t border-gray-800 pt-4">
                                <div className="flex flex-col items-center">
                                    <Heart className="h-6 w-6 mb-1 text-gray-400" />
                                    <span className="text-xs font-medium text-gray-400">50K</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <MessageCircle className="h-6 w-6 mb-1 text-gray-400" />
                                    <span className="text-xs font-medium text-gray-400">200</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Bookmark className="h-6 w-6 mb-1 text-gray-400" />
                                    <span className="text-xs font-medium text-gray-400">9000</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badges */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="absolute -left-12 sm:-left-24 top-1/4 bg-white rounded-full py-3 px-6 shadow-2xl flex items-center space-x-3 z-30"
                        >
                            <div className="w-8 h-8 rounded-full bg-[#FF66CC] flex items-center justify-center shadow-inner">
                                <img src={`${import.meta.env.BASE_URL}IconLive.png`} className="w-5 h-5" alt="Live" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                            </div>
                            <span className="font-bold text-black text-xl uppercase tracking-wider">LIVE</span>
                        </motion.div>

                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="absolute -right-8 sm:-right-20 top-1/3 bg-white rounded-full py-3 px-6 shadow-2xl flex items-center space-x-3 z-30"
                        >
                            <div className="w-8 h-8 rounded-full bg-[#FF66CC] flex items-center justify-center text-white text-xs font-black shadow-inner">
                                <img src={`${import.meta.env.BASE_URL}IconKOL.png`} className="w-5 h-5" alt="KOL" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                            </div>
                            <span className="font-bold text-black text-xl uppercase tracking-wider">KOL</span>
                        </motion.div>

                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="absolute -left-10 sm:-left-16 bottom-1/4 bg-white rounded-full py-3 px-6 shadow-2xl flex items-center space-x-3 z-30"
                        >
                            <div className="w-8 h-8 rounded-full bg-[#FF66CC] flex items-center justify-center shadow-inner">
                                <img src={`${import.meta.env.BASE_URL}IconVDO.png`} className="w-5 h-5" alt="VDO" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                            </div>
                            <span className="font-bold text-black text-xl uppercase tracking-wider">VDO</span>
                        </motion.div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="absolute -right-10 sm:-right-24 bottom-1/5 bg-white rounded-full py-3 px-6 shadow-2xl flex items-center space-x-3 z-30"
                        >
                            <div className="w-8 h-8 rounded-full bg-[#FF66CC] flex items-center justify-center shadow-inner">
                                <img src={`${import.meta.env.BASE_URL}IconShop.png`} className="w-5 h-5" alt="Shop" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                            </div>
                            <span className="font-bold text-black text-xl uppercase tracking-wider">Shop</span>
                        </motion.div>

                        {/* Background elements */}
                        <div className="absolute -left-12 top-1/2 text-white/50 text-5xl">*</div>
                        <div className="absolute -right-8 top-1/4 text-white/50 text-5xl">*</div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CraftingSuccess;
