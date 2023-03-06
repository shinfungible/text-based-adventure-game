import { PlayerState } from "../PlayerState";

export type SceneNode = TextNode | ChoiceNode | ImageNode;

export type TextNode = {
  id: string;
  type: "text";
  displayMethod: DisplayMethod;
  text: string[];
};

export type ImageNode = {
  id: string;
  type: "image";
  src: string;
};

export type ChoiceNode = {
  id: string;
  type: "choice";
  text: string[];
  choices: ChoiceOption[];
};

export type ChoiceOption = {
  id: string;
  content: string;
  description: string;
  targetId: string;
  condition?: (state: PlayerState) => boolean;
};

export type DisplayMethod = "all-at-once" | "one-by-one";