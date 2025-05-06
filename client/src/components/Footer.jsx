import { assets } from "../assets/assets";

const Footer = () => {


    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-24 bg-[var(--color-primary)]/10">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-black-500">
                <div>
                    <div className="flex items-center gap-3">
                        <img className="w-15 md:w-28" src={assets.logo} alt="logo" />
                        <span className="text-xl font-semibold text-black">Supermarket</span>
                    </div>

                    <p className="max-w-[410px] mt-6">
                        We provide fresh groceries and other daily use products. Trusted by many, we aim to make your shopping experience simple and affordable.
                    </p>
                </div>
                <div>
                    <div className="flex items-center gap-3">
                        <span className="text-xl font-semibold text-gray-700">Contact Us</span>
                    </div>
                    <div className="mt-6 space-y-3 text-black">
                        <p className="flex items-center gap-2">
                            📍 No.289, Sri Selvanayagi Amman Complex,
                            Kurumandur <br /> Gobi, Tamil Nadu - 638457
                        </p>
                        <p className="flex items-center gap-2">
                            📞 8248030939
                        </p>
                        <p className="flex items-center gap-2">
                            🕘 6:00am - 10:00pm
                        </p>
                    </div>
                </div>

            </div>
            <p className="py-4 text-center text-sm md:text-base">
                Copyright {new Date().getFullYear()} © Team A3 All Right Reserved.
            </p>
        </div>
    );
};

export default Footer