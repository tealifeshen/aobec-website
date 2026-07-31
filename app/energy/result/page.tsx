"use client";

import { useEffect, useState } from "react";

import {
  ENERGY_RESULT_STORAGE_KEY,
  type EnergyAssessmentData,
  type EnergyRecommendation,
} from "@/lib/energyRecommendation";

type StoredEnergyResult = {
  assessment: EnergyAssessmentData;
  recommendation: EnergyRecommendation;
};

export default function ResultPage() {

    const [result, setResult] = useState<StoredEnergyResult | null>(null);

    useEffect(() => {
      try {
        const storedResult = window.sessionStorage.getItem(
          ENERGY_RESULT_STORAGE_KEY,
        );

        if (storedResult) {
          setResult(JSON.parse(storedResult) as StoredEnergyResult);
        }
      } catch {
        setResult(null);
      }
    }, []);

    const assessment = result?.assessment;
    const recommendation = result?.recommendation;

    return (
  
      <main
        className="
        min-h-screen
        bg-slate-100
        flex
        items-center
        justify-center
        p-8
        "
      >
  
        <div
          className="
          w-full
          max-w-6xl
          bg-white
          rounded-3xl
          shadow-xl
          p-12
          "
        >
  
  
          {/* Header */}
  
          <div className="text-center mb-12">
  
            <div
              className="
              text-blue-800
              font-bold
              text-xl
              mb-6
              "
            >
              AOBEC ENERGY AI
            </div>
  
  
            <h1
              className="
              text-5xl
              font-bold
              text-slate-900
              "
            >
              Your Solar Storage Solution
            </h1>
  
  
            <p
              className="
              mt-5
              text-xl
              text-slate-600
              "
            >
              AI recommended energy system based on your requirements
            </p>
  
  
          </div>
  
  
  
          <div
            className="
            grid
            md:grid-cols-2
            gap-12
            "
          >
  
  
  
            {/* Project Information */}
  
  
            <div>
  
  
              <h2
                className="
                text-3xl
                font-bold
                text-blue-900
                mb-8
                "
              >
                Project Information
              </h2>
  
  
  
              <div
                className="
                space-y-7
                text-lg
                text-slate-700
                "
              >
  
  
                <div>
                  🌍 Country
                  <p className="font-bold text-slate-900">
                    {assessment?.country || "Not available"}
                  </p>
                </div>
  
  
  
                <div>
                  🏠 Project Type
                  <p className="font-bold text-slate-900">
                    {assessment?.projectType || "Not available"}
                  </p>
                </div>
  
  
  
                <div>
                  ⚡ Energy Need
                  <p className="font-bold text-slate-900">
                    {assessment?.consumption || "Not available"}
                  </p>
                </div>
  
  
  
                <div>
                  💰 Electricity Cost
                  <p className="font-bold text-slate-900">
                    {assessment?.electricityCost || "Not available"}
                  </p>
                </div>
  
  
  
                <div>
                  ⚡ Power Outage
                  <p className="font-bold text-slate-900">
                    {assessment?.outage || "Not available"}
                  </p>
                </div>
  
  
  
                <div>
                  ☀️ Solar Space
                  <p className="font-bold text-slate-900">
                    {assessment?.solarSpace || "Not available"}
                  </p>
                </div>
  
  
  
                <div>
                  🔋 Backup Requirement
                  <p className="font-bold text-slate-900">
                    {assessment?.backupRequirement || "Not available"}
                  </p>
                </div>
  
  
              </div>
  
  
            </div>
  
  
  
  
  
  
            {/* Recommended System */}
  
  
  
            <div
              className="
              bg-blue-50
              rounded-3xl
              p-10
              "
            >
  
  
              <h2
                className="
                text-3xl
                font-bold
                text-blue-900
                mb-8
                "
              >
                Recommended System
              </h2>
  
  
  
  
              <div
                className="
                space-y-8
                text-lg
                text-slate-700
                "
              >
  
  
  
                <div>
                  ☀️ Solar PV
                  <p className="font-bold text-slate-900">
                    {recommendation?.solar || "Not available"}
                  </p>
                </div>
  
  
  
  
                <div>
                  🔋 Battery Storage
                  <p className="font-bold text-slate-900">
                    {recommendation?.battery || "Not available"}
                  </p>
                </div>
  
  
  
  
                <div>
                  ⚡ Hybrid Inverter
                  <p className="font-bold text-slate-900">
                    {recommendation?.inverter || "Not available"}
                  </p>
                </div>
  
  
  
  
                <div>
                  💰 Estimated Saving
                  <p className="font-bold text-slate-900">
                    {recommendation?.saving || "Not available"}
                  </p>
                </div>
  
  
  
  
                <div>
                  📈 Payback Period
                  <p className="font-bold text-slate-900">
                    {recommendation?.payback || "Not available"}
                  </p>
                </div>
  
  
  
              </div>
  
  
            </div>
  
  
  
          </div>
  
  
  
  
  
  
          {/* CTA */}
  
  
  
          <div
            className="
            text-center
            mt-16
            "
          >
  
  
            <h2
              className="
              text-4xl
              font-bold
              text-slate-900
              "
            >
              Get Your Professional Proposal
            </h2>
  
  
  
            <p
              className="
              mt-4
              text-xl
              text-slate-600
              "
            >
              Receive detailed design and quotation from AOBEC engineers
            </p>
  
  
  
  
            <button
              className="
              mt-8
              bg-blue-900
              hover:bg-blue-700
              text-white
              px-12
              py-4
              rounded-full
              text-xl
              font-bold
              "
            >
              Contact AOBEC Energy Team →
            </button>
  
  
  
          </div>
  
  
  
  
        </div>
  
  
      </main>
  
  
    );
  
  }
