# AI_Vid_Creator

A dual-engine programmatic video creation repository designed for use with **Google Antigravity CLI** and **Remotion (React 19 + Tailwind CSS v4)**.

- **GitHub Repository**: [https://github.com/rajjitlai/AI_Vid_Creator](https://github.com/rajjitlai/AI_Vid_Creator)
- **Engine Support**: React-based declarative video rendering alongside autonomous stickman video directing.

---

## Features

- 🎬 **Remotion Programmatic Engine**: Declarative, code-driven video creation using React 19, TypeScript, and Tailwind CSS v4.
- 📐 **Preset Multi-Format Ratios**: Ready-to-use compositions for all major platforms:
  - **16:9 Landscape** (`1920×1080` @ 30fps) — YouTube, desktop, widescreen.
  - **9:16 Portrait** (`1080×1920` @ 30fps) — TikTok, YouTube Shorts, Instagram Reels.
  - **1:1 Square** (`1080×1080` @ 30fps) — Instagram and LinkedIn feeds.
- 🤖 **Stickman Video Director**: Autonomous agent skill in `.agents/skills/directing-stickman-videos` capable of converting scripts/stories into fully animated, captioned, speech-synchronized videos (B1–B5 styles).
- 🧹 **Clean Git Architecture**: Built-in `.gitignore` rules isolate individual video generation projects, audio stems, and raw frame caches in `projects/` without cluttering the repository.

---

## Project Structure

```text
├── .agents/
│   └── skills/
│       └── directing-stickman-videos/  # Stickman AI Director skill & engine
├── public/                             # Static assets (images, audio, fonts)
├── src/
│   ├── compositions/
│   │   ├── Landscape.tsx               # 16:9 Landscape template
│   │   ├── Portrait.tsx                # 9:16 Portrait / Shorts template
│   │   └── Square.tsx                  # 1:1 Square template
│   ├── types/
│   │   └── video.ts                    # Video template prop types
│   ├── Composition.tsx                 # Default composition adapter
│   ├── index.css                       # Tailwind CSS v4 entry
│   ├── index.ts                        # Remotion entry point
│   └── Root.tsx                        # Remotion root registry
├── projects/                           # Isolated working folder for created videos (gitignored)
├── package.json
├── remotion.config.ts                  # Remotion CLI & Webpack configuration
└── tsconfig.json
```

---

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Launch Remotion Studio

Preview, scrub, and inspect compositions in real-time with hot module replacement:

```bash
npm run dev
```

### 3. Render Compositions

Render any of the built-in presets directly:

```bash
# Render 16:9 Landscape (YouTube)
npm run render:landscape

# Render 9:16 Portrait (Shorts / Reels / TikTok)
npm run render:portrait

# Render 1:1 Square (Feed posts)
npm run render:square
```

Render custom compositions with arbitrary parameters:

```bash
npx remotion render <CompositionId> out/my-video.mp4 --props='{"title":"Hello World"}'
```

---

## Workflow 1: React & Remotion Video Authoring

1. Create a new component in `src/compositions/MyVideo.tsx` using standard Remotion hooks (`useCurrentFrame`, `useVideoConfig`, `spring`, `interpolate`).
2. Register your composition in [src/Root.tsx](file:///D:/Code/Remotion_Test/src/Root.tsx):

```tsx
<Composition
  id="MyVideo"
  component={MyVideo}
  durationInFrames={150}
  fps={30}
  width={1920}
  height={1080}
  defaultProps={{
    title: "My Custom Video",
  }}
/>
```

3. Preview in Remotion Studio (`npm run dev`) or render to MP4 (`npx remotion render MyVideo out/my-video.mp4`).

---

## Workflow 2: Stickman Video Director (AI Autopilot)

The integrated skill in [.agents/skills/directing-stickman-videos](file:///D:/Code/Remotion_Test/.agents/skills/directing-stickman-videos/SKILL.md) supports automated video creation:

- **Mode A (Authoring & Prompts)**: Generates storyboards, visual prompt sequences, and video directives.
- **Mode B (Autopilot Code & Local Render)**:
  - Generates neural voiceover (or aligns user-supplied audio).
  - Produces word-level subtitle alignment and speech amplitude waveforms.
  - Assembles animated vector stickman stages, camera panning, and facial expressions.
  - Enforces strict motion quality verification ($\le 2.5\text{s}$ static intervals).
  - Encodes final broadcast MP4s directly into `projects/<project-name>/`.

### Supported Styles
- **B1**: Minimalist Line Art
- **B2**: High-contrast Monochrome
- **B3**: Vibrant Dynamic Animation
- **B4**: Hand-drawn Comic
- **B5**: Character Explainer (with synced presenter avatar, dynamic props, and animated scenery)

---

## Git & Project Management

- All individual video projects and rendering intermediate caches are authored inside `projects/` (e.g. `projects/my-first-video/`).
- The `projects/` folder contains a tracked `.gitkeep`, but all project subdirectories, raw PNG frames, and audio/video candidates are excluded from version control via `.gitignore`.

---

## Antigravity CLI Integration

This repository is optimized to work with **Google Antigravity CLI** (`agy`).
- The agent skill resides in `.agents/skills/directing-stickman-videos/`.
- The CLI automatically discovers the skill in your workspace, allowing you to direct and render videos via natural language instructions.

---

## Credits & Acknowledgements

- **Stickman Video Director**: Built using the skill architecture from [`kaomei/stickman-video-director`](https://github.com/kaomei/stickman-video-director).
- **Remotion**: Programmatic video creation library for React ([remotion.dev](https://www.remotion.dev)).
- **Audio Assets**: Public domain and Creative Commons attribution tracks credited in the bundled audio index.

---

## License

This project is open-source under the MIT License. See [LICENSE](LICENSE) for details. Remotion dependencies follow Remotion's licensing guidelines.

