# bokskap

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Supabase

is overkill for this project. The idea is to learn how one can run supabase locally and connect it to the frontend.

Read the [documentation](https://supabase.com/docs/guides/cli/local-development).

You'll need to have `supabase` and `docker` (possibly also `docker-compose`) installed locally in order to run the backend.

## tl;dr

(run all commands from this projects root directory)

- install `docker` and `supabase` on your system.
- run `supabase start`
- copy the ANON key to `../src/lib/supabaseClient.js` (if you lost it run `supabase status`)
- start the frontend: `npm install && npm run dev`
- enjoy bokskap frontend at `http://localhost:5174` (or something like that)
- enjoy bokskap database dashboard at `http://localhost:54323` (or something like that)

