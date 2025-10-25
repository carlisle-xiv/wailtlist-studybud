// Animation utilities and variants for Framer Motion

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const fadeInUpStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const magneticHover = {
  scale: 1.05,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 10,
  },
};

export const glowEffect = {
  boxShadow: [
    "0 0 20px rgba(99, 102, 241, 0.3)",
    "0 0 40px rgba(99, 102, 241, 0.5)",
    "0 0 20px rgba(99, 102, 241, 0.3)",
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Counter animation hook
export const useCounter = (end: number, duration: number = 2) => {
  const [count, setCount] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const startCount = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1,
      );

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(startCount + (end - startCount) * easeOutQuart));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return { count, setIsVisible };
};

// Import React for hooks
import React from "react";
