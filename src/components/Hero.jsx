import React, { useEffect, useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const imgRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      if (!imgRef.current || !glowRef.current) return;

      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 18;
      const y = (clientY / window.innerHeight - 0.5) * 18;

      imgRef.current.style.transform = `translate(${x}px, ${y}px)`;
      glowRef.current.style.transform = `translate(${x * 1.1}px, ${y * 1.1}px) scale(1.05)`;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative pt-24 pb-24 md:pt-32 md:pb-32 overflow-hidden"  
      style={{
        backgroundImage: `url('/header.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] z-0" />

      <div className="container-max relative z-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT — IMAGE */}
        <div className="relative flex justify-center md:justify-start z-20 mt-[-20px]"> 
          <div
            ref={glowRef}
            className="absolute w-[32rem] h-[32rem] bg-gradient-to-br from-purple-600/40 to-blue-600/40 
            blur-[140px] rounded-full animate-softGlow pointer-events-none"
          />

          <img
            ref={imgRef}
            src="/images/yugandhar.png"
            alt="Yugandhar"
            className="w-[22rem] h-[22rem] md:w-[25.5rem] md:h-[25.5rem] rounded-full 
            object-cover shadow-2xl animate-floating transition-all duration-500
            hover:shadow-purple-500/50 mt-4 ml-4 mask-soft-edge relative z-30"  
          />
        </div>

        
        <div className="text-left max-w-2xl md:ml-[-90px] relative z-20 mt-[-24px]"> 

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
           
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text drop-shadow-xl">
            Yugandhar .T
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-300">
            GenAI • Data Engineering • Cloud Platforms
          </h2>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-6 mb-8"> 
            <a href="https://github.com/yugandharct" className="nav-icon text-white" target="_blank" rel="noreferrer">
              <Github size={30} />
            </a>
            <a href="https://linkedin.com/in/yugandhar-c-55071a202" className="nav-icon text-white" target="_blank" rel="noreferrer">
              <Linkedin size={30} />
            </a>
            <a href="mailto:yugandhar22048688@gmail.com" className="nav-icon text-white">
              <Mail size={30} />
            </a>
          </div>

          
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl p-8 mb-10 w-[110%]">  
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
            Building scalable batch/streaming pipelines, RAG systems, MCP agents, semantic search, and cloud-native AI solutions using GCP, AWS, Azure, Spark, Beam, and Kafka.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Python Development",
                "Advanced SQL",
                "Data Engineering",
                "Distributed Data Processing",
                "Cloud-Native Pipelines",
                "Real-Time Streaming",
                "AI Pipeline Engineering",
                "LLM Systems",
                "RAG & Vector Search",
                "Data Warehousing",
                "Workflow Automation"
              ].map((t) => (
                <span
  key={t}
  className="
    px-4 py-1.5 text-sm font-medium rounded-full
    bg-white/10 border border-white/20 text-gray-100 backdrop-blur-sm
    transition-all duration-300
    hover:scale-110
    hover:bg-white/20
    hover:shadow-md
    hover:shadow-purple-400/30
    cursor-default
  "
>
  {t}
</span>

              ))}
            </div>
          </div>

          {/* CTA BUTTON */}
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-purple-600 to-blue-600 
            text-white font-semibold rounded-lg shadow-lg hover:scale-110 transition-all"
          >
            Scroll to dive deeper <ArrowDown size={18} />
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;
