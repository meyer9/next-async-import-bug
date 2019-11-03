# Bug

`pages/index.ts` imports `asdf.tsx` which imports `fs` which should not be available on the browser. However, this code runs even when on the browser. If you remove async from the function declaration, it works fine as demonstrated by `pages/works.ts`.
