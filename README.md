# Driftway

Driftway is a full-stack vehicle rental service for discovering, booking, and managing cars, scooters, and vans across Sri Lanka. The product combines a customer booking experience with fleet operations, user management, authentication, currency conversion, and printable booking receipts.

## Stack

- Next.js 16.3.5, React 19, TypeScript
- Spring Boot 3.4.1, Java 17+
- Spring Security with JWT authentication
- PostgreSQL with Spring Data JPA
- Exchange-rate lookup with local fallback rates

## Project Layout

```text
backend/    Spring Boot REST API
frontend/   Next.js App Router client
```

## Prerequisites

- Node.js 18+
- Java 17+
- PostgreSQL 14+
- Git

## Local Setup

### 1. Clone the project

```bash
git clone https://github.com/hirushabhashitha/Vehicle-Rental-Service.git
cd Vehicle-Rental-Service
```

### 2. Create the database

Create a PostgreSQL database named `vehicle_rental_db` and make sure the credentials match `backend/src/main/resources/application.yml`.

```sql
CREATE DATABASE vehicle_rental_db;
```

The default local configuration expects:

```text
host: localhost
port: 5432
database: vehicle_rental_db
username: postgres
password: admin
```

Change the password in `application.yml` or provide an environment-specific configuration before starting the API.

### 3. Start the backend

Windows PowerShell:

```powershell
Set-Location backend
.\mvnw.cmd spring-boot:run
```

macOS/Linux:

```bash
cd backend
./mvnw spring-boot:run
```

The API runs at `http://localhost:8080`.

Swagger UI is available at `http://localhost:8080/swagger-ui.html`.

### 4. Start the frontend

Open a second terminal:

```powershell
Set-Location frontend
npm install
npm run dev
```

Open `http://localhost:3000`.

The frontend reads the API URL from `frontend/.env.local` or `frontend/.env.example`:

```text
NEXT_PUBLIC_API_URL=http://localhost:8080/api/v1
```

## Main Workflows

- Browse and filter available vehicles by type, date, and pickup location.
- Register and authenticate customers with JWT-backed sessions.
- Create, review, and cancel bookings.
- Manage customer profiles and driving details.
- Switch displayed prices between supported currencies.
- Administer fleet inventory, bookings, users, roles, and account status.
- Print booking receipts and invoices.

## API Overview

The REST API is rooted at `/api/v1`.

| Area | Endpoints |
| --- | --- |
| Authentication | `/auth/register`, `/auth/login` |
| Vehicles | `/vehicles`, `/vehicles/{id}` |
| Bookings | `/bookings`, `/bookings/{id}/status` |
| Profile | `/users/me`, `/users/me/password` |
| Administration | `/admin/users`, `/admin/users/{id}/role`, `/admin/users/{id}/status` |

## Useful Commands

```powershell
# Frontend checks
Set-Location frontend
npm run lint
npm run build

# Backend build
Set-Location ..\backend
.\mvnw.cmd clean package
```

## Configuration Notes

- PostgreSQL must be running before the backend can serve booking and authentication requests.
- CORS is configured for `http://localhost:3000` by default.
- Never commit production database passwords, JWT secrets, or private deployment credentials.
- The repository is connected to `https://github.com/hirushabhashitha/Vehicle-Rental-Service.git`.

## License

This project is maintained as an academic and portfolio application. Add a project license before distributing it publicly.
