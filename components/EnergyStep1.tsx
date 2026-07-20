"use client";

export default function EnergyStep1({
  setCountry,
  setStep
}: any) {


  const countries = [
    "Vietnam",
    "Kenya",
    "Uganda",
    "Philippines",
    "Pakistan",
    "Other"
  ];


  return (

    <div>


      <h2 className="text-3xl font-bold text-center text-slate-900">
        Where is your project located?
      </h2>


      <p className="text-center mt-4 text-slate-600">
        Select your country
      </p>



      <div className="
        grid
        md:grid-cols-2
        gap-5
        mt-8
      ">


        {
          countries.map((item)=>(

            <button

              key={item}

              onClick={()=>{

                setCountry(item);
                setStep(2);

              }}

              className="
                border-2
                border-slate-200
                rounded-xl
                p-6
                text-xl
                font-bold
                text-slate-900
                hover:border-blue-700
                hover:bg-blue-50
                transition
              "

            >

              {item}

            </button>


          ))
        }


      </div>


    </div>

  );


}