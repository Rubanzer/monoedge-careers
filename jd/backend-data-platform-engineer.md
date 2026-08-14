# Backend / Data Platform Engineer — Observability & Test Automation

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
industrial optimization.

## About the role

Everything the product shows a customer — every alert, report, and answer — runs
through backend services and a data platform that has to keep working while
factory data pours in at all hours. When a source goes quiet, a pipeline stalls,
or a service slows down, we need to know before the customer does. And because
the platform carries real production data, we cannot ship changes on hope — we
need automated tests that exercise the system continuously and catch a regression
before it reaches a plant.

As a Backend / Data Platform Engineer, you will build the services and data
platform behind the product **and own the two things that keep it trustworthy:
observability and automated testing**. You will make the system legible — metrics,
logs, traces, alerts — and make it safe to change — test suites and CI
automation that continuously prove the data flows still work. It is foundational,
sometimes unglamorous, and it is what lets everything above it move fast without
breaking.

## What you will do

- **Build backend services and APIs** — the services that ingest, process, and
  serve plant data to the product, written to be clean, well-typed, and
  maintainable by a small team.
- **Build and run the data platform** — pipelines and jobs that move data from
  ingestion through processing to the tables the product and the analytics team
  query, designed to recover from failure and to raise an alert when a source
  stops sending.
- **Own the observability stack** — metrics, structured logging, and distributed
  tracing (Prometheus / Grafana / OpenTelemetry, or similar) so that when
  something is slow or wrong, you can see where and why, and the right person is
  paged.
- **Build test automation** — unit, integration, and end-to-end suites, plus
  data-quality and contract tests that continuously exercise the pipelines and
  services with realistic data, so a regression is caught in CI, not in
  production.
- **Wire tests into CI/CD** — make the test suites fast and reliable enough that
  every change runs them, and a red build actually means something.
- **Own reliability of data flows** — define what "healthy" looks like for each
  pipeline, instrument it, set the alerts, and close the loop when something
  drifts or breaks.
- **Partner with the data, AI, and frontend teams** — the services you build are
  the boundary they all depend on, so you will shape clean, well-documented
  contracts.

## Who should apply

We are looking for an engineer who takes quiet pride in systems that stay up and
changes that do not break things — someone who reaches for a test and a metric by
instinct. The exact degree matters less than what you have built and how you
reason about reliability.

You are a strong fit if you have:

- **Strong backend fundamentals** in Python (or a comparable language): you can
  design and build an API or a service, model data sensibly, and write code a
  small team can maintain.
- Solid **SQL and data sense** — you can design a schema, reason about a join,
  and think about how data moves through a system, not just how one query runs.
- A genuine **testing instinct**: you have written real test suites, you know the
  difference between a test that proves something and one that just runs, and you
  have wired tests into CI.
- An **observability mindset**: you care whether a job ran, whether it ran
  correctly, and how you would know if it did not — and you have used or built
  metrics, logs, or traces to answer that.
- A **reliability temperament** — when something breaks, you want a system that
  told you first, and a test that stops it happening again.
- Something to show: a service, a pipeline, a test harness, or a monitoring
  setup you built and can walk us through.

**Nice to have** (none required): experience with an observability stack
(Prometheus, Grafana, OpenTelemetry, ELK, Sentry); CI/CD systems (GitHub Actions
or similar); containers (Docker); message queues or streaming; time-series or
industrial data; test frameworks (pytest, and integration / e2e tooling);
Postgres, a time-series DB, or a warehouse; Linux and the command line.

> **A note on marks:** we do not screen on CGPA alone. A service or pipeline you
> built — with the tests and monitoring that keep it honest — counts for more
> than a decimal point.

## What you will learn and why join

- Ownership of the platform that everything else at MonoEdge runs on, working
  directly with the **Founder and senior engineers**.
- How to build and operate reliable data systems on genuinely hard, real-world
  industrial data — with the observability and testing discipline that makes them
  trustworthy.
- A small, bootstrapped team where the services you build are used almost
  immediately.

## Details

| | |
| --- | --- |
| **Location** | Pune, with occasional travel to customer sites |
| **Type** | Full-time |
| **Reports to** | Founder and senior team |
| **Eligibility** | Any engineering discipline or related field; demonstrable backend / data / testing project work |
| **Compensation** | ₹6–12 LPA, based on skills and interview |

## Selection process

1. **Apply online** through the role page (link below) — about ten minutes: your
   details, a few short screening questions, and one written question we read
   properly.
2. **Screening call** with the team.
3. **Technical discussion** — backend and data design, a real testing or
   reliability problem, and how you would instrument and monitor a service. We
   are interested in how you think, not trick questions.
4. **Conversation with the Founder.**

## How to apply

Apply online: **https://careers.monoedge.in/backend-data-platform-6c2af8/**

Or email your CV to **krishna@monoedge.in** with the role in the subject line.

**Placement cells and college partners:** you are welcome to share the link
above directly with students. For campus drives or to schedule a session,
please reach out to us at the contact below.

---

*MonoEdge · krishna@monoedge.in · 9730922589 · Pune*
