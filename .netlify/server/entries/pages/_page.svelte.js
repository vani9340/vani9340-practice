import { c as create_ssr_component, a as each, b as add_attribute, e as escape } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { posts } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="grid grid-cols-3">${each(posts, ({ title, url }) => {
    return `<div><img${add_attribute("src", url, 0)}${add_attribute("alt", title, 0)} class="h-1/2">
    <p>${escape(title)}</p>
    </div>`;
  })}</div>`;
});
export {
  Page as default
};
