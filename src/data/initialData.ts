import { CSSProperties } from "react";
import { State } from "../reducers";

export enum Element {
  SECTION,
  COLUMN,
  WIDGET,
  ROOT,
}

export type Node = {
  type: Element;
  childIds: Id[];
  id: Id;
  attributes: CSSProperties;
};

export type Id = keyof State["elements"];
export const id = (): Id => `${Math.random()}`;

export const rootNodeId: Id = "root_node";

const config = {
  [Element.SECTION]: { getChildsNumber: () => 10, defaultAttributes: {} },
  [Element.ROOT]: { getChildsNumber: () => 7, defaultAttributes: {} },
  [Element.COLUMN]: {
    getChildsNumber: () => 3,
    defaultAttributes: {
      backgroundColor: "blue",
      color: "red",
      padding: "5px",
      opacity: "1",
      borderRadius: "0px",
    } as CSSProperties,
  },
  [Element.WIDGET]: { getChildsNumber: () => 0, defaultAttributes: {} },
};

//GENERATING STUFF ACHTUNG! SPAGETII CODE
const cE = (type: Element) => ({
  id: id(),
  attributes: {},
  type,
  childIds: [],
});

const getId = (node: Node): Id => node.id;

const generateNodeTree = (): State["elements"] => {
  const rootNode: Node = {
    id: rootNodeId,
    attributes: {},
    type: Element.ROOT,
    childIds: [],
  };
  const initialState: State["elements"] = {
    [rootNodeId]: rootNode,
  };

  [Element.SECTION, Element.COLUMN, Element.WIDGET].reduce(
    (parentElements, nodeType) => {
      const itemsOfTheSameLevel = [];
      for (const parent of parentElements) {
        const { getChildsNumber, defaultAttributes } = config[parent.type];
        const elements = Array(getChildsNumber())
          .fill(nodeType)
          .map(cE)
          .map((el) => ({ ...el, attributes: defaultAttributes }));
        parent.childIds = elements.map(getId);
        elements.forEach((e) => {
          initialState[e.id] = e;
        });
        itemsOfTheSameLevel.push(...elements);
      }
      return itemsOfTheSameLevel;
    },
    [rootNode]
  );

  return initialState;
};

export default generateNodeTree();
