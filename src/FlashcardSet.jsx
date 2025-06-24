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
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const current = cards[currentCard];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setFeedback(""); // reset feedback on flip
  };

  const showNextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
    resetState();
  };

  const showPrevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
    resetState();
  };

  const showRandomCard = () => {
    const randIndex = Math.floor(Math.random() * cards.length);
    setCurrentCard(randIndex);
    resetState();
  };

  const resetState = () => {
    setIsFlipped(false);
    setUserAnswer("");
    setFeedback("");
  };

  const checkAnswer = () => {
    const correct = current.answer.toLowerCase().trim();
    const guess = userAnswer.toLowerCase().trim();

    if (guess === correct) {
      setFeedback("✅ Correct!");
    } else if (correct.includes(guess) || guess.includes(correct)) {
      setFeedback("🟡 Almost!");
    } else {
      setFeedback("❌ Try again.");
    }
  };

  return (
    <div className="card-set">
      <h2>🧠 Study Deck</h2>
      <p>A flashcard set to help you study cool facts!</p>
      <p>Total Cards: {cards.length}</p>

      <div className="flashcard" onClick={handleFlip}>
        {isFlipped ? current.answer : current.question}
      </div>

      <div className="nav-buttons">
        <button onClick={showPrevCard}>⬅️ Previous</button>
        <button onClick={showNextCard}>➡️ Next</button>
        <button onClick={showRandomCard}>🔀 Random</button>
      </div>

      <input
        type="text"
        placeholder="Your Answer"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />

      <button onClick={checkAnswer}>Check Answer</button>

      <p>{feedback}</p>
    </div>
  );
}

export default FlashcardSet;
