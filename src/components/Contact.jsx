import React, { useState, useEffect } from "react";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Send,
  CheckCircle,
  AlertCircle,
  X
} from "lucide-react";

const Contact = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/mqavozzo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else setSubmitStatus("error");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "yugandhar22048688@gmail.com",
      link: "mailto:yugandhar22048688@gmail.com",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Irving, TX, USA",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/yugandhar-c-55071a202/",
    },
    {
      icon: <Github className="w-5 h-5" />,
      title: "GitHub",
      value: "My repositories",
      link: "https://github.com/yugandharct",
    },
  ];

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-[90]
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* SLIDE-IN PANEL */}
      <div
        className={`
          fixed top-0 right-0 h-full w-full md:w-[45%] lg:w-[35%]
          bg-gradient-to-b from-[#0a0a0f] to-[#0e0b1f] 
          text-white p-10 overflow-y-auto z-[100]
          border-l border-white/10 shadow-2xl
          transform transition-transform duration-500
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full 
          bg-white/10 hover:bg-white/20 backdrop-blur transition"
        >
          <X size={24} />
        </button>

        {/* HEADER */}
        <h2 className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
          Get In Touch
        </h2>
        <p className="text-gray-300 mb-10">
          Looking for a Data Engineer, GenAI Engineer, or Cloud expert?  
          I’d love to collaborate.
        </p>

        {/* GLASS FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/5 backdrop-blur-xl p-6 rounded-2xl 
          border border-white/10 shadow-lg shadow-purple-600/20"
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="glass-input"
          />

          <input
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className="glass-input"
          />

          <input
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="glass-input"
          />

          <textarea
            name="message"
            required
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            className="glass-input resize-none"
          />

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 
            font-semibold shadow-lg shadow-purple-500/30 
            hover:scale-[1.03] transition-all flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending…
              </>
            ) : (
              <>
                <Send size={18} /> Send Message
              </>
            )}
          </button>

          {/* STATUS */}
          {submitStatus === "success" && (
            <p className="text-green-400 flex items-center gap-2">
              <CheckCircle size={18} /> Message sent!
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-red-400 flex items-center gap-2">
              <AlertCircle size={18} /> Failed. Try again.
            </p>
          )}
        </form>

        {/* CONTACT CARDS */}
        <div className="mt-12 space-y-5">
          {contactMethods.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 
              backdrop-blur-xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.03]"
            >
              <div className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg">
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-white">{item.title}</h4>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    className="text-gray-300 hover:text-purple-400 transition"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-300">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EXTRA CSS */}
      <style>{`
        .glass-input {
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          color: white;
          outline: none;
          transition: 0.3s;
        }
        .glass-input::placeholder {
          color: rgba(255,255,255,0.5);
        }
        .glass-input:focus {
          background: rgba(255,255,255,0.12);
          border-color: rgba(168,85,247,0.6);
          box-shadow: 0 0 10px rgba(168,85,247,0.4);
        }
      `}</style>
    </>
  );
};

export default Contact;
