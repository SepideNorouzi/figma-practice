import React from "react";
import Center from "../layout/Center";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Homepage() {
  return (
    <div className="h-screen w-full bg-gray-200 flex justify-center items-center">
      <div
        className="bg-red-200 w-[95%] h-[95%] rounded-2xl shadow-lg m-4 flex flex-col overflow-hidden"
      >
        <div>
          <Header />
        </div>
        <div className=" flex h-full overflow-hidden">
          {/* LEFT SIDE (65%) */}
          <div className="center basis-[75%] overflow-x-hidden overflow-y-auto">
            <Center />
          </div>

          {/* RIGHT SIDE (35%) */}
          <div className="basis-[25%] overflow-y-auto overflow-x-hidden rounded-tl-3xl">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
