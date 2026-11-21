---
title: Google Cloud data platform and Power BI migration
summary: A layered data warehouse in Google Cloud with a Python ingestion framework, infrastructure as code and CI/CD, plus a move of reporting from Looker to Power BI.
area: data
context: Fitness business
period: 2026 – present
tools: [Python, BigQuery, Google Cloud Run, Terraform, GitHub Actions, Power BI, DAX, PostgreSQL, Docker]
order: 2
---

## The challenge

The business needed its data in one place, loaded automatically, and reporting that answered questions about customers, course progression and capacity. Existing reports ran on Looker.

## What I built

- **Layered warehouse.** Raw, staging, intermediate, mart and audit layers in BigQuery.
- **Python ingestion framework** with rolling-window, full-backfill and history-preserving refresh strategies.
- **Serverless deployment.** The ETL runs as a Cloud Run Job, with separate development and production environments managed in Terraform.
- **CI/CD and operations.** GitHub Actions pipelines, weekly infrastructure drift detection, and identity-aware cloud access using Workload Identity Federation, dedicated service accounts, Secret Manager and IAP-protected documentation.
- **Analytics marts** for customer churn, course progression and capacity, with data-quality audit views.
- **Looker → Power BI.** Reporting moved to Power BI using DAX-driven models over a BigQuery publish layer.

## Outcome

The business data is brought together automatically, with quality checks built in, and reporting runs on Power BI.
