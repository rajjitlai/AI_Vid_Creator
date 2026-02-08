import { AbsoluteFill, useVideoConfig, useCurrentFrame, interpolate, spring } from "remotion";

export const TitleOverlay = ({
    text1,
    text2,
    color = "white"
}: {
    text1: string;
    text2?: string;
    color?: string
}) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const opacity = spring({ frame, fps, config: { damping: 200 } });
    const scale = interpolate(spring({ frame, fps }), [0, 1], [0.8, 1]);
    const blur = interpolate(frame, [0, 20], [10, 0]);

    return (
        <AbsoluteFill className="flex flex-col items-center justify-center pointer-events-none">
            <h1
                style={{ opacity, transform: `scale(${scale})`, filter: `blur(${blur}px)` }}
                className="text-8xl font-black text-center mb-4 uppercase tracking-tighter drop-shadow-2xl z-10"
            >
                <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                    {text1}
                </span>
            </h1>
            {text2 && (
                <h2
                    style={{
                        opacity: spring({ frame: frame - 10, fps }),
                        transform: `translateY(${interpolate(spring({ frame: frame - 10, fps }), [0, 1], [20, 0])}px)`
                    }}
                    className={`text-5xl font-bold text-center z-10 px-4 py-2 bg-${color}-600/20 border-2 border-${color}-500/50 rounded-lg text-white backdrop-blur-sm`}
                >
                    {text2}
                </h2>
            )}
        </AbsoluteFill>
    );
};
