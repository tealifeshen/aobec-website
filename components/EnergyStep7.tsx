"use client";

export default function EnergyStep7({
  setBackupRequirement,
  setStep,
}: any) {


  const backupOptions = [

    {
      title:"Basic Backup",
      desc:"Backup for lights, internet and essential appliances",
      value:"Basic Backup",
      icon:"💡"
    },

    {
      title:"Medium Backup",
      desc:"Backup for home appliances and daily electricity needs",
      value:"Medium Backup",
      icon:"🔋"
    },

    {
      title:"Full Backup",
      desc:"Whole house backup during power outage",
      value:"Full Backup",
      icon:"🏠"
    },

    {
      title:"Critical Backup",
      desc:"Hospitals, businesses and critical equipment",
      value:"Critical Backup",
      icon:"⚡"
    },

  ];



  const handleSelect=(value:string)=>{

    setBackupRequirement(value);

    setStep(8);

  };



  return (

    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">


      <div className="bg-white rounded-3xl shadow-xl w-full max-w-5xl p-10">


        <div className="text-center">


          <div className="text-blue-800 font-bold text-xl">
            AOBEC ENERGY AI
          </div>


          <h1 className="text-5xl font-bold text-slate-900 mt-12">
            What backup power do you need?
          </h1>


          <p className="text-xl text-slate-600 mt-5">
            Tell us your backup requirements
          </p>


        </div>



        <div className="grid grid-cols-2 gap-8 mt-16">


        {backupOptions.map((item)=>(


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