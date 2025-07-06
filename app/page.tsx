"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { quotes } from "@/data/quotes"
import ThemeToggle from "@/components/ThemeToggle"

export default function Home() {
  const [topic, setTopic] = useState("")
  const [results, setResults] = useState<string[]>([])

  const handleSubmit = () => {
    const keyword = topic.trim().toLowerCase()
    const matched = quotes.filter(q => q.topic.toLowerCase() === keyword).slice(0, 3)
    setResults(matched.map(q => q.text))
  }

  const handleRandom = () => {
    const shuffled = [...quotes].sort(() => 0.5 - Math.random())
    setResults(shuffled.slice(0, 3).map(q => q.text))
  }

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white tracking-tight">
             Nexium Quotes Generator 
          </h1>
          <ThemeToggle />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
       <>
  <Input
    list="topics"
    placeholder="Type or choose a topic"
    value={topic}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTopic(e.target.value)}
    className="flex-1 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
  />
  <datalist id="topics">
    {[
      "success", "life", "failure", "growth", "learning", "ambition", "focus", "leadership",
      "time", "happiness", "creativity", "courage", "patience", "passion", "risk", "honesty",
      "wisdom", "resilience", "vision", "opportunity", "productivity", "freedom", "kindness",
      "balance", "gratitude", "mindfulness", "motivation", "consistency", "confidence", "discipline",
      "perseverance", "simplicity", "curiosity", "intelligence", "change", "health", "teamwork",
      "effort", "trust", "respect", "responsibility", "clarity", "purpose", "efficiency", "adaptability",
      "decisiveness", "integrity", "innovation", "problem-solving", "self-awareness"
    ].map((t) => (
      <option key={t} value={t} />
    ))}
  </datalist>
</>

          <Button
            onClick={handleSubmit}
            className="bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            Search
          </Button>
          <Button
  onClick={handleRandom}
  className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-700 bg-transparent"
>
  Random
</Button>

        </div>
           <div className="space-y-4 transition-all duration-300 animate-fadeIn">
          {results.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400 italic">
              Try topics like <span className="font-medium">success</span>, <span className="font-medium">life</span>, or click “Random”
            </p>
          ) : (
            results.map((quote, index) => (
              <Card
                key={index}
                className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 transition hover:shadow-md"
              >
                <CardContent className="p-5 flex items-start justify-between text-gray-800 dark:text-white text-base leading-relaxed">
  <p className="mr-4">“{quote}”</p>
  <button
    onClick={() => {
      const speech = new SpeechSynthesisUtterance(quote)
      speech.lang = "en-US"
      speech.pitch = 1
      speech.rate = 1
      window.speechSynthesis.speak(speech)
    }}
    className="text-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300 transition"
    aria-label="Read quote aloud"
  >
    🔊
  </button>
</CardContent>

              </Card>
            ))
          )}
        </div>
      </div>
    </main>
  )
}
