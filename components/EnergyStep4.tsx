"use client";

export default function EnergyStep4({
  setElectricityCost,
  setStep,
}: any) {

  const electricityOptions = [
    {
      title: "Low Electricity Bill",
      desc: "Small electricity consumption and low monthly cost",
      value: "Low Bill",
    },
    {
      title: "Medium Electricity Bill",
      desc: "Normal household electricity consumption",
      value: "Medium Bill",
    },
    {
      title: "High Electricity Bill",
      desc: "High electricity usage and expensive bills",
      value: "High Bill",
    },
    {
      title: "Very High Electricity Bill",
      desc: "Industrial or commercial high energy consumption",
      value: "Very High Bill",
    },
  ];


  const handleSelect = (value: string) => {

    setElectricityCost(value);

    setStep(5);

  };


  return (

    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

<div className="bg-white rounded-3xl shadow-xl w-full max-w-5xl p-5 md:p-10">


        <div className="text-center">

          <div className="text-blue-800 font-bold text-xl">
            AOBEC ENERGY AI
          </div>


          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mt-8 md:mt-12">
            What is your electricity cost?
          </h1>


          <p className="text-base md:text-xl text-slate-600 mt-4 md:mt-5">
            Tell us about your monthly electricity bill
          </p>


        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-8 md:mt-16">


          {electricityOptions.map((item)=>(
            
            <button

              key={item.value}

              onClick={()=>handleSelect(item.value)}

              className="
              text-left
              border
              border-slate-200
              rounded-2xl
              p-5
              md:p-8
              hover:border-blue-500
              hover:bg-blue-50
              transition
              "

            >

<h2 className="text-lg md:text-2xl font-bold text-slate-900">
                {item.title}
              </h2>


              <p className="mt-3 text-sm md:text-base text-slate-600">
                {item.desc}
              </p>


            </button>

          ))}


        </div>


      </div>

    </div>

  );

}