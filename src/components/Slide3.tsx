import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import React from "react";
import { Camera, Brain, Activity, Timer, CheckCircle } from "lucide-react";

export const Slide3 = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const titleAnim = spring({ frame, fps });

    const flowSteps = [
        { icon: Camera, label: "Camera" },
        { icon: Brain, label: "AI Detection" },
        { icon: Activity, label: "Lane Analysis" },
        { icon: Timer, label: "Dynamic Timing" },
    ];

    const features = [
        "Real-time vehicle detection (YOLOv8)",
        "Per-lane density analysis",
        "Proportional green light allocation",
        "Zero infrastructure changes required"
    ];

    return (
        <AbsoluteFill className="bg-slate-900 text-white p-20 flex flex-col">
            <h2
                style={{ opacity: titleAnim, transform: `translateY(${interpolate(titleAnim, [0, 1], [-20, 0])}px)` }}
                className="text-5xl font-bold text-center mb-16 text-emerald-400"
            >
                ADAPTIVE TRAFFIC CONTROL
            </h2>

            {/* Flow Diagram */}
            <div className="flex justify-center items-center gap-4 mb-20">
                {flowSteps.map((step, i) => {
                    const stepAnim = spring({ frame: frame - (i * 10 + 20), fps });
                    const Icon = step.icon;
                    return (
                        <React.Fragment key={i}>
                            <div
                                style={{ transform: `scale(${stepAnim})`, opacity: stepAnim }}
                                className="bg-slate-800 p-6 rounded-xl border border-emerald-500/30 w-48 text-center flex flex-col items-center shadow-lg shadow-emerald-900/20"
                            >
                                <Icon size={48} className="mb-3 text-emerald-400" />
                                <span className="font-semibold text-lg">{step.label}</span>
                            </div>
                            {i < flowSteps.length - 1 && (
                                <div
                                    style={{ width: interpolate(spring({ frame: frame - (i * 10 + 25), fps }), [0, 1], [0, 40]) + 'px', opacity: spring({ frame: frame - (i * 10 + 25), fps }) }}
                                    className="h-1 bg-emerald-600"
                                />
                            )}
                        </React.Fragment>
                    );
                })}
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-12 max-w-5xl mx-auto w-full">
                <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                    <h3 className="text-2xl font-bold mb-6 text-emerald-300">KEY FEATURES</h3>
                    <ul className="space-y-4">
                        {features.map((feat, i) => (
                            <li key={i} className="flex items-center text-xl text-slate-300">
                                <CheckCircle size={24} className="mr-3 text-emerald-500" /> {feat}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-emerald-900/40 to-slate-900 p-8 rounded-2xl border border-emerald-500/40 flex flex-col justify-center items-center text-center">
                    <h3 className="text-3xl font-bold text-white mb-2">RESULT</h3>
                    <div className="text-6xl font-black text-emerald-400 my-4">20-30%</div>
                    <p className="text-xl text-emerald-200">Reduction in Average Wait Time</p>
                </div>
            </div>
        </AbsoluteFill>
    );
};
