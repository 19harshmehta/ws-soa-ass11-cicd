# Lab 11 — Mini CI/CD Pipeline (Wasteless Backend)

This project implements the **weekly assignment** from Lab 11:
- Simple Node.js API with `/status` and `/metrics`
- Dockerized backend
- GitHub Actions workflow for CI (tests) and optional Docker push
- Prometheus + Grafana monitoring via docker-compose

## Contents
- `backend/` - Node.js Express app
- `docker-compose.yml` - run the backend alone
- `docker-compose.monitoring.yml` - run backend + prometheus + grafana
- `prometheus/` - Prometheus configuration
- `grafana/` - Grafana provisioning and a basic dashboard
- `.github/workflows/ci-cd.yml` - GitHub Actions pipeline (test + build + optional push)

## Quick local run (no Kubernetes required)
1. Install Docker & Docker Compose.
2. Build and run the backend only:
   ```bash
   docker-compose up --build
   ```
   Visit: http://localhost:4000/status

3. Run full monitoring stack:
   ```bash
   docker-compose -f docker-compose.monitoring.yml up --build
   ```
   - Backend: http://localhost:4000/status
   - Prometheus: http://localhost:9090
   - Grafana: http://localhost:3000 (admin/admin)

4. Run tests locally (requires Node.js):
   ```bash
   cd backend
   npm ci
   npm test
   ```

## GitHub Actions
- The workflow runs tests on push & PR.
- If `DOCKER_USERNAME` and `DOCKER_PASSWORD` secrets are configured it will login and push the built image to Docker Hub.

## Deliverables for assignment
1. Screenshot of successful pipeline run — run the workflow after pushing to GitHub.
2. Screenshot of Grafana dashboard showing metrics.
3. Short report — use this README and add observations.

## Notes and troubleshooting
- If Grafana shows no data, ensure Prometheus can scrape the backend:
  - `prometheus.yml` scrapes `backend:4000` (works in compose) and `host.docker.internal:4000` (for Linux/Mac with Docker Desktop).
- Prometheus scrapes every 5s by default in this project.

Enjoy! — Generated for Harsh Mehta
