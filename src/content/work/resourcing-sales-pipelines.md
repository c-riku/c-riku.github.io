---
title: Resourcing and sales pipelines into Snowflake
summary: Automated pipelines that bring resourcing data from AgileDay and sales data from HubSpot into Snowflake, feeding Power BI dashboards used in management meetings.
area: data
context: Consultancy
period: 2024 – present
tools: [Python, AWS Lambda, Amazon S3, Snowflake, Terraform, GitHub Actions, Stitch, Microsoft Fabric, Power BI]
order: 3
---

## The challenge

Management wanted up-to-date visibility into resourcing (FTE), the sales pipeline and business performance, but the data lived in separate SaaS tools.

## What I built

- **AgileDay → Snowflake.** An end-to-end pipeline integrating the AgileDay API with Snowflake and Power BI.
- **Serverless ETL** on AWS Lambda and S3 for automated collection, transformation and loading, with incremental and truncate-and-load strategies. Infrastructure is managed in Terraform and deployed with GitHub Actions.
- **HubSpot → Snowflake** using Stitch, with modelling in Microsoft Fabric and SQL.
- **Power BI dashboards** for management meetings covering FTE, the sales pipeline, activities and business-performance KPIs, refined together with stakeholders.

## Outcome

Management meetings run on dashboards with current data on resourcing, sales and KPIs, instead of separate exports from each tool.
