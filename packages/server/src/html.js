import { h } from "preact";
import serialize from "serialize-javascript";

// TODO: head/meta components (lang, title etc)
function HTML({ app, props, bundles }) {
  return (
    <html>
      <head>{/* TODO: styles */}</head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: app }} />
        <script
          id="props"
          type="application/json"
          dangerouslySetInnerHTML={{
            __html: serialize(props, { isJSON: true }),
          }}
        />
        {bundles.map(bundle => (
          <script key={bundle} src={`/.bundles/${bundle}`} />
        ))}
      </body>
    </html>
  );
}

export const doctype = "<!DOCTYPE html>";
export default HTML;
