---
title: Automating a support team's daily operations
summary: Power Automate flows that run a support team's duty day in Microsoft Teams, from morning briefings and handovers to bot monitoring, AI ticket summaries and monthly invoicing.
area: ai
context: Internal support team
period: "2026"
tools: [Power Automate, Copilot Studio, AI prompts, Teams, SharePoint, Power BI, Freshdesk]
order: 6
---

## The challenge

Running the support duty involved many manual routines: checking the ticket queue, passing on handovers between shifts, keeping an eye on customer bots, and collecting billable work at the end of the month.

## What I built

- **Shift information.** A morning briefing in Teams shows the open ticket queue and the previous shift's handover. Reminders follow up on unacknowledged shifts, an end-of-day summary collects handover notes, and calendar invitations follow roster changes.
- **Bot monitoring.** A flow checks customer bots every 15 minutes. When one runs late or gets stuck in the queue, it alerts the team in Teams and opens a support ticket.
- **AI ticket analysis.** A flow uses an AI prompt to analyse the tickets the team last worked on and posts a short, readable overview in Teams, so the team doesn't have to open each ticket.
- **Monthly invoicing.** A flow collects billable support services per customer and project and emails a summary.
- **Safe releases.** Source control and repeatable deployment for the Power Platform solutions, so changes can be tested and released safely.

## Outcome

The team's routines run automatically in Teams, problems with customer bots are caught early, and changes to the automations go through a repeatable release process.
