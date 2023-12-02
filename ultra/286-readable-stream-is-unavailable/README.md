# Ultra: 286-readable-stream-is-unavailable demo

- https://github.com/exhibitionist-digital/ultra/issues/286

## Error reproduction

Run

```
deno task dev
```

Press `[F5]` rapidly 5+ times in browser. The server will crash with error:

```
error: Uncaught TypeError: Readable stream is unavailable.
          controller.enqueue(encodeText(bufferedString));
                     ^
    at transformStreamDefaultControllerEnqueue (ext:deno_web/06_streams.js:4006:11)
    at TransformStreamDefaultController.enqueue (ext:deno_web/06_streams.js:6247:5)
    at https://deno.land/x/ultra@v2.3.8/lib/stream.ts:54:22
    at Object.action (ext:deno_web/02_timers.js:150:11)
    at handleTimerMacrotask (ext:deno_web/02_timers.js:64:10)
    at eventLoopTick (ext:core/01_core.js:184:21)
```

## Breaking code changes

`server.get("*", async (context) => {` at [./server.tsx](./server.tsx).

```ts
// Breaking change BEGIN
await new Promise((resolve) => setTimeout(resolve, 300));
// END breaking change
```

## Generated with

`deno run -A -r https://deno.land/x/ultra/create.ts`

### Generator answers

```
Do you want to use TypeScript? [y/n] y

Which css/style library do you want to use?
'(0) None  (1) Twind  (2) Stitches  0

Which routing library do you want to use?
(0) None  (1) React Router  (2) Wouter  1

Which head management library do you want to use?
(0) None  (1) React Helmet 1

Which query library do you want to use?
(0) None (1) React Query 1
```