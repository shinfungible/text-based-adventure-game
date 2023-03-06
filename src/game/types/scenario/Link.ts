import { PlayerState } from "../PlayerState";

export type SceneLink = {
  source: string;
  target: string;
  condition?: (state: PlayerState) => boolean;
  timeLimit?: number;
  displayText?: TextDisplay;
  displayImage?: ImageDisplay;
  playSoundEffect?: SoundEffectPlay;
  playSoundtrack?: SoundtrackPlay;
};

type TextDisplay = {
  text: string;
  startTime: number;
  duration: number;
  transition: TextTransition;
};

type ImageDisplay = {
  id: string;
  src: string;
  show: boolean;
  startTime: number;
  duration: number;
  transition: ImageTransition;
};

type SoundEffectPlay = {
  id: string;
  src: string;
  volume: number;
  startTime: number;
  duration: number;
  transition: SoundTransition;
};

type SoundtrackPlay = {
  id: string;
  src: string;
  volume: number;
  play: boolean;
  transition: SoundTransition;
};

type TextTransition = {
  type: "fade" | "slide" | "zoom";
  direction: "in" | "out";
  duration: number;
};

type ImageTransition = {
  type: "fade" | "slide" | "zoom";
  direction: "in" | "out";
  duration: number;
};

type SoundTransition = {
  type: "fade";
  direction: "in" | "out";
  duration: number;
};