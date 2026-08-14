# AI Engineer — RAG / Agentic Workflows

**MonoEdge · Pune (with occasional travel to customer sites)**
**Full-time · Early-career / experienced · strong graduates welcome**

---

## About MonoEdge

MonoEdge builds an advanced intelligence layer for the Indian mid-market
manufacturing sector. Our software behaves like an always-on analyst rather than
another dashboard: it reads what is happening across a plant, connects
production data to quality, energy, and cost, and tells the people running the
floor what is going wrong and why — in English, Hindi, and Marathi.

We are a technically-driven, bootstrapped company defining a new category in
industrial optimization. The Business Brain is our core product — the decision
layer that turns plant data into answers a plant owner can act on.

## About the role

A plant owner does not want to write a query. They want to ask, in plain
language, *"why did rejects jump on Line 2 last night?"* — and get an answer that
is correct, grounded in their own PLC, ERP, and lab data, and honest about what
it does not know. That is a language-model problem sitting on top of hard
industrial data, and it is the problem you will own.

As an AI Engineer, you will build the Retrieval-Augmented Generation (RAG) and
agentic workflows that power the Business Brain: pipelines that retrieve from
vector stores and structured PLC / ERP / lab data, agents that plan and call
tools across multiple steps, and the evaluation and guardrail harnesses that keep
the answers trustworthy. In a factory a confidently wrong answer is worse than no
answer, so rigor about grounding and evaluation is the whole job.

## What you will do

- **Design RAG retrieval pipelines** — chunking, embeddings, hybrid (semantic +
  keyword) retrieval, and re-ranking over a mix of documents, time-series
  summaries, and structured PLC / ERP / lab tables, so the model answers from the
  customer's real data rather than its training set.
- **Build agentic workflows** — multi-step tool-calling agents that plan,
  retrieve, query the data platform, run a calculation, and compose an answer,
  with sensible stopping, retries, and fallbacks when a step fails.
- **Own embeddings and vector databases** — choose and tune embedding models,
  manage a vector store (pgvector, Qdrant, or similar), and keep indexes fresh as
  new plant data lands.
- **Turn structured data into tools** — expose the data platform's tables and
  metrics to agents as well-typed, well-described tools, and design the prompts
  and schemas that make tool-use reliable.
- **Build evaluation, guardrails, and observability** — golden-set and
  LLM-as-judge eval harnesses, grounding / hallucination checks, prompt and model
  regression tests in CI, and tracing of every retrieval, tool call, and token so
  you can see why an answer came out the way it did.
- **Integrate and compare LLMs** — wire models in behind a clean interface, run
  A/Bs on prompts and models, and reason about the cost, latency, and accuracy
  trade-offs of each choice.
- **Work with the data and backend teams** — the retrieval quality is only as
  good as the tables underneath it, so you will partner closely on schema, freshness,
  and the service boundaries the agents call through.

## Who should apply

We are looking for an engineer who is genuinely excited about LLMs as a
practical tool, not just a demo — someone who has built something that works and
can explain why it works. The exact degree matters less than what you have
shipped.

You are a strong fit if you have:

- **Strong Python**, and comfort building real services — not just notebooks. You
  can structure a codebase, write tests, and reason about latency and cost.
- **Hands-on LLM experience**: you have built at least one RAG or agent /
  tool-calling system, and you understand embeddings, chunking, retrieval, and
  the difference between a prompt that demos well and one that holds up.
- A feel for **evaluation**: you know that "it looked right in three examples" is
  not a metric, and you have an opinion on how to measure whether a model output
  is actually correct and grounded.
- **Healthy scepticism about model output** — you assume the model will
  hallucinate and you design retrieval, guardrails, and checks around that
  assumption.
- Something to show: a RAG app, an agent, an eval harness, a fine-tune — a
  project you can walk us through and take responsibility for.

**Nice to have** (none required): vector databases (pgvector, Qdrant, FAISS,
Weaviate); orchestration frameworks (LangChain, LlamaIndex, or your own);
LLM observability / eval tooling (LangSmith, Ragas, or similar); prompt and
model regression testing; exposure to time-series or industrial data; SQL and
comfort querying real databases; Git and the command line.

> **A note on marks:** we do not screen on CGPA alone. A RAG or agent system you
> can explain — including how you evaluated it and where it failed — counts for
> more than a decimal point.

## What you will learn and why join

- Ownership of the AI layer of a real product early, working directly with the
  **Founder and senior team** — not a research sandbox, but LLMs shipping to real
  factory floors.
- How to make language models trustworthy on genuinely hard, undocumented
  industrial data, where a wrong answer has a rupee cost.
- A small, bootstrapped team where what you build reaches a real customer
  quickly.

## Details

| | |
| --- | --- |
| **Location** | Pune, with occasional travel to customer sites |
| **Type** | Full-time |
| **Reports to** | Founder and senior team |
| **Eligibility** | Any engineering discipline or related field; demonstrable LLM / RAG / agent project work |
| **Compensation** | ₹6–12 LPA, based on skills and interview |

## Selection process

1. **Apply online** through the role page (link below) — about ten minutes: your
   details, a few short screening questions, and one written question we read
   properly.
2. **Screening call** with the team.
3. **Technical discussion** — we will walk through a RAG / agent system you have
   built, talk through retrieval and evaluation choices, and work through a real
   grounding problem. We are interested in how you think, not trick questions.
4. **Conversation with the Founder.**

## How to apply

Apply online: **https://careers.monoedge.in/ai-engineer-rag-3e7b91/**

Or email your CV — and a link to your work — to **krishna@monoedge.in** with the
role in the subject line.

**Placement cells and college partners:** you are welcome to share the link
above directly with students. For campus drives or to schedule a session,
please reach out to us at the contact below.

---

*MonoEdge · krishna@monoedge.in · 9730922589 · Pune*
