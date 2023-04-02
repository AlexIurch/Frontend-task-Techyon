import '../data/MockData'
import './ElectricityUsage.css'
import mockData from '../data/MockData';


// Data  hourly resolution for meter 2AE445BF
const hourResolutionData1 = mockData.filter((data) => data.meter_id === "2AE445BF" && data.resolution === "Hour")
const hourResolutionValues1 = hourResolutionData1.map((data) => Object.values(data.values)).flat()
const sumHourly1 = hourResolutionValues1.reduce((acc, curr) => acc + curr, 0);
const sumHourly1Fix = sumHourly1.toFixed()

// Data  daily resolution for meter 2AE445BF
const weekResolutionData1 = mockData.filter((data) => data.meter_id === "2AE445BF" && data.resolution === "Day")
const weekResolutionValues1 = weekResolutionData1.map((data) => Object.values(data.values)).flat()
const sumWeekly1 = weekResolutionValues1.reduce((acc, curr) => acc + curr, 0);

// Data  hourly resolution for meter 2AE446FF
const hourResolutionData2 = mockData.filter((data) => data.meter_id === "2AE446FF" && data.resolution === "Hour")
const hourResolutionValues2 = hourResolutionData2.map((data) => Object.values(data.values)).flat()
const sumHourly2 = hourResolutionValues2.reduce((acc, curr) => acc + curr, 0);

// Data  daily resolution for meter 2AE446FF
const weekResolutionData2 = mockData.filter((data) => data.meter_id === "2AE446FF" && data.resolution === "Day")
const weekResolutionValues2 = weekResolutionData2.map((data) => Object.values(data.values)).flat()
const sumWeekly2 = weekResolutionValues2.reduce((acc, curr) => acc + curr, 0);

// Total sum week
const totalSumWeek= sumWeekly2+sumWeekly1
const totalSumWeekFix = totalSumWeek.toFixed(1)

// Total sum day
const totalSumDay= sumHourly2+sumHourly1
const totalSumDayFix =totalSumDay.toFixed(1)



function ElectricityUsage(){
    // console.log(sumHourly1)
    // console.log(sumWeekly1)

    // console.log(sumHourly2)
    // console.log(sumWeekly2)

    return(
        <div className="main-block">
            <h4 className='usage-header'>ELECTRICITY USAGE</h4>
        <table>
  <thead>
    <tr>
      <th>Meters</th>
      <th>Day (kW)</th>
      <th>Week (kW)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>№ 2AE445BF</td>
      <td>{sumHourly1Fix} </td>
      <td>{sumWeekly1} </td>
    </tr>
    <tr>
      <td>№ 2AE446FF</td>
      <td>{sumHourly2} </td>
      <td>{sumWeekly2} </td>
    </tr>
    <tr>
      <td>Total usage</td>
      <td>{totalSumDayFix} </td>
      <td>{totalSumWeekFix} </td>
    </tr>
  </tbody>
</table>
    </div>
    )

}

export default ElectricityUsage