import { useState, useEffect, ReactNode } from "react";
import "../../index.css";

interface TypingEffectOptions {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  cursorColor?: string;
  cursorBlinkRate?: number;
}

interface TypingEffectReturn {
  text: string;
  cursorElement: ReactNode;
  isTyping: boolean;
  isDeleting: boolean;
}

/**
 * Custom hook for creating a typing effect
 * @param words - Array of words to display in the typing effect
 * @param options - Configuration options
 * @returns Object with text to display and CSS styles
 */
export const useTypingEffect = (
  words: string[] = [],
  options: TypingEffectOptions = {}
): TypingEffectReturn => {
  const {
    typingSpeed = 150,
    deletingSpeed = 50,
    pauseTime = 1500,
    cursorBlinkRate = 0.7,
  } = options;

  const [displayText, setDisplayText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  // Use CSS animation directly on the element with inline styles
  const cursorStyle: React.CSSProperties = {
    opacity: 1,
    // Use CSS animation directly
    animation: `${cursorBlinkRate}s ease infinite alternate`,
    animationName: "cursorBlink",
  };

  // Create the cursor element with the animation
  const cursorElement = (
    <>
      {/* Insert keyframes directly into the document */}
      <style>
        {`
          @keyframes cursorBlink {
            0%, 40% { opacity: 1; }
            60%, 100% { opacity: 0; }
          }
        `}
      </style>
      <span style={cursorStyle}>|</span>
    </>
  );

  useEffect(() => {
    if (words.length === 0) return;

    const typingTimer = setTimeout(
      () => {
        const currentWord = words[currentWordIndex];

        if (!isDeleting) {
          // Typing
          if (currentIndex < currentWord.length) {
            setDisplayText(currentWord.substring(0, currentIndex + 1));
            setCurrentIndex(currentIndex + 1);
          } else {
            // Wait before deleting
            setTimeout(() => {
              setIsDeleting(true);
            }, pauseTime);
          }
        } else {
          // Deleting
          if (currentIndex > 0) {
            setDisplayText(currentWord.substring(0, currentIndex - 1));
            setCurrentIndex(currentIndex - 1);
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          }
        }
      },
      isDeleting
        ? deletingSpeed
        : currentIndex === words[currentWordIndex]?.length
        ? pauseTime
        : typingSpeed
    );

    return () => clearTimeout(typingTimer);
  }, [
    currentIndex,
    currentWordIndex,
    isDeleting,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return {
    text: displayText,
    cursorElement,
    isTyping: !isDeleting && currentIndex < words[currentWordIndex]?.length,
    isDeleting,
  };
};
