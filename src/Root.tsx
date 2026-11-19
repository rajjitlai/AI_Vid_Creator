import React from "react";
import "./index.css";
import { Composition } from "remotion";
import { Landscape } from "./compositions/Landscape";
import { Portrait } from "./compositions/Portrait";
import { Square } from "./compositions/Square";
import { MyComposition } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* 16:9 Landscape Composition (YouTube / Desktop) */}
      <Composition
        id="Landscape"
        component={Landscape}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          title: "Video Creation Template",
          subtitle: "Build stunning programmatic videos with Remotion & React",
          accentColor: "#6366f1",
        }}
      />

      {/* 9:16 Portrait Composition (Shorts / Reels / TikTok) */}
      <Composition
        id="Portrait"
        component={Portrait}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Vertical Video",
          subtitle: "Optimized for Shorts, Reels & TikTok",
          accentColor: "#ec4899",
        }}
      />

      {/* 1:1 Square Composition (Social Feeds) */}
      <Composition
        id="Square"
        component={Square}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1080}
        defaultProps={{
          title: "Square Post",
          subtitle: "Perfect for Instagram & LinkedIn feeds",
          accentColor: "#10b981",
        }}
      />

      {/* Default backward-compatible Composition */}
      <Composition
        id="MyComp"
        component={MyComposition}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
