import React from "react";

interface HeaderProps {
  language: string; // Expecting a string for language ('en', 'fa')
  setLanguage: (language: string) => void; // Expecting a function that takes a boolean and returns void
}

function Header({ language, setLanguage }: HeaderProps) {
  const buttonClass = `rounded-2xl p-2 pr-4 pl-4 ${
    language === "en"
      ? "bg-blue-200" // Class for English active
      : "bg-blue-400" // Class for Persian active
  }`;

  return (
    <div className="bg-gray-200 p-2 m-4 rounded-2xl flex justify-between items-center">
      <div>
        <a
          href="https://github.com/SepideNorouzi/"
          target="_blank" // Opens link in a new tab
          className="bg-blue-200 rounded-2xl p-2 px-4 inline-block" // Added 'inline-block' for proper padding/margin control
        >
          GitHub
        </a>
      </div>
      <div>
        <button
          className={buttonClass}
          onClick={() => setLanguage(language === "en" ? "fa" : "en")}
        >
          English | فارسی
        </button>
      </div>
    </div>
  );
}

export default Header;
