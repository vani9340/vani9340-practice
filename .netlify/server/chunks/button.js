import { c as create_ssr_component } from "./index.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button class="bg-purple-400 text-white py-2 px-4 mt-4">${slots.default ? slots.default({}) : ``}</button>`;
});
export {
  Button as B
};
