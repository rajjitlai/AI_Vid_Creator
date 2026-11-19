import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { VideoTemplateProps } from "../types/video";

export const Portrait: React.FC<VideoTemplateProps> = ({
  title = "Vertical Video",
  subtitle = "Optimized for Shorts, Reels & TikTok",
  accentColor = "#ec4899",
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

  const translateY = interpolate(entrance, [0, 1], [60, 0]);

  return (
    <AbsoluteFill className="bg-neutral-950 text-white flex flex-col items-center justify-between p-16">
      <div className="pt-24 text-center">
        <span
          className="text-lg font-bold tracking-widest uppercase px-6 py-2 rounded-full border inline-block"
          style={{
            borderColor: accentColor,
            color: accentColor,
            backgroundColor: `${accentColor}1a`,
          }}
        >
          9:16 Vertical Story
        </span>
      </div>

      <div
        className="flex flex-col items-center text-center px-6"
        style={{
          opacity,
          transform: `translateY(${translateY}px)`,
        }}
      >
        <h1 className="text-7xl font-black tracking-tight leading-tight mb-6">{title}</h1>
        <p className="text-3xl text-neutral-400 font-light max-w-lg">{subtitle}</p>
      </div>

      <div className="pb-20 text-neutral-500 text-xl font-medium tracking-wide">
        Swipe up or follow for more
      </div>
    </AbsoluteFill>
  );
};
