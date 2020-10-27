import { Element, Node } from "../data/initialData";
import Column from "./Column";
import Root from "./Root";
import Section from "./Section";
import Widget from "./Widget";

export type ElementProps = {
  element: Node;
};

export default {
  [Element.ROOT]: Root,
  [Element.COLUMN]: Column,
  [Element.SECTION]: Section,
  [Element.WIDGET]: Widget,
};
