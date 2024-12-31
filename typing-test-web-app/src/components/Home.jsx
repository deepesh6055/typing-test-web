import React, { useState, useEffect } from "react";

const App = () => {
  const paragraphs = [
    "The quick brown fox jumps over the lazy dog.",
    "Typing is a valuable skill that improves with practice.",
    "Programming in JavaScript is fun and rewarding.",
    "React is a popular JavaScript library for building user interfaces.",
    "The world of technology evolves rapidly.",
    "Learning to type fast and accurately is a skill that pays off.",
    "A journey of a thousand miles begins with a single step.",
    "Innovation and creativity are the driving forces of progress.",
    "Practice makes perfect. The more effort you put in, the better you become.",
    "Effective communication is key to success in life and work.",
  ];

  const [randomParagraph, setRandomParagraph] = useState("");
  const [typedText, setTypedText] = useState("");
  const [startTime, setStartTime] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  // Generate a random paragraph when the component mounts
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    setRandomParagraph(paragraphs[randomIndex]);
  }, []);

  // Function to start the test
  const startTest = () => {
    setStartTime(new Date().getTime());
  };

  // Function to calculate WPM
  const calculateWPM = (text) => {
    const timeElapsed = (new Date().getTime() - startTime) / 60000; // time in minutes
    const words = text.split(" ").length;
    return Math.round(words / timeElapsed);
  };

  // Function to handle typing and calculate accuracy and mistakes
  const handleTextChange = (e) => {
    const typed = e.target.value;
    setTypedText(typed);

    // Calculate WPM
    const currentWPM = calculateWPM(typed);
    setWpm(currentWPM);

    // Calculate mistakes and accuracy
    const correctWords = typed
      .split(" ")
      .filter((word, index) => word === randomParagraph.split(" ")[index]).length;
    const totalWords = randomParagraph.split(" ").length;
    const currentAccuracy = Math.round((correctWords / totalWords) * 100);
    setAccuracy(currentAccuracy);
    setMistakes(totalWords - correctWords);
  };

  // Function to end the test
 
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold mb-8 text-yellow-400">Typing Speed Test</h1>

      <div className="bg-gray-800 p-6 rounded-lg w-3/4 md:w-1/2 mb-6">
        <p className="text-lg text-gray-300">{randomParagraph}</p>
        <div className="mt-4">
          <textarea
            id="typed-text"
            className="w-full h-40 p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Start typing here..."
            value={typedText}
            onChange={handleTextChange}
            onFocus={startTest}
          />
        </div>
        <div className="mt-4 flex flex-col items-center space-y-4">
          <div className="flex justify-center w-full">
            <p className="text-sm text-gray-400">WPM:</p>
            <p className="text-sm text-gray-300 ml-2">{wpm}</p>
          </div>
          <div className="flex justify-center w-full">
            <p className="text-sm text-gray-400">Accuracy:</p>
            <p className="text-sm text-gray-300 ml-2">{accuracy}%</p>
          </div>
          <div className="flex justify-center w-full">
            <p className="text-sm text-gray-400">Mistakes:</p>
            <p className="text-sm text-gray-300 ml-2">{mistakes}</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default App;
