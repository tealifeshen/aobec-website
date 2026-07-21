"use client";


export default function EnergyStep3({

  projectType,
  setConsumption,
  setStep,

}: any) {



  const consumptionOptions = [

    {
      icon:"⚡",
      title:"Low Consumption",
      desc:"Small homes, shops and basic electricity needs"
    },


    {
      icon:"🏠",
      title:"Medium Consumption",
      desc:"Homes with air conditioners and daily appliances"
    },


    {
      icon:"🏭",
      title:"High Consumption",
      desc:"Factories, hotels and commercial buildings"
    },


    {
      icon:"🔋",
      title:"Need Backup Power",
      desc:"Main purpose is backup during power outage"
    }

  ];





  return (

    <div className="text-center px-4 md:px-6">


      <div className="mb-10">

        <div className="text-blue-900 font-bold text-lg">
          AOBEC ENERGY AI
        </div>

      </div>





      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">

        Tell us about your energy needs

      </h1>



      <p className="mt-5 text-base md:text-xl text-slate-600">

        Select your electricity consumption profile

      </p>







      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 md:mt-12 px-2 md:px-4">


        {consumptionOptions.map((item,index)=>(


          <button

          key={index}

          onClick={()=>{

            setConsumption(item.title);

            setStep(4);

          }}


          className="
          text-left
          rounded-2xl
          border
          p-5 md:p-8
          hover:border-blue-500
          hover:bg-blue-50
          transition
          "

          >



            <div className="text-4xl mb-5">

              {item.icon}

            </div>




            <h2 className="text-xl md:text-2xl font-bold text-slate-900">

              {item.title}

            </h2>




            <p className="mt-3 text-base md:text-lg text-slate-600">

              {item.desc}

            </p>




          </button>



        ))}



      </div>



    </div>


  );


}