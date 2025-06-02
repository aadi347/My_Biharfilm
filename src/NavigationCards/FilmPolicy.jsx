import React from "react";
import Reelfilm from "../assets/Reelfilm.svg";
import FilmSubsidyTable from "../Budget/FilmSubsidyTable.jsx";
import InvestmentSubsidyTable from "../Budget/InvestmentSubsidyTable.jsx";
import FilmSubsidy from "../Budget/FilmSubsidy.jsx";

export default function FilmPolicyNOC() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-100 px-4 xl:px-16 py-16" id="FilmPolicy">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">🎬 Film Policy & NOC</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore budget allocations, investment subsidies, and all benefits offered under our Film Policy.
        </p>
      </div>

      {/* Tables in Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Film Subsidy Table</h2>
          <FilmSubsidyTable />
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Investment Subsidy Table</h2>
          <InvestmentSubsidyTable />
        </div>
      </div>

      {/* Mobile Optimized FilmSubsidy */}
      <div className="xl:hidden mt-12">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Film Subsidy Details</h2>
          <FilmSubsidy />
        </div>
      </div>

      
    </div>
  );
}
