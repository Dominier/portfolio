"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const light = savedTheme === "light";
    document.documentElement.dataset.theme = light ? "light" : "dark";
    setIsLight(light);
  }, []);

  const toggleTheme = () => {
    const nextIsLight = !isLight;
    document.documentElement.dataset.theme = nextIsLight ? "light" : "dark";
    window.localStorage.setItem("theme", nextIsLight ? "light" : "dark");
    setIsLight(nextIsLight);
  };

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}>
      {isLight ? <Moon size={15} /> : <Sun size={15} />}
    </button>
  );
}
