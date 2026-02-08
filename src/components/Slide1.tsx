import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, Img, staticFile } from "remotion";

export const Slide1 = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const opacity = spring({
        frame,
        fps,
        config: { damping: 200 },
    });

    const scale = spring({
        frame: frame - 10,
        fps,
        config: { damping: 200 },
    });

    return (
        <AbsoluteFill className="bg-slate-900 text-white flex flex-col items-center justify-center p-20">
            {/* Background Image */}
            <AbsoluteFill>
                <Img
                    src={staticFile("Traffic Jam Aerial.png")}
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
            </AbsoluteFill>

            <h1
                style={{ opacity, transform: `scale(${scale})` }}
                className="text-7xl font-bold text-center mb-8 z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 drop-shadow-lg"
            >
                SMART TRAFFIC MANAGEMENT SYSTEM
            </h1>

            <h2
                style={{ opacity: spring({ frame: frame - 20, fps }) }}
                className="text-4xl text-slate-300 font-light mb-16 z-10"
            >
                AI-Powered Adaptive Signal Control
            </h2>

            <div
                style={{ opacity: spring({ frame: frame - 40, fps }) }}
                className="absolute bottom-20 right-20 text-right z-10"
            >
                <p className="text-2xl font-medium text-slate-400">[Your Name / Team Name]</p>
                <p className="text-xl text-slate-500">February 2026</p>
            </div>
        </AbsoluteFill>
    );
};
