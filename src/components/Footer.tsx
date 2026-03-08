import { Mail, Instagram, Facebook, Twitter, Ghost } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-[#FF66CC] pt-24 pb-12 overflow-hidden relative">

            {/* Background shape */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                <div className="w-full h-full bg-white rounded-bl-full transform translate-x-1/4 -translate-y-1/4"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start text-white">

                    {/* Logo and Tagline */}
                    <div className="mb-12 lg:mb-0 text-center lg:text-left">
                        <h2 className="text-4xl sm:text-5xl font-black mb-6 italic tracking-tight">CONTACT US</h2>
                        <div className="text-xl sm:text-2xl font-light leading-relaxed max-w-lg mb-8">
                            SOEJ BUSINESS<br />
                            SOLUTIONS CO., LTD.<br />
                            <span className="text-base sm:text-lg block mt-4 font-normal">
                                81/1 Soi Sukhumvit 2, Sukhumvit Road,<br />
                                Khlong Toei Subdistrict, Khlong Toei<br />
                                District, Bangkok 10110, Thailand
                            </span>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start space-x-3 mb-8">
                            <Mail className="h-6 w-6" />
                            <a href="mailto:surge.marketing9@gmail.com" className="text-lg hover:underline font-medium">
                                surge.marketing9@gmail.com
                            </a>
                        </div>

                        <div className="flex justify-center lg:justify-start space-x-6">
                            <a href="#" className="hover:text-black transition-colors">
                                <Instagram className="h-8 w-8" />
                            </a>
                            <a href="#" className="hover:text-black transition-colors">
                                <Facebook className="h-8 w-8" />
                            </a>
                            <a href="#" className="hover:text-black transition-colors">
                                <Twitter className="h-8 w-8" />
                            </a>
                            <a href="#" className="hover:text-black transition-colors">
                                {/* Using Ghost icon as a placeholder for TikTok/Other social */}
                                <Ghost className="h-8 w-8" />
                            </a>
                        </div>
                    </div>

                    {/* Large Image Graphic - Using Footer01 webp */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-lg">
                            {/* Team Graphic Placeholder based on ref */}
                            <div className="bg-white text-black p-4 inline-block font-black text-2xl sm:text-4xl uppercase italic transform lg:-rotate-3 shadow-xl mb-4 relative z-20">
                                "ทีมการตลาดส่วนตัว"
                            </div>

                            <img src="/footter01.webp" alt="SOEJ Team" className="w-full h-auto drop-shadow-2xl relative z-10 rounded-2xl" />

                            {/* Decorative floating elements could be added here */}
                            <div className="absolute top-1/2 -left-10 w-24 h-24 bg-white/20 rounded-full blur-xl z-0"></div>
                        </div>
                    </div>

                </div>

                {/* Bottom Nav Links */}
                <div className="mt-20 pt-8 border-t border-white/20 flex flex-wrap justify-center gap-6 text-sm font-medium">
                    <a href="#we-are" className="px-6 py-2 rounded-full border border-white hover:bg-white hover:text-[#FF66CC] transition-colors">We Are</a>
                    <a href="#services" className="px-6 py-2 rounded-full border border-white hover:bg-white hover:text-[#FF66CC] transition-colors">Services</a>
                    <a href="#clients" className="px-6 py-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors">Our Clients</a>
                    <a href="#team" className="px-6 py-2 rounded-full border border-white hover:bg-white hover:text-[#FF66CC] transition-colors">Team</a>
                    <a href="#contact" className="px-6 py-2 rounded-full border border-white hover:bg-white hover:text-[#FF66CC] transition-colors">Contact us</a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
