import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-28 relative z-10 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/header.jpg')" }}
    >
      
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] z-0"></div>


      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="particle"></div>
        <div className="particle delay-1"></div>
        <div className="particle delay-2"></div>
        <div className="particle delay-3"></div>
      </div>

      <div className="relative z-20 max-w-6xl mx-auto">

        {/* TITLE */}
        <h2
          className="
            text-3xl md:text-5xl font-extrabold mb-12 text-center
            text-white tracking-wider uppercase
            drop-shadow-[0_0_15px_rgba(168,85,247,0.45)]
          "
        >
          ABOUT ME
        </h2>

        
<div className="max-w-5xl mx-auto text-lg text-gray-200 leading-relaxed mb-16 text-center">
  <p className="mb-4">
    I’m a Data & AI Engineer specializing in designing large-scale, resilient data
    platforms across Telecom, Retail, and Pharma domains. I transform raw,
    high-volume event data into analytics-ready, business-critical datasets.
  </p>

  <p className="mb-4">
    I build end-to-end pipelines using Spark, PySpark, Apache Beam, Dataproc,
    and Dataflow—focusing on cleansing, enrichment, validation, modeling, and
    workflow automation that ensures data reliability at enterprise scale.
  </p>

  <p className="mb-4">
    With strong multi-cloud experience across GCP, AWS, and Azure, I leverage
    BigQuery, Cloud Functions, Lambda, Glue, and Synapse to architect
    cloud-native systems capable of processing billions of records efficiently.
  </p>

  <p className="mb-4">
    I also build Generative AI and Agentic AI applications—including LLM-powered
    chatbots, RAG pipelines, embedding systems, and semantic search
    architectures. I enjoy applying ML models and analytical techniques to
    uncover insights and build intelligent automation.
  </p>

  <p className="font-semibold text-gray-100">
    Passionate about distributed systems, AI engineering, and high-impact
    data workflows — I deliver scalable solutions that solve real business challenges.
  </p>
  <p
  className="
    mt-8 text-gray-100 text-lg font-semibold tracking-wide
    px-5 py-2 rounded-xl
    bg-white/10 backdrop-blur-md
    border border-white/20
    shadow-md shadow-purple-500/20
    inline-block
  "
>
  📍 Irving, TX, USA — Open to Relocation
</p>



</div>


        {/* TECHNICAL EXPERTISE */}
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-100">
          TECHNICAL EXPERTISE
        </h3>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: "Data Engineering & Pipelines",
              items: [
                "ETL / ELT Pipelines",
                "Data Modeling & Enrichment",
                "Batch & Real-Time Processing",
                "Event-Driven Architecture",
                "Automation Frameworks"
              ]
            },
            {
              title: "Cloud Platforms & Services",
              items: [
                "GCP: BigQuery, Dataflow, Dataproc, Cloud Functions, Pub/Sub, Vertex AI",
                "AWS: Glue, Redshift, Lambda, S3, EMR, Kinesis",
                "Azure: Synapse, Data Factory, Databricks, Event Hub"
              ]
            },
            {
              title: "Distributed Processing & Programming",
              items: [
                "Apache Spark",
                "PySpark / Python",
                "Apache Beam (Batch + Streaming)",
                "Advanced SQL",
                "Kafka Streaming",
                "Workflow Orchestration (Airflow / Composer)"
              ]
            },
            {
              title: "AI, ML & Optimization",
              items: [
                "GenAI & Agentic AI",
                "RAG Pipelines & Vector Search",
                "Embeddings (Vertex AI Text-Embedding-004)",
                "LLM Integration & Orchestration",
                "ML Models for Insights",
                "Performance & Cost Optimization"
              ]
            }
            
          ].map((box, index) => (
            <div
              key={index}
              className="
                tilt-card p-6 rounded-2xl
                bg-white/5 border border-white/10
                shadow-xl transition-all duration-300 group
              "
            >
              <div className="shine"></div>

              <h4 className="text-xl font-semibold mb-4 text-white">
                {box.title}
              </h4>

              <div className="flex flex-wrap gap-2">
                {box.items.map((t) => (
                  <span
                    key={t}
                    className="
                      px-3 py-1 text-xs font-medium rounded-full
                      bg-white/10 text-gray-200 border border-white/20
                      hover:bg-white/20 hover:scale-110
                      transition-all duration-300 cursor-default
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
