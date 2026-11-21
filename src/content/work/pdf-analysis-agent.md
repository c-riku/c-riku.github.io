---
title: Copilot Studio agent for PDF analysis
summary: An agent where users upload a PDF and ask for an analysis. It passes the document to a custom MCP server and can add its own analysis on top of the results.
area: ai
context: Industrial company
period: "2025"
tools: [Copilot Studio, MCP]
order: 5
---

## The challenge

Users needed a simple way to analyse PDF documents with specialised logic, without leaving a familiar chat interface.

## What I built

- **Copilot Studio agent** where users upload a PDF and describe the analysis they need.
- **Custom MCP integration.** The agent sends the document and the request to a custom MCP server and shows the analysis it returns.
- **Layered analysis.** The agent can also run its own analysis on top of the returned results.

## Outcome

Specialised document analysis is available through a chat interface, connected to custom back-end logic via MCP.
