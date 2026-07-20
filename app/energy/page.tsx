export default function ResultPage() {

    return (
      <main
        className="
        min-h-screen
        bg-slate-100
        flex
        items-center
        justify-center
        p-8
        "
      >
  
        <div
          className="
          w-full
          max-w-6xl
          bg-white
          rounded-3xl
          shadow-xl
          p-12
          "
        >
  
          {/* Header */}
  
          <div className="text-center mb-12">
  
            <h1 className="text-5xl font-bold text-slate-900">
              Your Solar Storage Solution
            </h1>
  
            <p className="mt-4 text-xl text-slate-600">
              AI recommended energy system based on your requirements
            </p>
  
          </div>
  
  
          <div
            className="
            grid
            md:grid-cols-2
            gap-10
            "
          >
  
  
            {/* Project Information */}
  
            <div>
  
              <h2 className="
              text-3xl
              font-bold
              text-blue-900
              mb-8
              ">
                Project Information
              </h2>
  
  
              <div className="space-y-6 text-lg">
  
  
                <div>
                  🌍 Country:
                  <p className="font-bold">
                    Vietnam
                  </p>
                </div>
  
  
                <div>
                  🏠 Project Type:
                  <p className="font-bold">
                    Residential Home
                  </p>
                </div>
  
  
                <div>
                  ⚡ Energy Need:
                  <p className="font-bold">
                    Medium Consumption
                  </p>
                </div>
  
  
                <div>
                  💰 Electricity Cost:
                  <p className="font-bold">
                    Medium Bill
                  </p>
                </div>
  
  
                <div>
                  ⚡ Power Outage:
                  <p className="font-bold">
                    Weekly
                  </p>
                </div>
  
  
                <div>
                  ☀️ Solar Space:
                  <p className="font-bold">
                    Available Roof Space
                  </p>
                </div>
  
  
                <div>
                  🔋 Backup Requirement:
                  <p className="font-bold">
                    Medium Backup
                  </p>
                </div>
  
  
              </div>
  
  
            </div>
  
  
  
  
            {/* Recommended System */}
  
  
            <div
              className="
              bg-blue-50
              rounded-3xl
              p-10
              "
            >
  
              <h2
                className="
                text-3xl
                font-bold
                text-blue-900
                mb-8
                "
              >
                Recommended System
              </h2>
  
  
              <div className="
              space-y-8
              text-lg
              ">
  
  
                <div>
                  ☀️ Solar PV:
                  <p className="font-bold">
                    8 kWp
                  </p>
                </div>
  
  
                <div>
                  🔋 Battery Storage:
                  <p className="font-bold">
                    15 kWh LiFePO4
                  </p>
                </div>
  
  
                <div>
                  ⚡ Hybrid Inverter:
                  <p className="font-bold">
                    8 kW
                  </p>
                </div>
  
  
                <div>
                  💰 Estimated Saving:
                  <p className="font-bold">
                    $150 / month
                  </p>
                </div>
  
  
                <div>
                  📈 Payback Period:
                  <p className="font-bold">
                    5 - 7 Years
                  </p>
                </div>
  
  
              </div>
  
  
            </div>
  
  
          </div>
  
  
  
          {/* CTA */}
  
  
          <div className="
          text-center
          mt-16
          ">
  
  
            <h2
            className="
            text-4xl
            font-bold
            text-slate-900
            "
            >
              Get Your Professional Proposal
            </h2>
  
  
            <p
            className="
            mt-4
            text-xl
            text-slate-600
            "
            >
              Receive detailed design and quotation from AOBEC engineers
            </p>
  
  
  
            <button
            className="
            mt-8
            bg-blue-900
            text-white
            px-10
            py-4
            rounded-full
            text-xl
            font-bold
            "
            >
              Contact AOBEC Energy Team →
            </button>
  
  
          </div>
  
  
        </div>
  
  
      </main>
    );
  }