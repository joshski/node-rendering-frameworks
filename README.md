# Node rendering frameworks

A few examples of popular approaches to rendering HTML on the server side in node.js, then rehydrating the server-rendered HTML with a virtual DOM on the client-side (using either React or Vue.js).

Each app renders a single page, and includes a "component" test for that page.

## Developer Experience

### express-react

```sh
time npm test
0.413 total
```

### next

```sh
time npm test
1.538 total
```

### nuxt2

```sh
time npm test
1.281 total
```

### nuxt3

```sh
time npm test
4.719 total
```

### remix

```sh
time npm test
1.598 total
```


