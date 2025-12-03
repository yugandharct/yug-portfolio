export const projects = [
  {
    id: 1,
    title: "Bill Inquiry Bot – Generative AI (RAG Architecture)",
    description:
      "Designed and deployed a production-grade Generative AI Bill Inquiry Bot powered by Retrieval-Augmented Generation (RAG). Implemented vector embeddings, semantic search, metadata filtering, and structured LLM response pipelines using Vertex AI and Matching Engine.",
    technologies: [
      "Vertex AI",
      "RAG",
      "Embeddings",
      "Vector Search",
      "BigQuery",
      "Cloud Run",
      "LLMs"
    ],
    github: "https://github.com/yugandharct/BillInquiryBot",
    image: "/project/Billbot.png",
    status: "wip",
    featured: true
  },

  {
    id: 2,
    title: "Retail Sales Batch Data Platform – PySpark + BigQuery + Dataproc",
    description:
      "Developed a scalable batch-processing data platform for retail analytics. Built PySpark ETL pipelines on Dataproc, applied business transformations, optimized SQL queries, and loaded curated datasets into BigQuery for dashboarding and insights.",
    technologies: [
      "PySpark",
      "BigQuery",
      "Dataproc",
      "SQL",
      "ETL Pipelines",
      "Data Modeling",
      "Looker"
    ],
    github: "https://github.com/yugandharct/RetailSalesProject",
    image: "/project/RetailSalesBatch.png",
    featured: true
  },

  {
    id: 3,
    title: "Real-Time Streaming Data Pipeline – Kafka + PySpark Streaming",
    description:
      "Implemented a real-time order-processing streaming pipeline using Kafka/PubSub, Dataflow, Apache Beam and PySpark. Enabled low-latency ingestion, streaming transformations, event validation, and near-real-time analytics workflows.",
    technologies: [
      "Kafka/PubSub",
      "DataFlow",
      "DataProc",
      "Apache Beam",
      "PySpark",
      "Real-time Streaming ETL",
      "Event Processing",
      "BigQuery"
    ],
    github: "https://github.com/yugandharct/Realtime-RetailOrders",
    image: "/project/Streaming.png",
    featured: true
  },

  {
    id: 4,
    title: "Tableau KPI & Insights Dashboards – Business Analytics Suite",
    description:
      "Designed interactive Tableau dashboards showcasing business KPIs, trend analytics, and performance insights. Built aggregated fact tables, dimensional models, and metric frameworks to support executive reporting. Delivered insights including YoY growth, churn indicators, revenue attribution, and operational efficiency scoring.",
    technologies: [
      "Tableau",
      "Dashboarding",
      "KPI Design",
      "Data Modeling",
      "SQL",
      "Business Analytics",
      "Forecasting"
    ],
    demo: "https://public.tableau.com/app/profile/yugandhar.thottempudi4168/vizzes",
    image: "/project/Tableau.jpg",
    featured: true
  }
];
