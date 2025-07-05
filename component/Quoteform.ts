"use client";

import { useState } from "react";

export default function QuoteForm({ onSearch }: { onSearch: (topic: string) => void }) {
  const [topic, setTopic] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(topic.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
      <label htmlFor="topic" className="text-lg font-semibold">
        Enter a topic
      </label>
      <input
        id="topic"
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="border rounded px-3 py-2 focus:outline-none"
        placeholder="e.g. motivation"
        required
      />
      <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700">
        Get Quotes
      </button>
    </form>
  );
}
