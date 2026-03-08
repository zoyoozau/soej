import { Play } from 'lucide-react';
import { useRef, useState } from 'react';

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section id="we-are" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between">

                {/* Left Content */}
                <div className="w-full lg:w-5/12 text-left mb-16 lg:mb-0">
                    <p className="text-gray-500 font-medium mb-4 text-sm sm:text-base tracking-wide">
                        Your On-Demand Content Team
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-[1.1] mb-6 tracking-tight">
                        ผลิตคอนเทนต์ครบ
                        <br />
                        จบในที่เดียว
                    </h1>
                    <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-sm leading-relaxed">
                        ถ่ายทำ ตัดต่อ ไลฟ์สด กราฟิก และหา KOL เลือกบริการเองได้ตามงบ ไม่ผูกสัญญาระยะยาว
                    </p>
                </div>

                {/* Right Content - Video Player */}
                <div className="w-full lg:w-7/12 relative flex justify-center lg:justify-end">
                    {/* Decorative pink background behind video */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF99FF]/40 to-[#FF66CC]/40 rounded-[2.5rem] transform translate-y-6 -translate-x-6 scale-105 -z-10"></div>

                    <div
                        className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl bg-[#FF99FF]/10 cursor-pointer group"
                        onClick={togglePlay}
                    >
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            src={`${import.meta.env.BASE_URL}วิดีโอเปิดตัวsoej.MP4`}
                            playsInline
                            loop
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            onEnded={() => setIsPlaying(false)}
                        />

                        {/* Play Button Overlay */}
                        {!isPlaying && (
                            <div className="absolute inset-0 flex items-center justify-center bg-white/20 backdrop-blur-sm transition-opacity group-hover:bg-white/10">
                                <div className="bg-white/80 backdrop-blur-md text-pink-500 px-6 py-3 flex items-center space-x-2 rounded-full shadow-lg transform transition-transform group-hover:scale-105">
                                    <span className="font-semibold tracking-wide lowercase">soej.com</span>
                                    <Play className="w-5 h-5 fill-current" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
