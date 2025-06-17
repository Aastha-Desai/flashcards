import React, { useState } from "react";
import "./FlashcardSet.css"; // optional styling

const cards = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is 2 + 2?", answer: "4" },
  { question: "Who wrote '1984'?", answer: "George Orwell" },
  { question: "What does HTML stand for?", answer: "HyperText Markup Language" }
];

function FlashcardSet() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const showRandomCard = () => {
    const randIndex = Math.floor(Math.random() * cards.length);
    setCurrentCard(randIndex);
    setIsFlipped(false);
  };

  const current = cards[currentCard];

  return (
    <div className="card-set">
      <h2>🧠 Study Deck</h2>
      <p>A flashcard set to help you study cool facts!</p>
      <p>Total Cards: {cards.length}</p>

      <div className="flashcard" onClick={handleFlip}>
        {isFlipped ? current.answer : current.question}
      </div>

      <button onClick={showRandomCard}>Next Random Card</button>
    </div>
  );
}

export default FlashcardSet;
