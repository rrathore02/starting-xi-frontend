# Starting XI — Frontend

NCAA soccer division benchmarking and athlete performance (Vite + React).

## Run locally

Node 18+ and npm. From this folder:

```sh
npm i
npm run dev
```

Dev server defaults to **port 8080** and proxies `/api` to Django on **8000** (see `vite.config.ts`).

## Structure

```
src/
├── components/     # layout, landing, shadcn ui
├── constants/      # copy, athlete test field maps
├── contexts/       # auth (session API)
├── hooks/
├── lib/            # api.ts (CSRF + session fetch), utils
├── pages/          # Index, Profile, StarPlayer, Recruitments, NotFound
└── test/
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint |
| `npm run test` | Vitest |

## API

Set `VITE_API_BASE_URL` only if you are **not** using the Vite proxy (e.g. calling Django directly).
