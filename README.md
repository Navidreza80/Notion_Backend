# Notion\_Backend

A backend service for a Notion-style clone with real-time collaboration features.

## Tech Stack

* **Fastify** – High-performance web framework for Node.js.
* **Prisma** – Type-safe ORM for database management.
* **NeonDB** – Serverless Postgres-compatible database.
* **Socket.io** – Real-time communication between server and clients.

## Features

* Real-time text editing.
* Collaborative whiteboard.
* Persistent data storage with Postgres.
* Optimized API using Fastify.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Navidreza80/Notion_Backend.git
   cd Notion_Backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root folder and add the following:

   ```env
   DATABASE_URL="your_neon_db_connection_string"
   PORT=4000
   ```

4. Run Prisma migrations:

   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

## API Endpoints

| Method   | Endpoint             | Auth   | Description                                        |
| -------- | -------------------- | ------ | -------------------------------------------------- |
| `POST`   | `/api/pages`         | ✅    | Create a new page                                  |
| `GET`    | `/api/pages`         | ✅    | Get all pages of the authenticated user (filtered) |
| `GET`    | `/api/all-pages`     | ✅    | Get all pages (no filtering)                       |
| `GET`    | `/api/pages/:id`     | ✅    | Get a page by its ID                               |
| `GET`    | `/api/sub-pages/:id` | ✅    | Get all sub-pages of a given parent page           |
| `PUT`    | `/api/pages/:id`     | ✅    | Update a page by its ID                            |
| `DELETE` | `/api/pages/:id`     | ✅    | Delete a page by its ID                            |

| Method   | Endpoint              | Auth  | Description                                     |
| -------- | --------------------- | ------ | ---------------------------------------------- |
| `POST`   | `/api/workspaces`     | ✅    | Create a new workspace                         |
| `GET`    | `/api/workspaces/:id` | ✅    | Get a workspace by ID                          |
| `PUT`    | `/api/workspaces/:id` | ✅    | Update a workspace (only if creatorId matches) |
| `DELETE` | `/api/workspaces/:id` | ✅    | Delete a workspace (only if creatorId matches) |


## Real-time Events (Socket.io)

* `join_page` – Join a page room.
* `update_content` – Update page content in real-time.
* `draw_whiteboard` – Sync whiteboard changes.

## Scripts

* `npm run dev` – Start development server with hot-reload.
* `npm run build` – Build the project for production.
* `npm start` – Start production server.

## License

This project is licensed under the MIT License.
