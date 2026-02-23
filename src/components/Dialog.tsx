import { useState } from 'react';
import youngImg from '../assets/young.jpg';
import midImg from '../assets/mid.jpg';
import matureImg from '../assets/mature.jpg';
import toysImg from '../assets/toys.webp';

const onlineCount = Math.floor(Math.random() * 151) + 250;
const nearbyCount = Math.floor(Math.random() * 16) + 15;

const ageGroups = [
    { label: 'Young (18–30)', image: youngImg },
    { label: 'Mid-age (31–45)', image: midImg },
    { label: '46+', image: matureImg },
];

const btnClass = `
    w-full py-4
    bg-gradient-to-r from-pink-500 to-rose-500
    hover:from-pink-400 hover:to-rose-400
    active:scale-95
    text-white font-bold text-base
    rounded-2xl
    transition-all duration-150
    shadow-lg shadow-pink-500/30
`;

export function Dialog() {
    const [step, setStep] = useState(0);
    const [fading, setFading] = useState(false);
    const [selectedAge, setSelectedAge] = useState<number | null>(null);

    const advance = () => {
        setFading(true);
        setTimeout(() => {
            setStep(s => s + 1);
            setFading(false);
        }, 500);
    };

    return (
        <div className="w-[85%] md:w-[34vw] bg-gray-900/70 backdrop-blur-xl border border-gray-600/50 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
                {/* Header */}
                <div className="px-6 pt-6 pb-4 text-center">
                    <div className="text-4xl mb-3">🔥</div>
                    <h2 className="text-white text-2xl font-bold leading-tight">
                        Women Near You
                    </h2>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-700 mx-6" />

                {/* Stats row */}
                <div className="grid grid-cols-2 gap-px bg-gray-700 mx-6 mt-4 rounded-xl overflow-hidden">
                    <div className="bg-gray-800 py-3 text-center">
                        <p className="text-white font-bold text-lg">{onlineCount}</p>
                        <p className="text-gray-400 text-xs flex items-center justify-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />Online now</p>
                    </div>
                    <div className="bg-gray-800 py-3 text-center">
                        <p className="text-white font-bold text-lg">{nearbyCount}</p>
                        <p className="text-gray-400 text-xs flex items-center justify-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />Within 15 miles</p>
                    </div>
                </div>

                {/* Body + CTA centered */}
                <div className={`flex flex-col px-6 py-8 gap-4 transition-opacity duration-500 ${fading ? 'opacity-0' : 'opacity-100'}`}>
                    {step === 0 && (
                        <>
                            <p className="text-white text-xl font-semibold text-center leading-snug">
                                You must be 18 years of age or older to access this website.
                            </p>
                            <button onClick={advance} className={btnClass}>
                                I confirm that I am 18 years of age or older
                            </button>
                        </>
                    )}

                    {step === 1 && (
                        <>
                            <p className="text-white text-xl font-semibold text-center leading-snug">
                                Before we continue please answer a few quick questions so we can match you better.
                            </p>
                            <button onClick={advance} className={btnClass}>
                                Continue
                            </button>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <p className="text-white text-xl font-semibold text-center leading-snug">
                                Which age group do you prefer?
                            </p>
                            <div className="grid grid-cols-3 gap-3 w-full">
                                {ageGroups.map((group, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setSelectedAge(i)}
                                        className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                                            selectedAge === i
                                                ? 'border-pink-500 scale-[1.03]'
                                                : 'border-transparent opacity-70 hover:opacity-100'
                                        }`}
                                    >
                                        <div className="aspect-[3/4]">
                                            <img
                                                src={group.image}
                                                alt={group.label}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <p className="text-white text-xs text-center py-2 leading-tight">
                                            {group.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={advance}
                                disabled={selectedAge === null}
                                className={`${btnClass} ${selectedAge === null ? 'opacity-40 cursor-not-allowed' : ''}`}
                            >
                                Next
                            </button>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <p className="text-white text-xl font-semibold text-center leading-snug shrink-0">
                                Are you open to exploring adult toys?
                            </p>
                            <div className="w-full aspect-[4/3]">
                                <img
                                    src={toysImg}
                                    alt="Adult toys"
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                            <div className="flex flex-col gap-3 w-full shrink-0">
                                <div className="flex gap-3">
                                    {['Maybe', 'Curious'].map(option => (
                                        <button
                                            key={option}
                                            onClick={advance}
                                            className={btnClass}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                                <button onClick={advance} className={btnClass}>
                                    Prefer not to answer
                                </button>
                            </div>
                        </>
                    )}
                </div>

                {/* Fine print */}
                <div className="px-6 pb-5">
                    <p className="text-gray-600 text-xs text-center">
                        This website is intended for adults 18 years of age or older. By accessing or using this site, you confirm that you are at least 18 years old.
                        Please review our Terms of Service, Privacy Policy, and Cookie Policy before using this website.
                        YourBrandName is an online dating platform designed for entertainment purposes.
                    </p>
                </div>
        </div>
    );
}
