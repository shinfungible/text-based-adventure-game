import { SceneNode } from "./Node";
import { SceneLink } from "./Link";

export type ScenarioData = {
  nodes: { [id: string]: SceneNode };
  edges: { [id: string]: SceneLink };
};