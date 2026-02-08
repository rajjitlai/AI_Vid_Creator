import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { fade } from "@remotion/transitions/fade";

// Components
import { DynamicBackground } from "./helpers/DynamicBackground";
import { TitleOverlay } from "./helpers/TitleOverlay";
import { Slide3 } from "./components/Slide3";
import { Slide4 } from "./components/Slide4";
import { Slide5 } from "./components/Slide5";
import { Slide6 } from "./components/Slide6";

const IntroScene = () => (
  <AbsoluteFill>
    <DynamicBackground
      src="Traffic Jam Aerial.png"
      scaleFrom={1.1}
      scaleTo={1.5}
      panX={50}
    />
    <TitleOverlay text1="TRAFFIC" text2="CHAOS" color="red" />
  </AbsoluteFill>
);

const ProblemScene = () => (
  <AbsoluteFill>
    <DynamicBackground
      src="Congested Intersection Red Light.png"
      scaleFrom={1.2}
      scaleTo={1.0}
      filter="contrast(1.2) hue-rotate(-10deg)"
    />
    <TitleOverlay text1="54 HOURS" text2="WASTED/YEAR" color="orange" />
  </AbsoluteFill>
);

const SolutionScene = () => (
  <AbsoluteFill>
    <DynamicBackground
      src="Empty Intersection Greeen Light.png"
      scaleFrom={1.0}
      scaleTo={1.3}
      filter="brightness(1.1)"
    />
    <TitleOverlay text1="SMART" text2="CONTROL" color="emerald" />
  </AbsoluteFill>
);

// Wrapper for existing slides to add motion
const DynamicSlideWrapper = ({ children, scaleIn = false }: { children: React.ReactNode, scaleIn?: boolean }) => {
  const frame = useCurrentFrame();
  const scale = scaleIn ? interpolate(frame, [0, 100], [1, 1.05]) : 1;

  return (
    <AbsoluteFill style={{ transform: `scale(${scale})` }}>
      {children}
    </AbsoluteFill>
  );
};

export const MyComposition = () => {
  return (
    <AbsoluteFill className="bg-slate-900">
      <TransitionSeries>
        {/* SCENE 1: INTRO */}
        <TransitionSeries.Sequence durationInFrames={90}>
          <IntroScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 15 })}
        />

        {/* SCENE 2: PROBLEM */}
        <TransitionSeries.Sequence durationInFrames={90}>
          <ProblemScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: 15 })}
        />

        {/* SCENE 3: SOLUTION HOOK */}
        <TransitionSeries.Sequence durationInFrames={90}>
          <SolutionScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 20 })}
        />

        {/* SCENE 4: HOW IT WORKS (SLIDE 3) */}
        <TransitionSeries.Sequence durationInFrames={150}>
          <DynamicSlideWrapper scaleIn>
            <Slide3 />
          </DynamicSlideWrapper>
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-left" })}
          timing={linearTiming({ durationInFrames: 15 })}
        />

        {/* SCENE 5: TECH STACK (SLIDE 4) */}
        <TransitionSeries.Sequence durationInFrames={150}>
          <DynamicSlideWrapper>
            <Slide4 />
          </DynamicSlideWrapper>
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-top" })}
          timing={linearTiming({ durationInFrames: 15 })}
        />

        {/* SCENE 6: ARCHITECTURE (SLIDE 5) */}
        <TransitionSeries.Sequence durationInFrames={450}>
          <DynamicSlideWrapper scaleIn>
            <Slide5 />
          </DynamicSlideWrapper>
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 15 })}
        />

        {/* SCENE 7: IMPACT (SLIDE 6) */}
        <TransitionSeries.Sequence durationInFrames={180}>
          <DynamicSlideWrapper>
            <Slide6 />
          </DynamicSlideWrapper>
        </TransitionSeries.Sequence>

      </TransitionSeries>
    </AbsoluteFill>
  );
};
