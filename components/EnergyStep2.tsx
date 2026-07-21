"use client";


export default function EnergyStep2({

  setProjectType,
  setStep

}:any){


const projectTypes=[

{
icon:"🏠",
title:"Residential Home",
desc:"Villa, house and family energy storage"
},

{
icon:"🏨",
title:"Hotel & Resort",
desc:"Hotels, resorts and hospitality projects"
},

{
icon:"🏭",
title:"Factory & Industrial",
desc:"Factories, workshops and industrial power"
},

{
icon:"🌱",
title:"Farm & Agriculture",
desc:"Solar systems for farms and irrigation"
},

{
icon:"🏪",
title:"Commercial Building",
desc:"Shops, offices and commercial buildings"
},

{
icon:"🏘️",
title:"Mini Grid / Community",
desc:"Village power and micro grid projects"
}


]


return(


<div>


<div className="text-center">


<div className="text-blue-800 font-bold mb-4">

AOBEC ENERGY AI

</div>


<h2 className="text-xl md:text-3xl font-bold text-slate-900">

What type of project do you need?

</h2>


<p className="mt-4 text-slate-600">

Select your project application

</p>


</div>



<div className="
grid
grid-cols-1
md:grid-cols-2
gap-5
mt-8
">


{

projectTypes.map((item)=>(


<button

key={item.title}

onClick={()=>{

setProjectType(item.title);

setStep(3);

}}


className="
border-2
border-slate-200
rounded-xl
p-5
md:p-6
text-left
hover:border-blue-700
hover:bg-blue-50
transition
"


>


<div className="text-3xl">

{item.icon}

</div>


<div className="
text-lg
md:text-xl
font-bold
mt-3
text-slate-900
">

{item.title}

</div>


<div className="
text-xs
md:text-sm
text-slate-600
mt-2
">

{item.desc}

</div>


</button>


))


}


</div>


</div>


)


}