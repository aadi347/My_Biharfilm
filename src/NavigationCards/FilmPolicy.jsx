import React from "react";
import FilmSubsidyTable from "../Budget/FilmSubsidyTable.jsx";
import InvestmentSubsidyTable from "../Budget/InvestmentSubsidyTable.jsx";
import FilmSubsidy from "../Budget/FilmSubsidy.jsx";

export default function FilmPolicyNOC() {
  return (
    <div
      id="FilmPolicy"
      className="min-h-screen w-full bg-[#190108] px-4 xl:px-16 py-20"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-white tracking-wide">
          🎬 Film Policy & NOC
        </h1>
        <p className="text-gray-100 text-lg mt-4 max-w-2xl mx-auto">
          Discover the policies and subsidies powering Bihar's cinematic future — explore financial incentives and production support.
        </p>
        <div className="h-1 w-24 bg-[#a92b4e] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Tables in Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white shadow-xl rounded-2xl p-8 transition hover:scale-[1.02] hover:shadow-[#a92b4e] duration-300 border-t-4 border-[#a92b4e]">
          <h2 className="text-2xl font-semibold text-[#891737] mb-4">
            Film Subsidy Table
          </h2>
          <FilmSubsidyTable />
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8 transition hover:scale-[1.02] hover:shadow-[#a92b4e] duration-300 border-t-4 border-[#a92b4e]">
          <h2 className="text-2xl font-semibold text-[#891737] mb-4">
             Investment Subsidy Table
          </h2>
          <InvestmentSubsidyTable />
        </div>
      </div>

      {/* Mobile View */}
      <div className="xl:hidden mt-16">
        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-[#a92b4e]">
          <h2 className="text-xl font-medium text-[#891737] mb-4">
            📄 Film Subsidy Details
          </h2>
          <FilmSubsidy />
        </div>
      </div>
    </div>
  );
}
