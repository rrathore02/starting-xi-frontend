# Starting XI (monorepo)

Full-stack capstone: **Django REST API**, **React (Vite)**, optional **R Shiny** embedded via iframe (query-string data handoff from React).

## Ports (local dev)

| Service | Port | Notes |
|---------|------|--------|
| Django | **8000** | `python manage.py runserver` |
| React (Vite) | **8080** | `npm run dev` in `Frontend/` |
| R Shiny | **6746** (or **3838**) | Team default in chat: 6746; match `iframe` `src` and CORS/CSRF in Django |

Open the app at **`http://localhost:8080`** so API calls go through the Vite proxy to Django.

## Quick start

### 1. Backend

```powershell
cd capstone-capstone_v2\capstone-capstone_v2
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### 2. Frontend

```powershell
cd Frontend
npm install
npm run dev
```

### 3. R Shiny (optional)

Place the Shiny app under `r-shiny/` (see `r-shiny/README.md`) and run it on the port your `iframe` uses. React should pass athlete metrics via **URL query parameters**; Shiny reads `session$clientData$url_search`.

## Repo layout

- **`Frontend/`** — React app, auth, profile, API client (`src/lib/api.ts`).
- **`capstone-capstone_v2/capstone-capstone_v2/`** — Django project (`core/` models, serializers, views).
- **`r-shiny/`** — R Shiny app (add team files here; tracked when committed).

## Collaborators

Ensure GitHub **write access** is granted before pushing; invite collaborators on the repository settings if needed.
