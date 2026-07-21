export function getRecommendation({

    projectType,
    consumption,
    electricityCost,
    outage,
    solarSpace,
    backupRequirement,
  
  }: any) {
  
  
    let solarKW = 5;
  
    let batteryKWh = 10;
  
    let inverterKW = 5;
  
  
  
    let saving = 100;

    let payback = "6-8 Years";
    
    let generation = 0;
  
  
  
    // ==========================
    // 1. 根据项目类型确定基础规模
    // ==========================
  
  
    if(projectType === "Residential Home"){
  
  
      if(consumption === "Low Consumption"){
  
        solarKW = 3;
        batteryKWh = 5;
        inverterKW = 3;
  
      }
  
  
      if(consumption === "Medium Consumption"){
  
        solarKW = 8;
        batteryKWh = 15;
        inverterKW = 8;
  
      }
  
  
      if(consumption === "High Consumption"){
  
        solarKW = 12;
        batteryKWh = 25;
        inverterKW = 10;
  
      }
  
  
    }
  
  
  
    // 工厂
  
    if(projectType === "Factory & Industrial"){
  
      solarKW = 50;
      batteryKWh = 100;
      inverterKW = 50;
  
    }
  
  
  
    // 酒店
  
    if(projectType === "Hotel & Resort"){
  
      solarKW = 30;
      batteryKWh = 60;
      inverterKW = 30;
  
    }
  
  
  
    // 农场
  
    if(projectType === "Farm & Agriculture"){
  
      solarKW = 20;
      batteryKWh = 40;
      inverterKW = 20;
  
    }
  
  
  
  
  
    // ==========================
    // 2. 停电频率修正
    // ==========================
  
  
    if(outage === "Monthly"){
  
      batteryKWh = batteryKWh * 1.2;
  
    }
  
  
  
    if(outage === "Weekly"){
  
      batteryKWh = batteryKWh * 1.5;
  
    }
  
  
  
    if(outage === "Daily"){
  
      batteryKWh = batteryKWh * 2;
  
    }
  
  
  
  
  
    // ==========================
    // 3. 备用电源需求修正
    // ==========================
  
  
    if(backupRequirement === "Medium Backup"){
  
      inverterKW = inverterKW * 1.2;
  
    }
  
  
  
    if(backupRequirement === "Full Backup"){
  
      inverterKW = inverterKW * 1.5;
  
    }
  
  
  
    if(backupRequirement === "Critical Backup"){
  
      inverterKW = inverterKW * 2;
  
    }
  
  
  
  
  
    // ==========================
    // 4. 高电费增加光伏容量
    // ==========================
  
  
    if(
      electricityCost === "High Bill" ||
      electricityCost === "Very High Bill"
    ){
  
      solarKW = solarKW * 1.3;
  
      saving = saving * 1.5;
  
      payback = "4-6 Years";
  
    }
  
  
  
    // ==========================
    // 5. 输出格式
    // ==========================
  
  
    generation = solarKW * 1500;


saving = generation * 0.15 / 12;


const investment = solarKW * 900;


const annualSaving = saving * 12;


if(annualSaving > 0){

  const years = investment / annualSaving;

  payback =
    `${years.toFixed(1)} Years`;

}
  return {
  
      solar:
  
        `${Math.round(solarKW)} kWp`,
  
  
  
      battery:
  
        `${Math.round(batteryKWh)} kWh LiFePO4`,
  
  
  
      inverter:
  
        `${Math.round(inverterKW)} kW`,
  
  
  
      saving:
  
        `$${Math.round(saving)}/month`,
  
  
  
      payback,
      generation:
      `${Math.round(generation)} kWh/year`,
  
    };
  
  
  }