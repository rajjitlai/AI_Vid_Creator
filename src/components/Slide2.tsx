import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate, Img, staticFile } from "remotion";

export const Slide2 = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const titleAnimation = spring({ frame, fps });

    const listItems = [
        "30% of green light time wasted on empty lanes",
        "54 hours lost per driver annually (INRIX 2024)",
        "3.3 billion gallons fuel wasted in US cities",
        "$1,400 average loss per driver (time + fuel)"
    ];

    return (
        <AbsoluteFill className="bg-slate-900 text-white p-20 flex flex-row">
            {/* Left Content */}
            <div className="flex-1 pr-10 flex flex-col justify-center">
                <h2
                    style={{ transform: `translateX(${interpolate(titleAnimation, [0, 1], [-50, 0])}px)`, opacity: titleAnimation }}
                    className="text-5xl font-bold mb-12 text-red-500"
                >
                    THE PROBLEM: <br />
                    <span className="text-white">FIXED-TIMER SIGNALS</span>
                </h2>

                <ul className="space-y-6">
                    {listItems.map((item, i) => {
                        const delay = i * 15 + 30;
                        const itemAnim = spring({ frame: frame - delay, fps });
                        return (
                            <li
                                key={i}
                                style={{ opacity: itemAnim, transform: `translateY(${interpolate(itemAnim, [0, 1], [20, 0])}px)` }}
                                className="text-3xl text-slate-300 flex items-start"
                            >
                                <span className="text-red-500 mr-4">•</span>
                                {item}
                            </li>
                        );
                    })}
                </ul>

                <div
                    style={{ opacity: spring({ frame: frame - 90, fps }) }}
                    className="mt-12 p-6 bg-red-900/20 border-l-4 border-red-500"
                >
                    <p className="text-2xl italic text-red-200">
                        Root cause: Signals ignore real-time traffic density
                    </p>
                </div>
            </div>

            {/* Right Visual Placeholder */}
            <div className="flex-1 pl-10 flex flex-col gap-4 justify-center">
                <div className="h-64 bg-slate-800 rounded-xl flex items-center justify-center border-2 border-slate-700 relative overflow-hidden group">
                    {/* Empty Road Image */}
                    <Img
                        src={staticFile("Empty Intersection Greeen Light.png")}
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-emerald-900/30">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-green-500 mx-auto mb-2 shadow-[0_0_30px_rgba(34,197,94,0.8)] border-4 border-slate-900 animate-pulse"></div>
                            <span className="text-white font-bold bg-black/50 px-2 py-1 rounded">EMPTY LANE (GREEN)</span>
                        </div>
                    </div>
                </div>
                <div className="h-64 bg-slate-800 rounded-xl flex items-center justify-center border-2 border-slate-700 relative overflow-hidden">
                    {/* Congested Road Image */}
                    <Img
                        src={staticFile("Congested Intersection Red Light.png")}
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-red-900/30">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-red-600 mx-auto mb-2 shadow-[0_0_30px_rgba(220,38,38,0.8)] border-4 border-slate-900 animate-pulse"></div>
                            <span className="text-white font-bold bg-black/50 px-2 py-1 rounded">CONGESTED LANE (RED)</span>
                        </div>
                    </div>
                </div>
            </div>
        </AbsoluteFill>
    );
};
