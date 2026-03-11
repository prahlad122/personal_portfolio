import React, { useState } from "react";
import Button from "./Button";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://formspree.io/f/xgonadyw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  const inputClass =
    "w-full px-4 py-3 bg-transparent border border-muted text-textmain " +
    "placeholder:text-textdim/60 backdrop-blur-sm " +
    "focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/40 " +
    "transition";

  const labelClass = "block text-xs tracking-widest text-textdim mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <input type="text" name="_gotcha" className="hidden" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className={labelClass}>
            NAME
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            EMAIL
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>
          SUBJECT
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          MESSAGE
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className={`${inputClass} resize-none`}
        />
      </div>

      <div>
        <Button variant="secondary" size="lg" className="w-full">
          {status === "loading" ? "SENDING..." : "SEND "}
        </Button>
      </div>

      {status === "success" && (
        <div className="p-4 border border-accent text-accent">
          MESSAGE SENT SUCCESSFULLY — I'LL REPLY SOON.
        </div>
      )}

      {status === "error" && (
        <div className="p-4 border border-red-500 text-red-500">
          FAILED TO SEND — TRY AGAIN.
        </div>
      )}
    </form>
  );
};

export default ContactForm;
