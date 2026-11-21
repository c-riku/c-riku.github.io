---
title: AI support agent for a customer support team
summary: A Copilot Studio agent in Microsoft Teams that helps support staff investigate and solve tickets, drafting resolutions that a person reviews before anything is saved.
area: ai
context: Internal support team looking after many customer systems
period: "2026"
tools: [Copilot Studio, Power Automate, Teams, SharePoint, Freshdesk, Azure DevOps]
order: 1
---

## The challenge

The support team looks after many customer systems. Investigating a ticket meant searching through earlier conversations, internal documentation and knowledge that was specific to each customer, often across several tools.

## What I built

I designed and built the agent and the automations around it, from the first idea through testing to release.

- **Ticket investigation in Teams.** Staff ask the agent about a ticket. It reads the ticket and its conversation history and searches the team's internal documentation, using only the knowledge that applies to that customer.
- **Drafted resolutions with a person in the loop.** The agent drafts a resolution that the support person reviews, edits and approves before anything is saved.
- **Knowledge that grows.** From the same chat, staff can save a solved case as new knowledge or send a feature request.
- **Cloud flows around the agent.** Power Automate flows run the team's daily routines and work together with the agent.

## Outcome

Ticket investigation, shared knowledge and follow-up now happen in Microsoft Teams, where the team already works. The work was handed over with documentation the team can maintain.
