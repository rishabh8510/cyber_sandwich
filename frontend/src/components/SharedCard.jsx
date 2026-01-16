import React from "react";

export default function SharedCard({ data, className = "" }) {
    return (
        <div className={`w-full px-4 md:px-12 lg:px-40 py-16`}>
            <div className="grid grid-cols-1 md:grid-cols-[40%_55%] max-w-full gap-16">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
                        {data.sectionOne.title}
                        <br />
                        <span className="color">
                            {data.sectionOne.highlight}
                        </span>
                    </h2>

                    <p className="text-gray-600 mt-4 max-w-xl text-base text-justify">
                        {data.sectionOne.description}
                    </p>
                </div>

                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5 ${className}`}>
                    {data.sectionOne.services.map((item, idx) => (
                        <div
                            key={idx}
                            className={`rounded-xl p-4 flex items-center gap-4 bg-gray-100 `}
                        >
                            <div className={`w-10 h-10 flex items-center justify-center rounded-xl `}>
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="w-7 h-7 object-contain"
                                />
                            </div>
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-stretch">
                <div className="flex justify-center h-full">
                    <img
                        src={data.sectionTwo.image}
                        alt="AI"
                        className="rounded-2xl shadow-xl w-full max-w-xl object-fill h-full"
                    />
                </div>

                <div className="h-full flex flex-col justify-between">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
                        {data.sectionTwo.title}
                        <br />
                        <span className="color">
                            {data.sectionTwo.highlight}
                        </span>
                    </h2>

                    <div className="mt-6 space-y-5 text-gray-700 leading-relaxed text-base text-justify">
                        {data.sectionTwo.points.map((p, idx) => (
                            <p key={idx}>
                                <span className="font-semibold text-gray-900">
                                    {p.heading}:
                                </span>{" "}
                                {p.text}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
