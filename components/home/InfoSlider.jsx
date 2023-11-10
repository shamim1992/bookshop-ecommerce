import React, { useState, useEffect } from "react";

const InfoSlider = () => {
  const quotes = [
    "“I shall be miserable if I have not an excellent library.” – Jane Austen in Pride and Prejudice (print from Brilliant Business Mom)",
    "“The books that the world calls immoral are books that show the world its own shame.” – Oscar Wilde in The Picture of Dorian Gray ",
    "“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.” – Neil Gaiman in Coraline (print by Aenaon Art Work)",
    "“That’s the thing about books. They let you travel without moving your feet.” – Jhumpa Lahiri in The Namesake",
  ];
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000); // Change quotes every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [quotes]);

  const currentQuote = quotes[currentQuoteIndex];
  return (
    <>
      <div
        className="relative h-[300px] lg:h-[500px] bg-cover"
        style={{ backgroundImage: `url("/assets/BG.jpg") ` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 text-white flex items-center justify-center">
          <blockquote className="text-xl lg:text-3xl p-5 font-semibold text-center">
            {currentQuote}
          </blockquote>
        </div>
      </div>
    </>
  );
};

export default InfoSlider;
