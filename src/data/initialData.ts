import { CSSProperties } from "react";
import { State } from "../reducers";

export enum Element {
  SECTION,
  COLUMN,
  WIDGET,
  ROOT,
}

export type ElementDefinition = {
  sectionName: string;
  attributes: Record<string, any>;
  elementType: Element;
  content: ElementDefinition[];
};

export type Id = keyof State;
export const id = (): Id => `${Math.random()}${Math.random()}`;

export type Node = {
  type: Element;
  childIds: Id[];
  id: Id;
  attributes: CSSProperties;
};
