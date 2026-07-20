"use client";

import { useState } from "react";

import EnergyStep1 from "@/components/EnergyStep1";
import EnergyStep2 from "@/components/EnergyStep2";
import EnergyStep3 from "@/components/EnergyStep3";
import EnergyStep4 from "@/components/EnergyStep4";
import EnergyStep5 from "@/components/EnergyStep5";
import EnergyStep6 from "@/components/EnergyStep6";
import EnergyStep7 from "@/components/EnergyStep7";
import EnergyStep8 from "@/components/EnergyStep8";


export default function AssessmentPage() {


  const [step,setStep] = useState(1);


  const [country,setCountry] = useState("");

  const [projectType,setProjectType] = useState("");

  const [consumption,setConsumption] = useState("");

  const [electricityCost,setElectricityCost] = useState("");

  const [outage,setOutage] = useState("");

  const [solarSpace,setSolarSpace] = useState("");

  const [storageNeed,setStorageNeed] = useState("");



  return (

    <main className="
    min-h-screen
    bg-slate-100
    flex
    items-center
    justify-center
    p-8
    ">


      <div className="
      w-full
      max-w-6xl
      bg-white
      rounded-3xl
      shadow-xl
      p-12
      ">



        {step === 1 && (

          <EnergyStep1

            setCountry={setCountry}

            setStep={setStep}

          />

        )}



        {step === 2 && (

          <EnergyStep2

            country={country}

            setProjectType={setProjectType}

            setStep={setStep}

          />

        )}




        {step === 3 && (

          <EnergyStep3

            projectType={projectType}

            setConsumption={setConsumption}

            setStep={setStep}

          />

        )}




{step === 4 && (

<EnergyStep4

electricityCost={electricityCost}

setElectricityCost={setElectricityCost}

setStep={setStep}

/>

)}




{step === 5 && (

<EnergyStep5

setPowerOutage={setOutage}

setStep={setStep}

/>

)}





{step === 6 && (

<EnergyStep6

solarSpace={solarSpace}

setSolarSpace={setSolarSpace}

setStep={setStep}

/>

)}






{step === 7 && (

<EnergyStep7

setBackupRequirement={setStorageNeed}

setStep={setStep}

/>

)}






{step === 8 && (

<EnergyStep8

country={country}

projectType={projectType}

consumption={consumption}

electricityCost={electricityCost}

outage={outage}

solarSpace={solarSpace}

storageNeed={storageNeed}

/>

)}



      </div>


    </main>

  );


}