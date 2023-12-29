# 291 react-router nested path routes

- https://github.com/exhibitionist-digital/ultra/issues/291

```bash
deno task build
cd .ultra
deno task start
```

Navigate to http://localhost:8000/nested/demo

Open DevTools (F12), Console tab, there are errors like:

```
app.tsx:1 Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "text/html". Strict MIME type checking is enforced for module scripts per HTML spec.
```

## Created with

```bash
deno run -A -r https://deno.land/x/ultra/create.ts
```

### ultra/create: answers

```
> Do you want to use TypeScript? [y/n] y
> Which css/style library do you want to use?
'(0) None  (1) Twind  (2) Stitches  0

> Which routing library do you want to use?
(0) None  (1) React Router  (2) Wouter  1

> Which head management library do you want to use?
(0) None  (1) React Helmet 1

> Which query library do you want to use?
(0) None (1) React Query 1
```
