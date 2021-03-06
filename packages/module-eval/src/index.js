import Module from "module";
import { transformSync } from "@babel/core";
import createRequire from "./create-require";

export default function evaluate({
  code,
  filename,
  parent = undefined,
  babelOptions = {},
}) {
  const _module = new Module(filename, parent);
  _module.filename = filename;
  _module.require = createRequire({ _module, babelOptions });

  _module._compile(
    transformSync(code, {
      ...babelOptions,
      filename,
    }).code,
    filename
  );

  return _module.exports;
}
