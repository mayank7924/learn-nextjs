## For a Statically generated Next.JS page
- is similar to hosting a simple HTML page at a route
- Next.js generates HTML for each page instead of having it all done by client-side JS
- static HTML page is generated at build time using `next build`
- same HTML page will be displayed whenever you access the page route
- recommended over SSR due to performance reasons
- load time can be further improved after caching by a CDN(content delivery network)
- better was SEO
- HTML data can be fetched during build time using `getStaticProps`
