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
      fetch('/api/generate-image', {
        method: 'POST',
        body: JSON.stringify({
          imagePrompt: data.imagePrompt
        })
      }).then(res => res.json())
        .then(imageData => {
          console.log('Generated Image: ', imageData);
        })
        .catch(error => {
          console.error('Error generating image:', error);
        });
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
