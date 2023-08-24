"use client";
import { useTheme } from "next-themes";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { BsMoon, BsSun } from "react-icons/bs";

const ToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <button
      className={theme === "dark" ? "text-gray-300" : "text-black"}
      onClick={handleTheme}
    >
      {theme === "dark" ? <BsMoon /> : <BsSun />}
    </button>
  );
};

export default ToggleButton;
