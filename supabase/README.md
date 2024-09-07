# Supabase

Read the [documentation](https://supabase.com/docs/guides/cli/local-development) for local development.

You'll need to have supabase and docker installed locally in order to run the backend.

## tl;dr

(run all commands from this projects root directory)

- install `docker` and `supabase` on your system.
- run `supabase start`
- copy the ANON key to `../src/lib/supabaseClient.js`
- start the frontend: `npm install && npm run dev`
- enjoy bokskap frontend at `http://localhost:5174` (or something like that)
- enjoy bokskap database dashboard at `http://localhost:54323` (or something like that)
