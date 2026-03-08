const Clients = () => {
    return (
        <section id="clients" className="py-20 bg-[#0B0F19] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="mb-12">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white italic tracking-tighter">
                        Our <span className="text-[#FF99FF] italic font-medium">Clients</span>
                    </h2>
                </div>

                {/* Client Grids - Following design sections layout roughly */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

                    {/* Real Estate / Service Combined Box placeholder (Card1) */}
                    <div className="bg-white rounded-3xl p-6 shadow-xl w-full h-auto aspect-video sm:aspect-[4/3] relative flex flex-col justify-end overflow-hidden group">
                        <h3 className="absolute top-6 left-6 text-2xl font-black text-[#FF66CC] italic z-10">Service</h3>
                        {/* The actual logos inside should be extracted from "Our Clients01.png" but we use the whole image as background/content for simplicity or build using grid if individual logos were available */}
                        <div className="w-full h-full flex items-center justify-center p-4">
                            <img src={`${import.meta.env.BASE_URL}Our Clients01.png`} alt="Service Clients" className="max-w-full max-h-full object-contain mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>

                    {/* Food & Beverage Box (Card2) */}
                    <div className="bg-white rounded-3xl p-6 shadow-xl w-full h-auto aspect-video sm:aspect-[4/3] relative flex flex-col justify-end overflow-hidden group">
                        <h3 className="absolute top-6 right-6 text-2xl font-black text-[#FF66CC] italic z-10">Food&Beverage</h3>
                        <div className="w-full h-full flex items-center justify-center p-4">
                            <img src={`${import.meta.env.BASE_URL}Our Clients02.png`} alt="Food & Beverage Clients" className="max-w-full max-h-full object-contain mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-6 shadow-xl w-full h-auto aspect-video sm:aspect-[4/3] relative flex flex-col justify-end overflow-hidden group">
                        <h3 className="absolute top-6 left-6 text-2xl font-black text-[#FF66CC] italic z-10">Real Estate</h3>
                        <div className="w-full h-full flex items-center justify-center p-4 mt-8">
                            <img src={`${import.meta.env.BASE_URL}Our Clients03.png`} alt="Real Estate Clients" className="max-w-full max-h-full object-contain mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-6 shadow-xl w-full h-auto aspect-video sm:aspect-[4/3] relative flex flex-col justify-end overflow-hidden group">
                        <h3 className="absolute top-6 right-6 text-2xl font-black text-[#FF66CC] italic z-10">Product</h3>
                        <div className="w-full h-full flex items-center justify-center p-4 mt-8">
                            <img src={`${import.meta.env.BASE_URL}Our Clients04.png`} alt="Product Clients" className="max-w-full max-h-full object-contain mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-6 shadow-xl w-full h-auto aspect-video sm:aspect-[4/3] md:col-span-2 lg:col-span-1 lg:col-start-2 relative flex flex-col justify-end overflow-hidden group mx-auto max-w-2xl lg:max-w-full">
                        <h3 className="absolute top-6 right-6 text-2xl font-black text-[#FF66CC] italic z-10">Clinic & Beauty</h3>
                        <div className="w-full h-full flex items-center justify-center p-4 mt-8">
                            <img src={`${import.meta.env.BASE_URL}Our Clients05.png`} alt="Clinic & Beauty Clients" className="max-w-full max-h-full object-contain mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Clients;
