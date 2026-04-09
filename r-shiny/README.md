# R Shiny — data viz

This folder is for the **R Shiny** app (e.g. `athleteApp.R`) used in an **iframe** from the React frontend.

## How it connects (no direct DB access from R)

1. Django stores athlete tests in SQLite (`core_athletetest`).
2. React loads data via the REST API (`/api/...`).
3. React builds the Shiny **URL with query parameters** (user + metrics).
4. Shiny reads **`parseQueryString(session$clientData$url_search)`** and renders charts.

Use **fake JSON** locally while developing charts; wire the final viz to the **live query params** for integration.

## Run (example)

From this directory, after dependencies are installed:

```r
shiny::runApp(host = "0.0.0.0", port = 6746)
```

Use the same port in the React `iframe` `src`. If your team uses another port, update Django **`CSRF_TRUSTED_ORIGINS` / CORS** in `capstone_v2/settings.py` to match.

Add `renv` / `DESCRIPTION` here if the team standardizes R dependencies.
