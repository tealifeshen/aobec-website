"use client";

import { useState } from "react";


export default function EnergyStep8({

  country,
  projectType,
  consumption,
  electricityCost,
  outage,
  solarSpace,
  storageNeed,

}: any) {


  const [name,setName] = useState("");

  const [email,setEmail] = useState("");

  const [whatsapp,setWhatsapp] = useState("");

  const [sending,setSending] = useState(false);



  const handleSubmit = async()=>{


    setSending(true);


    const formData = new FormData();


    formData.append(

      "access_key",

      "4716e9b7-6da1-4132-871c-76aa74969835"

    );


    formData.append(

      "subject",

      "New AOBEC Solar Storage Inquiry"

    );



    formData.append(

      "from_name",

      "AOBEC Energy AI"

    );



    formData.append(

      "name",

      name

    );


    formData.append(

      "email",

      email

    );


    formData.append(

      "whatsapp",

      whatsapp

    );



    formData.append(

      "project_information",

`
Country:
${country}

Project Type:
${projectType}

Energy Need:
${consumption}

Electricity Cost:
${electricityCost}

Power Outage:
${outage}

Solar Space:
${solarSpace}

Backup Requirement:
${storageNeed}
`

    );



    formData.append(

      "recommended_system",

`
Solar PV:
8 kWp

Battery:
15 kWh LiFePO4

Hybrid Inverter:
8 kW

Estimated Saving:
$150/month

Payback:
5-7 Years
`

    );




    try{


      const response = await fetch(

        "https://api.web3forms.com/submit",

        {

          method:"POST",

          body:formData

        }

      );



      const result = await response.json();



      if(result.success){


        alert(

          "Thank you! AOBEC engineer will contact you soon."

        );


        window.location.href="/energy/result";


      }

      else{


        alert(

          "Submission failed. Please try again."

        );


      }



    }

    catch(error){


      alert(

        "Network error. Please try again."

      );


    }



    setSending(false);



  };


  return (

    <div className="text-center">


      <div className="mb-10">

        <div className="text-blue-900 font-bold text-lg">

          AOBEC ENERGY AI

        </div>

      </div>




      <h1 className="text-5xl font-bold text-slate-900">

        Your Solar Storage Solution

      </h1>



      <p className="mt-5 text-xl text-slate-600">

        AI recommended energy system based on your requirements

      </p>





      <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">



        <div className="rounded-2xl border border-slate-300 p-8">


          <h2 className="text-2xl font-bold text-blue-900">

            Project Information

          </h2>



          <div className="mt-6 space-y-4 text-lg text-slate-700">


            <p>
              🌍 Country:
              <br/>
              <b>{country || "Not selected"}</b>
            </p>


            <p>
              🏠 Project Type:
              <br/>
              <b>{projectType || "Not selected"}</b>
            </p>


            <p>
              ⚡ Energy Need:
              <br/>
              <b>{consumption || "Not selected"}</b>
            </p>


            <p>
              💰 Electricity Cost:
              <br/>
              <b>{electricityCost || "Not selected"}</b>
            </p>


            <p>
              ⚡ Power Outage:
              <br/>
              <b>{outage || "Not selected"}</b>
            </p>


            <p>
              ☀️ Solar Space:
              <br/>
              <b>{solarSpace || "Not selected"}</b>
            </p>


            <p>
              🔋 Backup Requirement:
              <br/>
              <b>{storageNeed || "Not selected"}</b>
            </p>


          </div>


        </div>





        <div className="rounded-2xl border border-slate-300 bg-blue-50 p-8">


          <h2 className="text-2xl font-bold text-blue-900">

            Recommended System

          </h2>



          <div className="mt-6 space-y-5 text-lg">


            <p>
              ☀️ Solar PV:
              <br/>
              <b>8 kWp</b>
            </p>



            <p>
              🔋 Battery Storage:
              <br/>
              <b>15 kWh LiFePO4</b>
            </p>



            <p>
              ⚡ Hybrid Inverter:
              <br/>
              <b>8 kW</b>
            </p>



            <p>
              💰 Estimated Saving:
              <br/>
              <b>$150 / month</b>
            </p>



            <p>
              📈 Payback Period:
              <br/>
              <b>5 - 7 Years</b>
            </p>


          </div>


        </div>


      </div>





      <div className="mt-12 rounded-2xl border border-slate-300 p-8 text-left">


        <h2 className="text-3xl font-bold">

          Get Your Professional Proposal

        </h2>



        <p className="mt-3 text-slate-600">

          Please leave your contact information.
          AOBEC engineer will contact you soon.

        </p>



        <div className="mt-6 space-y-5">



          <input

            placeholder="Your Name"

            value={name}

            onChange={(e)=>setName(e.target.value)}

            className="
            w-full
            border
            border-slate-400
            rounded-xl
            p-4
            "

          />




          <input

            placeholder="Email"

            value={email}

            onChange={(e)=>setEmail(e.target.value)}

            className="
            w-full
            border
            border-slate-400
            rounded-xl
            p-4
            "

          />




          <input

            placeholder="WhatsApp Number"

            value={whatsapp}

            onChange={(e)=>setWhatsapp(e.target.value)}

            className="
            w-full
            border
            border-slate-400
            rounded-xl
            p-4
            "

          />





          <button

            onClick={handleSubmit}

            disabled={sending}

            className="
            w-full
            bg-blue-900
            text-white
            rounded-xl
            py-4
            text-xl
            font-bold
            "

          >

            {sending 
            
            ? 
            
            "Sending..."
            
            :
            
            "Request AOBEC Proposal →"
            
            }


          </button>



        </div>


      </div>



    </div>


  );


}