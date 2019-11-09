export default ({ types: t }) => ({
  visitor: {
    JSXElement(path) {
      // skip if not a Dehydrate component
      if (path.node.openingElement.name.name !== "Dehydrate") {
        return;
      }

      // skip if already processed
      if (
        path.node.children.length === 0 &&
        path.node.openingElement.attributes.length === 0
      ) {
        return;
      }

      path.replaceWith(
        t.jSXElement(
          t.jSXOpeningElement(
            t.jSXIdentifier("Dehydrate"),
            [], // attributes
            true // self-closing
          ),
          null, // closing element
          [], // children
          true // self-closing
        )
      );
    },
  },
});
