import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/index.js";
import { B as Button } from "../../chunks/button.js";
const app = "";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return `<footer class="bg-slate-800 text-gray-200 text-center p-4"><div>copyright c your window ${escape(year)}</div></footer>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="flex justify-between p-4 text-lg bg-slate-800 text-white"><h1>Project</h1>
    <ul class="underline flex text-base justify-center gap-4"><li><a href="/">Home</a></li>
       <li><a href="/about">About</a></li>
       <li><a href="/services">Services</a></li>
       <li><a href="/contact">Contact</a></li></ul></nav>`;
});
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="bg-purple-400 text-white text-center p-8"><h1 class="text-3xl">Buisness name and tagline</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facilis explicabo! Asperiores libero sit totam et aspernatur quasi soluta, architecto harum, a sunt exercitationem provident sapiente rerum iusto recusandae suscipit.</p></div>

<div class="flex justify-evenly py-8 px-4"><div class="w-1/2"><h1 class="text-2xl font-bold">What we do?</h1>
    <p class="container">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quod molestias sequi. Saepe tempora temporibus repudiandae corrupti aspernatur assumenda doloremque repellat commodi exercitationem ipsam fugiat magnam, esse quisquam provident deserunt.</p>
   <br> <p class="container">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quod molestias sequi. Saepe tempora temporibus repudiandae corrupti aspernatur assumenda doloremque repellat commodi exercitationem ipsam fugiat magnam, esse quisquam provident deserunt.</p>

   ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Call to action &gt;&gt;`;
    }
  })}</div>

<div><h1 class="text-2xl font-bold">Contact Us</h1>
    <h1>start</h1>
    <h1>Address</h1>
    <h1>Phone</h1>
    <a href="mailto:sg5428702@gmail.com" class="text-purple-600">E- sg5428702@gmail.com</a></div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
    ${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
    ${slots.default ? slots.default({}) : ``}
    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
