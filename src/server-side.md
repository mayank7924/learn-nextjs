## For a Server-side rendered Next.JS page
- the page HTML is generated `on each request`
- used when data you are displaying is frequently updated
- needs a function getServerSideProps to be exported
- slower page load than SSG
- SSR pages should be as few as as possible 
