import { Play } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const fadeInterval = useRef<number | null>(null);

    const fadeAudio = (video: HTMLVideoElement, targetVolume: number, duration: number) => {
        if (fadeInterval.current) {
            clearInterval(fadeInterval.current);
        }

        const initialVolume = video.volume;
        const volumeChange = targetVolume - initialVolume;

        if (Math.abs(volumeChange) < 0.01) return;

        const steps = 20;
        const stepTime = duration / steps;
        let currentStep = 0;

        fadeInterval.current = setInterval(() => {
            currentStep++;
            let newVolume = initialVolume + (volumeChange * (currentStep / steps));

            if (newVolume > 1) newVolume = 1;
            if (newVolume < 0) newVolume = 0;

            video.volume = newVolume;

            if (currentStep >= steps) {
                if (fadeInterval.current) {
                    clearInterval(fadeInterval.current);
                }
            }
        }, stepTime);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const video = videoRef.current;
                    if (!video) return;

                    if (entry.isIntersecting) {
                        fadeAudio(video, 1, 800);
                    } else {
                        fadeAudio(video, 0, 800);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const currentVideo = videoRef.current;
        if (currentVideo) {
            observer.observe(currentVideo);
        }

        return () => {
            if (currentVideo) {
                observer.unobserve(currentVideo);
            }
            if (fadeInterval.current) {
                clearInterval(fadeInterval.current);
            }
        };
    }, []);

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
                <div className="w-full lg:w-5/12 text-center lg:text-left mb-16 lg:mb-0">
                    <p className="text-gray-500 font-medium mb-4 text-sm sm:text-base tracking-wide">
                        Your On-Demand Content Team
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-[1.1] mb-6 tracking-tight">
                        ผลิตคอนเทนต์ครบ
                        <br />
                        จบในที่เดียว
                    </h1>
                    <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-sm mx-auto lg:mx-0 leading-relaxed">
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
                            autoPlay
                            muted
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
