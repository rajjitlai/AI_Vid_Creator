import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { Camera, Brain, BarChart, Calculator, LayoutDashboard } from "lucide-react";

export const Slide5 = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const titleAnim = spring({ frame, fps });

    const steps = [
        { title: "Capture", desc: "Use traffic camera feed", icon: Camera },
        { title: "Detect", desc: "Hailo AI runs YOLOv8 @ 30fps", icon: Brain },
        { title: "Count", desc: "Lane Analyzer counts vehicles", icon: BarChart },
        { title: "Calculate", desc: "Algorithm sets timing (5s-45s)", icon: Calculator },
        { title: "Visualize", desc: "Dashboard shows metrics", icon: LayoutDashboard },
    ];

    return (
        <AbsoluteFill className="bg-slate-900 text-white p-20 flex flex-col items-center">
            <h2
                style={{ opacity: titleAnim }}
                className="text-5xl font-bold text-center mb-16 text-purple-400"
            >
                SYSTEM ARCHITECTURE
            </h2>

            <div className="flex w-full justify-between items-start max-w-6xl relative">
                {/* Connecting Line */}
                <div className="absolute top-12 left-0 w-full h-1 bg-slate-700 -z-0">
                    <div
                        className="h-full bg-purple-500 transition-all duration-100 ease-linear"
                        style={{ width: `${Math.min((frame / 60) * 100, 100)}%` }} // Simple linear fill
                    ></div>
                </div>

                {steps.map((step, i) => {
                    const stepDelay = i * 20 + 20;
                    const pop = spring({ frame: frame - stepDelay, fps, config: { stiffness: 100 } });
                    const Icon = step.icon;

                    return (
                        <div
                            key={i}
                            style={{
                                opacity: pop,
                                transform: `scale(${pop})`
                            }}
                            className="flex flex-col items-center z-10 w-48 text-center"
                        >
                            <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-purple-500 flex items-center justify-center text-3xl font-bold mb-4 shadow-lg shadow-purple-900/50">
                                <Icon size={40} className="text-purple-300" />
                            </div>
                            <h3 className="text-xl font-bold text-purple-200 mb-2">{step.title}</h3>
                            <p className="text-sm text-slate-400 px-2">{step.desc}</p>
                        </div>
                    );
                })}
            </div>

            <div
                style={{ opacity: spring({ frame: frame - 140, fps }), transform: `translateY(${interpolate(spring({ frame: frame - 140, fps }), [0, 1], [50, 0])}px)` }}
                className="mt-20 bg-purple-900/20 p-8 rounded-2xl border border-purple-500/50 max-w-4xl text-center"
            >
                <h4 className="text-2xl font-mono text-purple-300">
                    INTELLIGENCE FORMULA
                </h4>
                <div className="text-4xl font-bold mt-4 text-white">
                    Green Time = Base + (Vehicle Count × Weight)
                </div>
                <div className="flex justify-center gap-8 mt-6 text-slate-400 font-mono text-sm">
                    <span>Min: 5s</span>
                    <span>Max: 45s</span>
                </div>
            </div>
        </AbsoluteFill>
    );
};
