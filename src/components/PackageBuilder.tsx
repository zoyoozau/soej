import { useState } from 'react';

const PackageBuilder = () => {
    const [packshot, setPackshot] = useState('5');
    const [adsSupport, setAdsSupport] = useState('20,000');
    const [videoProduction, setVideoProduction] = useState('10');
    const [liveStreaming, setLiveStreaming] = useState('5');
    const [kolCoordination, setKolCoordination] = useState('10');
    const [graphicDesign, setGraphicDesign] = useState('20');

    // Pricing Logic (Mockup based on design image)
    const calculateTotal = () => {
        // This is a mockup calculation, real logic would depend on exact pricing
        return '42,300';
    };

    const calculateDiscount = () => {
        return '-16,920';
    };

    const calculateFinal = () => {
        return '25,380';
    };

    return (
        <section id="package" className="py-20 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-center text-black mb-4">
                    Build Your Package
                </h2>
                <p className="text-xl text-center text-gray-600 mb-16">
                    สร้างแพ็คเกจของคุณ
                </p>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

                    {/* Left Column: Input Form */}
                    <div className="w-full lg:w-1/3 bg-[#1A1A1A] rounded-3xl p-8 text-white">
                        <h3 className="text-xl font-bold mb-8">กดใส่ตระกร้าแล้วคำนวณทันที</h3>

                        <div className="space-y-6">
                            {/* Select Input Item */}
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Packshot</label>
                                <div className="relative">
                                    <select
                                        value={packshot}
                                        onChange={(e) => setPackshot(e.target.value)}
                                        className="w-full bg-[#2A2A2A] text-white rounded-lg py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-[#FF66CC]"
                                    >
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="15">15</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Select Input Item */}
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Ads Support (บาท)</label>
                                <div className="relative">
                                    <select
                                        value={adsSupport}
                                        onChange={(e) => setAdsSupport(e.target.value)}
                                        className="w-full bg-[#2A2A2A] text-white rounded-lg py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-[#FF66CC]"
                                    >
                                        <option value="20,000">20,000</option>
                                        <option value="40,000">40,000</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Select Input Item */}
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Video Production</label>
                                <div className="relative">
                                    <select
                                        value={videoProduction}
                                        onChange={(e) => setVideoProduction(e.target.value)}
                                        className="w-full bg-[#2A2A2A] text-white rounded-lg py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-[#FF66CC]"
                                    >
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Select Input Item */}
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Live Streaming Service</label>
                                <div className="relative">
                                    <select
                                        value={liveStreaming}
                                        onChange={(e) => setLiveStreaming(e.target.value)}
                                        className="w-full bg-[#2A2A2A] text-white rounded-lg py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-[#FF66CC]"
                                    >
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Select Input Item */}
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">KOL Coordination</label>
                                <div className="relative">
                                    <select
                                        value={kolCoordination}
                                        onChange={(e) => setKolCoordination(e.target.value)}
                                        className="w-full bg-[#2A2A2A] text-white rounded-lg py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-[#FF66CC]"
                                    >
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Select Input Item */}
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Graphic Design</label>
                                <div className="relative">
                                    <select
                                        value={graphicDesign}
                                        onChange={(e) => setGraphicDesign(e.target.value)}
                                        className="w-full bg-[#2A2A2A] text-white rounded-lg py-3 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-[#FF66CC]"
                                    >
                                        <option value="20">20</option>
                                        <option value="40">40</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Middle Column: Pricing Table */}
                    <div className="w-full lg:w-1/3 flex flex-col pt-8">
                        <div className="flex border-b-2 border-[#FF0000] pb-2 mb-4 relative text-center">
                            <span className="w-1/2 font-bold text-lg text-black">ราคาปกติ<br /><span className="text-gray-500 font-normal text-sm">(ไม่มีส่วนลด)</span></span>
                            <span className="w-1/2 font-bold text-lg text-[#FF0000]">ราคาที่สัดส่วนลด<br />Flash -40%:</span>
                        </div>

                        <div className="flex-grow space-y-4 text-sm mt-4 relative">
                            {/* Red outline box mimicking the design */}
                            <div className="absolute inset-0 border-2 border-[#FF0000] rounded-xl z-0 pointer-events-none"></div>

                            <div className="flex relative z-10 px-4 py-2">
                                <div className="w-1/2 text-gray-600">
                                    <div>คลิป</div>
                                    <div>5 รูป = 2,900</div>
                                    <div>10 รูป = 4,900</div>
                                </div>
                                <div className="w-1/2 text-gray-600 border-l border-gray-200 pl-4">
                                    <div>คลิป</div>
                                    <div>5 รูป = 1,740</div>
                                    <div>10 รูป = 2,940</div>
                                </div>
                            </div>

                            <div className="px-4 py-2 border-t border-gray-200 text-xs text-gray-500 text-center relative z-10 bg-gray-50 rounded-md mx-2">
                                โฆษณาแอด (ค่าจัดการ 20% ของยอดที่ต้องการยิง เช่น ยิง 10,000 + ค่าจัดการ 2,000)
                            </div>

                            <div className="flex relative z-10 px-4 py-2">
                                <div className="w-1/2 text-gray-600">
                                    <div>1 ชิ้น = 2,490</div>
                                    <div>5 ชิ้น = 11,900</div>
                                </div>
                                <div className="w-1/2 text-gray-600 border-l border-gray-200 pl-4">
                                    <div>1 ชิ้น = 1,494</div>
                                    <div>5 ชิ้น = 7,140</div>
                                </div>
                            </div>

                            <div className="flex relative z-10 px-4 py-2 border-t border-gray-100">
                                <div className="w-1/2 text-gray-600">
                                    <div>1 ชม. = 590</div>
                                    <div>5 ชม. = 2,700</div>
                                </div>
                                <div className="w-1/2 text-gray-600 border-l border-gray-200 pl-4">
                                    <div>1 ชม. = 354</div>
                                    <div>5 ชม. = 1,620</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Checkout Summary */}
                    <div className="w-full lg:w-1/3 flex flex-col items-center pt-8 lg:mt-24">

                        <p className="text-xl font-medium text-black mb-2">เมื่อกด Add to cart:</p>
                        <p className="text-lg text-gray-600 mb-8">แสดงแบบนี้ด้านข้าง</p>

                        <div className="bg-white border-2 border-[#FF0000] rounded-3xl p-8 w-full max-w-sm shadow-xl relative mt-4">
                            {/* Decorative arrow number 3 from design - omitted for clean React implementation, but we'll use emoji */}
                            <div className="absolute -top-6 right-8 bg-[#FF0000] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg transform rotate-12">
                                Flash
                            </div>

                            <p className="text-gray-600 text-lg mb-2">ยอดรวมปกติ: {calculateTotal()}</p>
                            <h3 className="text-2xl font-black text-[#FF0000] mb-4">Flash 1 ชม. ลด 40%</h3>

                            <p className="text-gray-600 text-lg mb-4">ส่วนลด 1 ชม: <span className="text-[#FF0000]">{calculateDiscount()}</span></p>
                            <div className="border-t border-gray-200 pt-4">
                                <p className="text-black text-2xl font-bold flex justify-between">
                                    ยอดสุทธิ: <span>{calculateFinal()}</span>
                                </p>
                            </div>
                            <p className="text-gray-500 text-sm mt-4 text-center">
                                ราคาใช้ได้ภายใน 60 นาที<br />
                                ( ส่งสรุปราคาเข้า LINE ตอนนี้ )
                            </p>

                            {/* Countdown Timer Mockup */}
                            <div className="mt-8 bg-[#1A1A1A] text-white rounded-xl p-4 flex justify-between items-center">
                                <span className="font-bold text-sm tracking-wider">Event</span>
                                <div className="flex space-x-2">
                                    <div className="flex flex-col items-center">
                                        <span className="text-xl font-bold">0</span>
                                        <span className="text-[10px] text-gray-400">days</span>
                                    </div>
                                    <span className="text-xl font-bold">:</span>
                                    <div className="flex flex-col items-center">
                                        <span className="text-xl font-bold">00</span>
                                        <span className="text-[10px] text-gray-400">hours</span>
                                    </div>
                                    <span className="text-xl font-bold">:</span>
                                    <div className="flex flex-col items-center">
                                        <span className="text-xl font-bold">59</span>
                                        <span className="text-[10px] text-gray-400">minutes</span>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full mt-6 bg-[#00C300] hover:bg-green-600 text-white font-bold py-4 px-6 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center">
                                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" /></svg>
                                ADD FRIEND
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PackageBuilder;
