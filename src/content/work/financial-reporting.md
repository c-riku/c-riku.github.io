---
title: Group financial reporting and finance data warehouse
summary: Main developer for a group's Power BI reporting, including balance sheets and P&L reconciliation, plus support for a dbt-based finance data pipeline in Snowflake.
area: bi
context: Group of companies
period: 2021 – present
tools: [Power BI, DAX, Microsoft Fabric, Azure DevOps, dbt, Snowflake, Terraform, GitLab]
order: 4
---

## The challenge

The group's finance reporting relied on Excel-based reports and tools, and needed to reconcile figures between systems while source systems were being migrated.

## What I built

- **Main developer** for the group's reporting and on-demand BI support across group projects.
- **Financial Power BI reports**, including balance sheets and P&L reconciliation between systems.
- **Excel → Power BI.** Migrated Excel-based reports and tools to Power BI, preserving data integrity during historical source migrations.
- **Source control for Power BI.** Introduced Git-based development across test and production in Azure DevOps.
- **Finance data warehouse.** Maintain and develop a dbt-based Workday ETL pipeline for company-wide financial data in Snowflake, with automated data-quality tests, incremental loading and reporting-ready models. Supported an integration migration, focusing on validation and communication between finance stakeholders and data engineers.

## Outcome

Financial reporting runs in Power BI with version-controlled releases, and finance data arrives through a tested, automated pipeline.
