import { c as create_ssr_component, s as subscribe, e as escape, b as add_attribute, v as validate_component } from "../../../chunks/index.js";
import "devalue";
import { B as Button } from "../../../chunks/button.js";
import { p as page } from "../../../chunks/stores.js";
const Seo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let url;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { title } = $$props;
  let { description } = $$props;
  let { type } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  url = $page.url.href;
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-8bsqpn_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="description"${add_attribute("content", description, 0)}><!-- HTML_TAG_START -->${`<script type="application/ld+json">
  {
      "@context": "http://schema.org",
      "@type": "${type}",
        "name": "${title}",
        "description": "${description}",
        "url": "${url}",
      }
    <\/script>`}<!-- HTML_TAG_END --><!-- HEAD_svelte-8bsqpn_END -->`, ""}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-9eeezd{width:100%;padding:2em 0}h2.svelte-9eeezd{font-weight:500;font-size:2em}input.svelte-9eeezd,textarea.svelte-9eeezd{width:100%;padding:0.75em 1em;border-radius:0.25em;border:1px solid #999}.form-group.svelte-9eeezd{margin-bottom:1.5em}label.svelte-9eeezd{display:block;padding-bottom:0.5em}.success.svelte-9eeezd{color:lightgreen}.error.svelte-9eeezd{border:1px solid red}.red.svelte-9eeezd{color:red}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<div class="container  svelte-9eeezd"><h2 class="svelte-9eeezd">Contact us</h2>
  ${form?.success ? `<p class="success svelte-9eeezd">${escape(form?.status || "")}</p>` : `<form method="POST"><div class="form-group w-1/2 svelte-9eeezd"><label class="col-md-3 control-label svelte-9eeezd" for="name">Name</label>
        <div class="col-md-9"><input id="name" name="name" type="text" placeholder="Your name" class="${["form-control svelte-9eeezd", form?.errors?.name ? "error" : ""].join(" ").trim()}"${add_attribute("value", form?.name || "", 0)}>
          ${form?.errors?.name ? `<p class="red svelte-9eeezd">${escape(form?.errors?.name)}</p>` : ``}</div></div>

      <div class="form-group w-1/2 svelte-9eeezd"><label class="col-md-3 control-label svelte-9eeezd" for="email">Your E-mail</label>
        <div class="col-md-9"><input id="email" name="email" type="text" placeholder="Your email" class="${["form-control svelte-9eeezd", form?.errors?.email ? "error" : ""].join(" ").trim()}"${add_attribute("value", form?.email || "", 0)}>
          ${form?.errors?.email ? `<p class="red svelte-9eeezd">${escape(form?.errors?.email)}</p>` : ``}</div></div>

      <div class="form-group w-1/2 svelte-9eeezd"><label class="col-md-3 control-label svelte-9eeezd" for="message">Your message</label>
        <div class="col-md-9"><textarea class="${["form-control svelte-9eeezd", form?.errors?.message ? "error" : ""].join(" ").trim()}" id="message" name="message" placeholder="Please enter your message here..." rows="5">${escape(form?.message || "", false)}</textarea>
          ${form?.errors?.message ? `<p class="red svelte-9eeezd">${escape(form?.errors?.message)}</p>` : ``}</div></div>

      <div class="form-group w-1/2 svelte-9eeezd"><div class="col-md-12">${validate_component(Button, "Button").$$render($$result, { type: "submit" }, {}, {
    default: () => {
      return `Submit`;
    }
  })}</div></div></form>`}</div>
${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Contact | Business Frontpage",
      description: "This is contact page",
      type: "WebPage"
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
