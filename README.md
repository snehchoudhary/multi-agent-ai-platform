# Multi-Agent AI Research & Document Intelligence Platform

A production-oriented AI platform that automates research and document-intelligence workflows using multiple specialized agents. Instead of relying on a single LLM call, it uses **LangGraph** to orchestrate agents that retrieve, analyze, and synthesize information from user-uploaded documents through a **RAG pipeline** backed by **Qdrant**.

**Live Demo:** [APP-LINK](https://multi-agent-ai-platform-pb2a.onrender.com/) | **Tech:** React, Node.js, LangGraph, Qdrant, Redis, Docker, AWS

## Features

- **Multi-agent workflows:** specialized agents handle research, retrieval, document analysis, and response generation, coordinated as a LangGraph execution graph with managed state
- **RAG pipeline:** documents are processed, chunked, embedded, and stored in Qdrant, and relevant context is retrieved before each answer so responses are grounded in your documents
- **Tool calling and reasoning:** agents can call tools and reason over retrieved context
- **Streaming responses:** answers stream to the UI as they are generated
- **Conversation memory:** Redis-backed sessions and chat memory
- **Authentication:** JWT-based registration, login, and protected routes
- **Document upload and chat:** upload documents and ask questions through a React interface
- **Containerized deployment:** services run in Docker containers on AWS

## Architecture

```text
React + Redux Toolkit (Client)
            │
            ▼
      API Gateway / Express
            │
   ┌────────┼─────────────┐
   ▼        ▼             ▼
 Auth     Chat       AI Agent Service
Service  Service   (LangChain + LangGraph)
   │        │             │
   ▼        ▼             ├──▶ Qdrant (vector search)
MongoDB   Redis           └──▶ LLM provider
```

*Adjust this diagram to match how your services are actually split and how they communicate.*

### RAG Flow

```text
Upload document → Parse text → Chunk → Generate embeddings
→ Store in Qdrant → User asks a question → Semantic retrieval
→ Agents reason over retrieved context → Streamed, grounded answer
```

### Agent Workflow

```text
User query → LangGraph router → Specialized agents
(retrieval / research / analysis / synthesis)
→ Shared state → Final response
```

*List your actual agents and what each one does here.*

## Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, Redux Toolkit |
| Backend | Node.js, Express.js |
| AI / Agents | LangChain, LangGraph, RAG |
| Databases | MongoDB, Qdrant (vector DB), Redis |
| Auth & Security | JWT |
| DevOps | Docker, AWS |

## Project Structure

```text
.
├── client/              # React frontend
├── services/
│   ├── auth-service/    # authentication
│   ├── chat-service/    # chat and sessions
│   └── agent-service/   # LangGraph agents and RAG pipeline
├── docker-compose.yml
└── README.md
```

*Change this tree to match your actual repository.*

## Getting Started

**Prerequisites:** Node.js 18+, Docker, a MongoDB connection string, a Qdrant instance (local or cloud), Redis, and an LLM API key.

```bash
git clone https://github.com/snehchoudhary/YOUR-REPO.git
cd YOUR-REPO
```

Create a `.env` file in each service (or the project root):

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
REDIS_URL=your_redis_url
QDRANT_URL=your_qdrant_url
QDRANT_API_KEY=your_qdrant_api_key
LLM_API_KEY=your_llm_api_key
```

Run with Docker:

```bash
docker-compose up --build
```

Or run each service locally:

```bash
cd services/auth-service && npm install && npm run dev
```

The app runs at `http://localhost:3000`.

## API Overview

Protected routes need this header: `Authorization: Bearer <your_token>`

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | `/api/auth/register` | Register a new user | No |
| POST | `/api/auth/login` | Log in and receive a JWT | No |
| POST | `/api/documents/upload` | Upload a document for ingestion | Yes |
| POST | `/api/chat` | Send a query and stream the agent response | Yes |
| ... | ... | *Add your real endpoints here* | ... |

## Screenshots

*Add 2 or 3 screenshots or a short GIF of the upload and chat flow.*

## Future Improvements

- Automated tests for agent workflows and retrieval quality
- Evaluation metrics for RAG answer quality
- Support for more document types
- Rate limiting and usage monitoring
- CI/CD pipeline for AWS deployment

## Author

**Sneha Choudhary** · [GitHub](https://github.com/snehchoudhary) · [LinkedIn](https://www.linkedin.com/in/sneha-choudhary-58a5552a8/)
