import { c as create_ssr_component } from "./ssr.js";
const JsonLd = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isValid;
  let json;
  let { output = "head" } = $$props;
  let { schema = void 0 } = $$props;
  const createSchema = (schema2) => {
    const addContext = (context) => ({
      "@context": "https://schema.org",
      ...context
    });
    return Array.isArray(schema2) ? schema2.map((context) => addContext(context)) : addContext(schema2);
  };
  if ($$props.output === void 0 && $$bindings.output && output !== void 0) $$bindings.output(output);
  if ($$props.schema === void 0 && $$bindings.schema && schema !== void 0) $$bindings.schema(schema);
  isValid = schema && typeof schema === "object";
  json = `${'<script type="application/ld+json">'}${JSON.stringify(createSchema(schema))}${"<\/script>"}`;
  return `${$$result.head += `<!-- HEAD_svelte-1rghca7_START -->${isValid && output === "head" ? `<!-- HTML_TAG_START -->${json}<!-- HTML_TAG_END -->` : ``}<!-- HEAD_svelte-1rghca7_END -->`, ""} ${isValid && output === "body" ? `<!-- HTML_TAG_START -->${json}<!-- HTML_TAG_END -->` : ``}`;
});
export {
  JsonLd as J
};
