const Clients = () => {
    return (
        <section id="clients" className="pt-6 pb-20 bg-[#050a30] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="mb-12">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white italic tracking-tighter">
                        Our <span className="text-[#FF99FF] italic font-medium">Clients</span>
                    </h2>
                </div>

                {/* Client Grid - Matching design layout */}
                <div className="flex flex-col gap-6 lg:gap-8">

                    {/* Row 1: Service + Food&Beverage */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

                        {/* Service Card */}
                        <div className="bg-white rounded-3xl p-6 shadow-xl relative overflow-hidden group">
                            <div className="w-full flex items-center justify-center p-4">
                                <img
                                    src={`${import.meta.env.BASE_URL}Our Clients01.png`}
                                    alt="Service Clients"
                                    className="max-w-full max-h-full object-contain mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Food & Beverage Card */}
                        <div className="bg-white rounded-3xl p-6 shadow-xl relative overflow-hidden group">
                            <div className="w-full flex items-center justify-center p-4">
                                <img
                                    src={`${import.meta.env.BASE_URL}Our Clients02.png`}
                                    alt="Food & Beverage Clients"
                                    className="max-w-full max-h-full object-contain mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                    </div>

                    {/* Row 2: Real Estate + Product + Clinic & Beauty (3 columns) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

                        {/* Real Estate Card */}
                        <div className="bg-white rounded-3xl p-5 shadow-xl relative overflow-hidden group">
                            <div className="w-full flex items-center justify-center p-3">
                                <img
                                    src={`${import.meta.env.BASE_URL}Our Clients03.png`}
                                    alt="Real Estate Clients"
                                    className="max-w-full max-h-full object-contain mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Product Card */}
                        <div className="bg-white rounded-3xl p-5 shadow-xl relative overflow-hidden group">
                            <div className="w-full flex items-center justify-center p-3">
                                <img
                                    src={`${import.meta.env.BASE_URL}Our Clients04.png`}
                                    alt="Product Clients"
                                    className="max-w-full max-h-full object-contain mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Clinic & Beauty Card */}
                        <div className="bg-white rounded-3xl p-5 shadow-xl relative overflow-hidden group">
                            <div className="w-full flex items-center justify-center p-3">
                                <img
                                    src={`${import.meta.env.BASE_URL}Our Clients05.png`}
                                    alt="Clinic & Beauty Clients"
                                    className="max-w-full max-h-full object-contain mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Clients;
