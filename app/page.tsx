// app/page.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const quotesData = {
  success: [
    "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "Don't watch the clock; do what it does. Keep going.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
  ],
  motivation: [
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
  ],
};

export default function Home() {
  const [topic, setTopic] = useState("");
  const [quotes, setQuotes] = useState<string[]>([]);

  const handleGenerate = () => {
    const selectedQuotes = quotesData[topic.toLowerCase()] || [
      "No quotes found for this topic.",
    ];
    setQuotes(selectedQuotes);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 px-4 py-16 bg-gray-50 dark:bg-black">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        Daily Quote Generator
      </h1>

      <div className="flex gap-2 w-full max-w-md">
        <Input
          type="text"
          placeholder="Enter a topic (e.g., success)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <Button onClick={handleGenerate}>Generate</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 w-full max-w-4xl">
        {quotes.map((quote, index) => (
          <Card key={index}>
            <CardContent className="p-4 text-sm text-gray-700 dark:text-gray-200">
              “{quote}”
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
