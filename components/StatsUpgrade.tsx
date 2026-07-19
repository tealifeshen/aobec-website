const data=[
["20+","Countries Served"],
["100+","Global Partners"],
["500+","Projects Delivered"],
["24/7","Technical Support"]
];

export default function StatsUpgrade(){
 return(
<section className="bg-[#f4f7f9] py-20 text-[#071523]">
<div className="site-container grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
{data.map(([a,b])=>(
<div key={b} className="rounded-[28px] border border-[#dce4e9] bg-white p-8">
<div className="text-5xl font-black tracking-tight">{a}</div>
<div className="mt-3 text-xs font-bold uppercase tracking-[.18em] text-[#60717e]">{b}</div>
</div>
))}
</div>
</section>
 )
}
