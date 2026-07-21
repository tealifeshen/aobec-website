"use client";

export default function EnergyStep6({
  setSolarSpace,
  setStep,
}: any) {


  const solarOptions = [

    {
      title:"Available Roof Space",
      desc:"I have enough roof space for solar panels",
      value:"Available Roof Space",
      icon:"☀️"
    },

    {
      title:"Limited Space",
      desc:"Small roof or limited installation area",
      value:"Limited Space",
      icon:"🏠"
    },

    {
      title:"Ground Installation",
      desc:"Open land available for solar system",
      value:"Ground Installation",
      icon:"🌱"
    },

    {
      title:"Not Sure",
      desc:"Need professional assessment",
      value:"Not Sure",
      icon:"❓"
    },

  ];



  const handleSelect=(value:string)=>{

    setSolarSpace(value);

    setStep(7);

  };



  return (

    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">


<div className="bg-white rounded-3xl shadow-xl w-full max-w-5xl p-5 md:p-10">


        <div className="text-center">


          <div className="text-blue-800 font-bold text-xl">
            AOBEC ENERGY AI
          </div>


          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mt-8 md:mt-12">
            Do you have available solar installation space?
          </h1>


          <p className="text-base md:text-xl text-slate-600 mt-4 md:mt-5">
            Tell us about your solar potential
          </p>


        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-8 md:mt-16">


        {solarOptions.map((item)=>(


          <button

          key={item.value}

          onClick={()=>handleSelect(item.value)}

          className="
          text-left
          border
          border-slate-200
          rounded-2xl
          p-5 md:p-8
          hover:border-blue-500
          hover:bg-blue-50
          transition
          "

          >


            <div className="text-4xl mb-5">
              {item.icon}
            </div>


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