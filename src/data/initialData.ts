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

const id = () => Math.random().toString();

const cN = (
  elementType: Element,
  content: ElementDefinition[],
  attributes?: Record<string, any>
): ElementDefinition => ({
  sectionName: id(),
  elementType,
  content,
  attributes: attributes ? attributes : {},
});

export default cN(Element.ROOT, [
  cN(Element.SECTION, [
    cN(Element.COLUMN, [
      cN(Element.WIDGET, []),
      cN(Element.WIDGET, []),
      cN(Element.WIDGET, []),
    ]),
  ]),
  cN(Element.SECTION, [
    cN(Element.COLUMN, [
      cN(Element.WIDGET, []),
      cN(Element.WIDGET, []),
      cN(Element.WIDGET, []),
    ]),
    cN(Element.COLUMN, [
      cN(Element.WIDGET, []),
      cN(Element.WIDGET, []),
      cN(Element.WIDGET, []),
    ]),
  ]),
  cN(Element.SECTION, [
    cN(Element.COLUMN, [
      cN(Element.WIDGET, []),
      cN(Element.WIDGET, []),
      cN(Element.WIDGET, []),
    ]),
    cN(Element.COLUMN, [
      cN(Element.WIDGET, []),
      cN(Element.WIDGET, []),
      cN(Element.WIDGET, []),
    ]),
  ]),
]) as ElementDefinition;
