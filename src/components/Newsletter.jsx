import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email");
      return;
    }
    
    const subs = JSON.parse(localStorage.getItem("newsletter") || "[]");
    if (!subs.includes(email)) {
      subs.push(email);
      localStorage.setItem("newsletter", JSON.stringify(subs));
      setMessage("Subscribed! Check your email soon.");
      setEmail("");
    } else {
      setMessage("You are already subscribed.");
    }
  };

  return (
    <section className="mt-10 bg-gradient-to-br from-[#0a0a0a] via-[#1b1b1b] to-[#2d2d2d] p-6 rounded">
      <h3 className="text-xl font-bold">Join Our Newsletter</h3>
      <p className="text-gray-400">Get updates on new releases, sales, and indie spotlights.</p>
      <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
        <input value={email} onChange={e => setEmail(e.target.value)} className="input flex-1" placeholder="Your email" />
        <button className="btn btn-primary">Subscribe</button>
      </form>
      {message && <p className="mt-2 text-sm">{message}</p>}
    </section>
  );
};

export default Newsletter;