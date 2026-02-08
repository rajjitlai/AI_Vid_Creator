import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

export const DynamicBackground = ({
    src,
    filter = "",
    scaleFrom = 1.1,
    scaleTo = 1.3,
    panX = 0,
    panY = 0
}: {
    src: string;
    filter?: string;
    scaleFrom?: number;
    scaleTo?: number;
    panX?: number;
    panY?: number;
}) => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();

    const scale = interpolate(frame, [0, durationInFrames], [scaleFrom, scaleTo]);
    const translateX = interpolate(frame, [0, durationInFrames], [0, panX]);
    const translateY = interpolate(frame, [0, durationInFrames], [0, panY]);

    return (
        <AbsoluteFill style={{ overflow: "hidden" }}>
            <Img
                src={staticFile(src)}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
                    filter
                }}
            />
            <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay always for text */}
        </AbsoluteFill>
    );
};
