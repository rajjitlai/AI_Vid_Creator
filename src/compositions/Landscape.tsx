import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VideoTemplateProps } from "../types/video";

export const Landscape: React.FC<VideoTemplateProps> = ({
  title = "Video Creation Template",
  subtitle = "Build stunning programmatic videos with Remotion & React",
  accentColor = "#6366f1",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 12, mass: 0.5 },
  });

  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(entrance, [0, 1], [40, 0]);

  return (
    <AbsoluteFill className="bg-slate-950 text-white flex items-center justify-center p-16">
      <div
        className="flex flex-col items-center text-center max-w-4xl"
        style={{
          opacity,
          transform: `translateY(${translateY}px)`,
        }}
      >
        <span
          className="text-sm font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6 border"
          style={{
            borderColor: accentColor,
            color: accentColor,
            backgroundColor: `${accentColor}1a`,
          }}
        >
          16:9 Landscape Widescreen
        </span>
        <h1 className="text-6xl font-black tracking-tight mb-4">{title}</h1>
        <p className="text-2xl text-slate-400 font-light max-w-2xl">{subtitle}</p>
      </div>
    </AbsoluteFill>
  );
};
