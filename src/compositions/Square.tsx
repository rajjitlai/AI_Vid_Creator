import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VideoTemplateProps } from "../types/video";

export const Square: React.FC<VideoTemplateProps> = ({
  title = "Square Post",
  subtitle = "Perfect for Instagram & LinkedIn feeds",
  accentColor = "#10b981",
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

  const scale = interpolate(entrance, [0, 1], [0.85, 1]);

  return (
    <AbsoluteFill className="bg-zinc-950 text-white flex items-center justify-center p-12">
      <div
        className="flex flex-col items-center text-center max-w-xl"
        style={{
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <span
          className="text-sm font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6 border"
          style={{
            borderColor: accentColor,
            color: accentColor,
            backgroundColor: `${accentColor}1a`,
          }}
        >
          1:1 Square Feed
        </span>
        <h1 className="text-5xl font-black tracking-tight mb-4">{title}</h1>
        <p className="text-xl text-zinc-400 font-light">{subtitle}</p>
      </div>
    </AbsoluteFill>
  );
};
