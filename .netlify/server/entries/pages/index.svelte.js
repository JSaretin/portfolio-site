var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
var import_index_2dc61825 = require("../../chunks/index-2dc61825.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "*{padding:0;margin:0;box-sizing:border-box;font-family:'Montserrat', sans-serif}header.svelte-1f14c55.svelte-1f14c55,main.svelte-1f14c55.svelte-1f14c55{margin:auto;width:80%;display:flex}header.svelte-1f14c55.svelte-1f14c55{height:10vh}header.svelte-1f14c55.svelte-1f14c55{color:rgb(23, 0, 66);align-items:center}.logo-container.svelte-1f14c55.svelte-1f14c55,nav.svelte-1f14c55.svelte-1f14c55,.contact-section.svelte-1f14c55.svelte-1f14c55{flex:1}.nav-links.svelte-1f14c55.svelte-1f14c55,.logo-container.svelte-1f14c55.svelte-1f14c55,.contact-section.svelte-1f14c55.svelte-1f14c55{display:flex}.logo-container.svelte-1f14c55.svelte-1f14c55{font-weight:500}.nav-links.svelte-1f14c55.svelte-1f14c55{list-style:none;justify-content:space-around}.nav-links.svelte-1f14c55 .nav-link.svelte-1f14c55{text-decoration:none;color:rgb(212, 119, 5)}.nav-links.svelte-1f14c55 .active.svelte-1f14c55{font-weight:500}.contact-section.svelte-1f14c55.svelte-1f14c55{place-content:flex-end}.contact-section.svelte-1f14c55 a.svelte-1f14c55{text-decoration:none;border:2px solid rgb(212, 119, 5);padding:0.4rem 1rem;border-radius:0.2rem;color:rgb(212, 119, 5)}.contact-section.svelte-1f14c55 a.svelte-1f14c55:hover{background-color:rgb(212, 119, 5);color:#fff}main.svelte-1f14c55.svelte-1f14c55{height:80vh;align-items:center;justify-content:space-around}.presentation.svelte-1f14c55 .title.svelte-1f14c55{background:linear-gradient(to right, rgba(136, 66, 0, 0.911), rgb(61, 29, 136));background-clip:text;-webkit-background-clip:text;color:transparent;font-size:44px;font-weight:600}.title.svelte-1f14c55 span.svelte-1f14c55{overflow-x:hidden}.presentation.svelte-1f14c55 .about.svelte-1f14c55{display:flex;flex-direction:column;gap:1rem;max-width:50ch}.about.svelte-1f14c55 p.svelte-1f14c55{line-height:1.6;font-size:14px}.hero-image.svelte-1f14c55.svelte-1f14c55{width:100%;flex:1;display:flex;justify-content:flex-end}.hero-image.svelte-1f14c55 img.svelte-1f14c55{filter:drop-shadow(3px 3px 4px rgba(136, 66, 0, 0.911));transform:translateY(-50px);animation:svelte-1f14c55-slideIn 1.5s ease forwards;width:60%}.cta.svelte-1f14c55.svelte-1f14c55{display:flex;gap:1.5rem;margin-top:1rem}.cta.svelte-1f14c55 button.svelte-1f14c55{outline:none;border:none;padding:0 1.5rem;height:40px;font-weight:500;background:none;border:1px solid rgba(136, 66, 0, 0.911);color:rgba(136, 66, 0, 0.911)}.cta.svelte-1f14c55 .active.svelte-1f14c55,.cta.svelte-1f14c55 button.svelte-1f14c55:hover{background-color:rgba(136, 66, 0, 0.911);color:#fff;border:none}footer.svelte-1f14c55.svelte-1f14c55{height:40vh;width:100%;background-color:black}@keyframes svelte-1f14c55-slideIn{0%{transform:translateY(-50px);opacity:0}100%{transform:translateY(0px);opacity:1}}@media screen and (max-width:1200px){.presentation.svelte-1f14c55.svelte-1f14c55{flex-direction:column}}",
  map: null
};
const Routes = (0, import_index_2dc61825.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}" data-svelte="svelte-1yl2a22"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin data-svelte="svelte-1yl2a22"><link href="${"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap"}" rel="${"stylesheet"}" data-svelte="svelte-1yl2a22">`, ""}

<header class="${"svelte-1f14c55"}"><div class="${"logo-container svelte-1f14c55"}"><div class="${"logo"}"><h1>JOSAS</h1></div></div>
	<nav class="${"svelte-1f14c55"}"><ul class="${"nav-links svelte-1f14c55"}"><li><a href="${"#"}" class="${"nav-link active svelte-1f14c55"}">Home</a></li>
			<li><a href="${"#"}" class="${"nav-link svelte-1f14c55"}">About Me</a></li>
			<li><a href="${"#"}" class="${"nav-link svelte-1f14c55"}">View My Portfolio</a></li></ul></nav>

	<div class="${"contact-section svelte-1f14c55"}"><a href="${"#"}" class="${"svelte-1f14c55"}">Get In Touch</a></div></header>
<main class="${"svelte-1f14c55"}"><div class="${"presentation svelte-1f14c55"}"><div class="${"about svelte-1f14c55"}"><h1 class="${"title svelte-1f14c55"}">I am <span class="${"svelte-1f14c55"}">John Osaretin</span></h1>
			<p class="${"svelte-1f14c55"}">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, minima doloribus
				repudiandae cumque maxime doloremque velit.
			</p></div>
		<div class="${"cta svelte-1f14c55"}"><button class="${"active svelte-1f14c55"}">Get In Touch</button>
			<button class="${"svelte-1f14c55"}">View Projects</button></div></div>

	<div class="${"hero-image svelte-1f14c55"}"><img src="${"/me.jpeg"}" alt="${""}" class="${"svelte-1f14c55"}"></div></main>
<footer class="${"svelte-1f14c55"}"></footer>`;
});
module.exports = __toCommonJS(stdin_exports);
