'use client';

import { error } from "console";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch('/api/generate-story', {
      method: 'POST',
      body: JSON.stringify({
        userMessage: "Start the story",
        conversationHistory: [],
        isStart: true
      })
  }).then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error fetching story:', error);
    });
  })

  return (
    <div className="font-sans min-h-screen p-8">
      zombie apocalipse game
    </div>
  );
}
