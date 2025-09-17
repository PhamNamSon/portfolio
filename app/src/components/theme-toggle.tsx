import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      if (savedTheme === "dark") {
        setIsDarkTheme(true);
        document.documentElement.classList.add("dark");
      } else {
        setIsDarkTheme(false);
        document.documentElement.classList.remove("dark");
      }
    } else {
      setIsDarkTheme(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkTheme) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkTheme(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkTheme(true);
    }
  };

  return (
    <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-3.5 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus-hidden")}>
      {isDarkTheme ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-500" />
      )}
    </button>
  );
};