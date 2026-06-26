# SPAIGI Web

Vue 3 and Vite frontend for the SPAIGI website.

## Frontend

```bash
npm install
npm run dev
npm run build
```

During local development, Vite proxies `/api/*` to the Spring Boot backend at
`http://localhost:8080`.

## Backend

The contact backend is separate from this frontend repo and lives next to it:

```bash
cd ../spaigi-backend
mvn spring-boot:run
```

The contact form posts to `/api/contact`; Nginx or Docker Compose must proxy `/api/` to the
backend service in production.

Example Nginx block:

```nginx
location /api/ {
  proxy_pass http://127.0.0.1:8080/api/;
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
}
```
