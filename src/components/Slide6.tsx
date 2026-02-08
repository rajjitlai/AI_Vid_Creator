import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { CheckCircle, Clock, BatteryCharging, DollarSign } from "lucide-react";

export const Slide6 = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const titleAnim = spring({ frame, fps });

    const phases = [
        { date: "Feb 16", label: "MVP: Simulation & dashboard", status: "complete" },
        { date: "Feb 25", label: "Finals: Live Pi Cam Deployment", status: "pending" },
        { date: "Future", label: "City-wide Integration", status: "future" },
    ];

    const impacts = [
        { text: "20-30% wait time reduction", icon: Clock },
        { text: "Fuel savings & emission cuts", icon: BatteryCharging },
        { text: "Scalable to existing cameras", icon: CheckCircle },
        { text: "Plug-and-play deployment", icon: CheckCircle },
        { text: "Cost <$200 per intersection", icon: DollarSign }
    ];

    return (
        <AbsoluteFill className="bg-slate-900 text-white p-20 flex flex-row gap-16">
            {/* Left: Timeline */}
            <div className="flex-1">
                <h2
                    style={{ opacity: titleAnim }}
                    className="text-5xl font-bold mb-12 text-orange-400"
                >
                    ROLLOUT PLAN
                </h2>

                <div className="space-y-10 pl-4 border-l-2 border-slate-700 ml-4">
                    {phases.map((phase, i) => {
                        const show = spring({ frame: frame - (i * 20 + 20), fps });
                        return (
                            <div
                                key={i}
                                style={{ opacity: show, transform: `translateX(${interpolate(show, [0, 1], [-20, 0])}px)` }}
                                className="relative pl-8"
                            >
                                <div className={`absolute -left-[25px] top-1 w-6 h-6 rounded-full border-4 ${i === 0 ? 'bg-green-500 border-green-900' : 'bg-slate-800 border-orange-500'}`}></div>
                                <div className="text-sm font-bold text-orange-500 mb-1 tracking-wider">{phase.date}</div>
                                <div className="text-2xl text-slate-200">{phase.label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Right: Impact */}
            <div className="flex-1 bg-slate-800/30 rounded-3xl p-10 border border-slate-700/50">
                <h2
                    style={{ opacity: spring({ frame: frame - 80, fps }) }}
                    className="text-4xl font-bold mb-10 text-center text-green-400"
                >
                    EXPECTED IMPACT
                </h2>

                <div className="space-y-6">
                    {impacts.map((imp, i) => {
                        const show = spring({ frame: frame - (i * 15 + 100), fps });
                        const Icon = imp.icon;
                        return (
                            <div
                                key={i}
                                style={{ opacity: show, transform: `scale(${show})` }}
                                className="bg-slate-900 p-4 rounded-xl border border-slate-700 flex items-center shadow-lg"
                            >
                                <div className="w-10 h-10 rounded-full bg-green-900/50 flex items-center justify-center text-green-400 mr-4 font-bold text-xl">
                                    <Icon size={24} />
                                </div>
                                <span className="text-xl text-slate-200 font-medium">{imp.text}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </AbsoluteFill>
    );
};
