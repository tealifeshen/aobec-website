"use client";

export default function EnergyStep5({
  setPowerOutage,
  setStep,
}: any) {


  const outageOptions = [

    {
      title:"Rarely",
      desc:"Power outages happen occasionally",
      value:"Rarely",
      icon:"⚡"
    },

    {
      title:"Monthly",
      desc:"Several outages every month",
      value:"Monthly",
      icon:"⚡"
    },

    {
      title:"Weekly",
      desc:"Power cuts happen every week",
      value:"Weekly",
      icon:"⚡"
    },

    {
      title:"Daily",
      desc:"Frequent outages require reliable backup power",
      value:"Daily",
      icon:"🚨"
    },

  ];



  const handleSelect=(value:string)=>{

    setPowerOutage(value);

    setStep(6);

  };



  return (

    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">


      <div className="bg-white rounded-3xl shadow-xl w-full max-w-5xl p-10">


        <div className="text-center">


          <div className="text-blue-800 font-bold text-xl">
            AOBEC ENERGY AI
          </div>


          <h1 className="text-5xl font-bold text-slate-900 mt-12">
            How often do you experience power outages?
          </h1>


          <p className="text-xl text-slate-600 mt-5">
            Tell us about your backup power needs
          </p>


        </div>



        <div className="grid grid-cols-2 gap-8 mt-16">


        {outageOptions.map((item)=>(


          <button

          key={item.value}

          onClick={()=>handleSelect(item.value)}

          className="
          text-left
          border
          border-slate-200
          rounded-2xl
          p-8
          hover:border-blue-500
          hover:bg-blue-50
          transition
          "

          >


            <div className="text-4xl mb-5">
              {item.icon}
            </div>


            <h2 className="text-2xl font-bold text-slate-900">
              {item.title}
            </h2>


            <p className="mt-3 text-slate-600">
              {item.desc}
            </p>


          </button>


        ))}


        </div>


      </div>


    </div>

  );

}