import React, { useState } from "react";
import Center from "../layout/Center";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Homepage() {
  const [language, setLanguage] = useState("en");

  return (
    <div className="h-screen w-full bg-gray-200 flex justify-center items-center">
      <div className="bg-red-200 w-[95%] h-[95%] rounded-2xl shadow-lg m-4 flex flex-col overflow-hidden">
        <div>
          <Header language={language} setLanguage={setLanguage} />
        </div>
        <div className=" flex h-full overflow-hidden">
          {/* LEFT SIDE (65%) */}
          <div className="center basis-[75%] overflow-x-hidden overflow-y-auto relative">
            <Center language={language} />
          </div>

          {/* RIGHT SIDE (35%) */}
          <div className="basis-[30%] overflow-x-hidden overflow-y-auto rounded-tl-3xl">
            <Sidebar language={language} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
