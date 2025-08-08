import React from "react";
import FilmSubsidyTable from "../Budget/FilmSubsidyTable.jsx";
import InvestmentSubsidyTable from "../Budget/InvestmentSubsidyTable.jsx";
import FilmSubsidy from "../Budget/FilmSubsidy.jsx";
import "../App.css";

export default function FilmPolicyNOC() {
  return (
    <div
      id="FilmPolicy"
      className="min-h-screen h-fit w-full bg-[#190108] px-4 sm:px-6 xl:px-16 py-10 flex flex-col items-center justify-start overflow-hidden"
    >
      {/* Header */}
      <div className="text-center mb-12 px-2">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl great-vibes-regular text-white tracking-wide leading-tight">
          Film Policy
        </h1>
        <p className="text-gray-100 text-base sm:text-lg mt-4 max-w-3xl mx-auto px-2">
          Discover the policies and subsidies powering Bihar's cinematic future — explore financial incentives and production support.
        </p>
        <div className="h-1 w-24 bg-[#a92b4e] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Tables */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 w-full max-w-7xl">
        {/* Film Subsidy Table */}
        <div className="flex-1 bg-white shadow-xl rounded-2xl p-4 sm:p-6 transition hover:scale-[1.01] hover:shadow-[#a92b4e] duration-300 border-t-4 border-[#a92b4e]">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#891737] mb-4">
            Film Subsidy Table
          </h2>
          <FilmSubsidyTable />
        </div>

        {/* Investment Subsidy Table */}
        <div className="flex-1 bg-white shadow-xl rounded-2xl p-4 sm:p-6 transition hover:scale-[1.01] hover:shadow-[#a92b4e] duration-300 border-t-4 border-[#a92b4e]">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#891737] mb-4">
            Investment Subsidy Table
          </h2>
          <InvestmentSubsidyTable />
        </div>
      </div>

      {/* Mobile Friendly Summary */}
      <div className="mt-10 w-full max-w-4xl">
        <div className="bg-white shadow-xl rounded-2xl p-4 sm:p-6 border-l-4 border-[#a92b4e] transition hover:scale-[1.01] hover:shadow-[#a92b4e] duration-300">
          <h2 className="text-lg sm:text-xl font-medium text-[#891737] mb-4">
            Film Subsidy Details (Mobile Summary)
          </h2>
          <FilmSubsidy />
        </div>
      </div>
    </div>
  );
}
