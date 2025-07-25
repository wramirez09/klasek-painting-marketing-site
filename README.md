Overview of some key routes.  Otherwise, take a look at the [SvelteKit documentation](https://kit.svelte.dev/docs/introduction) for more information on how to use SvelteKit.

`/src/app.css`

1. Define default styles in the base layer

```css
@layer base {
	* {
		/* Define default styles here */
	}
}
```

2. Update the CSS variables used by the `shadcn-svelte` components. Further documentation is provided in the `app.css` file

---

`/src/app.html`

- Update the favicon image, located at `static/favicon.png`
	- If you update the name of the file, make sure it is reflected in `app.html`

---

`/src/error.html`

- This file catches any unexpected errors thrown inside root load functions. Update the style of this page

---

`tailwind.config.js`

- Update custom gray color palette

---

`/static/_redirects`

The main purpose of this file is to provide redirect logic that ensures all old routes redirect to their new location after a website migration. It is only necessary to keep this logic if a specific page's route is changing post-migration (i.e. `/ac-repair` is changing to `/services/ac-repair`).

See the [Cloudflare documentation](https://developers.cloudflare.com/pages/configuration/redirects/) for more information on how to define redirects. A template for how redirects are defined is provided below:

```
[source] [destination] [code?]
```

---

`/src/routes/+layout.svelte`

- This is where any fonts downloaded from a provider such as [Fontsource](https://fontsource.org) should be imported. An example is provided within the layout file

---

`/src/routes/contact-us/`

`schema.ts`

- This is where you define the structure of the form data using typebox. An example schema is provided, along with custom error messages. Update the provided data as needed to match the conversion type created in the previous step


---

`/src/routes/cta/+server.ts`

- This route exists to allow for an alternative conversion event to be posted. If you have an extra event to post, do so here. If not, you can remove this directory entirely

---

`/src/routes/sitemap.xml/+server.ts`

- When all pages have been created, generate a sitemap using [this CLI](https://github.com/lgraubner/sitemap-generator-cli). Paste the generated sitemap in this file

---

`/static/robots.txt`

- Add the sitemap route
- Block web crawlers (if necessary)

```text
User-agent: Googlebot
Disallow: /nogooglebot/

User-agent: *
Allow: /

Sitemap: https://www.example.com/sitemap.xml
```

---

`/tests/routeList.ts`

A list of routes containing `+page.svelte` files is automatically generated for testing. However, this generator will not work for dynamic routes. In this case, ensure to exclude the dynamic route using the `excludedRoutes` array, and include any of the dynamic routes you wish to test in the `dynamicRoutes` array.

For example, you may have 100 blogs dynamically generated at the route `/blogs/*`. In this case, you would configure the routes as follows:
```javascript
excludedRoutes = ['/blogs'];
dynamicRoutes = ['/blogs/one-blog-title-for-testing'];
```
