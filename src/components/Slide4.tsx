import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { Cpu, Server, Zap, Aperture, Timer, WifiOff, Monitor, Code, Terminal } from "lucide-react";


export const Slide4 = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const titleAnim = spring({ frame, fps });

    return (
        <AbsoluteFill className="bg-slate-900 text-white p-20 flex flex-col">
            <div className="mb-12 border-b border-slate-700 pb-6">
                <h2
                    style={{ opacity: titleAnim }}
                    className="text-5xl font-bold text-blue-400"
                >
                    TECHNOLOGY STACK
                </h2>
                <p className="text-2xl text-slate-400 mt-2">Edge AI Processing on Raspberry Pi 5</p>
            </div>

            <div className="flex flex-row gap-12 flex-1">
                {/* Hardware Column */}
                <div
                    style={{
                        opacity: spring({ frame: frame - 15, fps }),
                        transform: `translateX(${interpolate(spring({ frame: frame - 15, fps }), [0, 1], [-20, 0])}px)`
                    }}
                    className="flex-1 bg-slate-800/40 rounded-2xl p-8 border border-slate-700"
                >
                    <h3 className="text-3xl font-bold mb-6 text-pink-400 flex items-center">
                        <Cpu className="mr-3" size={32} /> HARDWARE
                    </h3>

                    <div className="mb-6 h-48 bg-black/40 rounded-lg flex items-center justify-center border border-slate-600 relative overflow-hidden group">
                        {/* Placeholder for Pi 5 + Hailo */}
                        <div className="text-center p-4 flex flex-col items-center">
                            <div className="flex gap-4 mb-4">
                                <Server size={64} className="text-pink-500" />
                                <Cpu size={64} className="text-cyan-500" />
                            </div>
                            <div className="font-mono text-sm text-slate-400">Rpi5 + Hailo AI</div>
                        </div>
                    </div>

                    <ul className="space-y-4">
                        <li className="flex items-start text-xl text-slate-300">
                            <Zap className="mr-2 text-pink-500" size={24} /> 13 TOPS inference performance
                        </li>
                        <li className="flex items-start text-xl text-slate-300">
                            <Aperture className="mr-2 text-pink-500" size={24} /> 30+ FPS vehicle detection
                        </li>
                        <li className="flex items-start text-xl text-slate-300">
                            <Timer className="mr-2 text-pink-500" size={24} /> &lt;200ms latency
                        </li>
                        <li className="flex items-start text-xl text-slate-300">
                            <WifiOff className="mr-2 text-pink-500" size={24} /> Offline operation
                        </li>
                    </ul>
                </div>

                {/* Software Column */}
                <div
                    style={{
                        opacity: spring({ frame: frame - 30, fps }),
                        transform: `translateX(${interpolate(spring({ frame: frame - 30, fps }), [0, 1], [20, 0])}px)`
                    }}
                    className="flex-1 bg-slate-800/40 rounded-2xl p-8 border border-slate-700"
                >
                    <h3 className="text-3xl font-bold mb-6 text-cyan-400 flex items-center">
                        <Code className="mr-3" size={32} /> SOFTWARE
                    </h3>

                    <div className="space-y-6">
                        <div className="bg-slate-900 p-4 rounded-lg border border-slate-600 flex items-start">
                            <Monitor className="text-cyan-500 mr-4 mt-1" size={28} />
                            <div>
                                <h4 className="text-xl font-bold text-cyan-200 mb-2">YOLOv8 Object Detection</h4>
                                <p className="text-slate-400 text-sm">Real-time recognition of vehicles, buses, trucks.</p>
                            </div>
                        </div>
                        <div className="bg-slate-900 p-4 rounded-lg border border-slate-600 flex items-start">
                            <Terminal className="text-cyan-500 mr-4 mt-1" size={28} />
                            <div>
                                <h4 className="text-xl font-bold text-cyan-200 mb-2">Signal Logic (Python)</h4>
                                <p className="text-slate-400 text-sm">Calculates green light duration dynamically.</p>
                            </div>
                        </div>
                        <div className="bg-slate-900 p-4 rounded-lg border border-slate-600 flex items-start">
                            <Monitor className="text-cyan-500 mr-4 mt-1" size={28} />
                            <div>
                                <h4 className="text-xl font-bold text-cyan-200 mb-2">Web Dashboard</h4>
                                <p className="text-slate-400 text-sm">Live monitoring interface for operators.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AbsoluteFill>
    );
};
