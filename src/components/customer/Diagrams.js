// Importing mock data
import mockData from "../data/MockData";

// Importing necessary components from Chart.js library
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Importing Bar component from react-chartjs-2 library
import { Bar } from 'react-chartjs-2';

// Function component that renders two bar charts for hourly and weekly meter readings
function ViewDiagrams(props) {

  // Registering necessary chart components from Chart.js library
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  // Options for the hourly meter reading bar chart
  const optionsHourly = {
    responsive: true,
    plugins: {
      legend: {
        position: true,
        labels: {
          font: { size: 14, weight: 'bold' },
          color: '#333',
          padding: 10,
        },
      },
      title: {
        display: true,
        text: 'Indicators for the day',
        font: { size: 22, weight: 'bold' },
        color: '#333',
        padding: { top: 0, bottom: 20 },
      },
    },
    // Defining the range for the y-axis
    scales:{
      y:{
        ticks: {
          font: { size: 14, weight: 'bold' },
          color: '#333',
        },
      } ,
      x:{
        ticks: {
          font: { size: 14, weight: 'bold' },
          color: '#333',
        },
      }  
    },
    // Adding some style to the chart
    style: {
      marginBottom: '30px',
    },
  };

  // Filtering the mock data to get meter readings with hourly resolution for the selected meter
  const hourResolutionData = mockData.filter((data) => data.meter_id === props.id && data.resolution === "Hour");

  // Extracting the values from the hourly meter readings data and flattening them into a single array
  const hourResolutionValues = hourResolutionData.map((data) => Object.values(data.values)).flat();

  // Data for the hourly meter reading bar chart
  const dataHourly = {
    labels : ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00','07:00', '08:00', '09:00','10:00', '11:00', '12:00', '13:00','14:00', '15:00', '16:00','17:00', '18:00', '19:00', '20:00', '21:00','22:00', '23:00', '00:00' ],
    datasets: [
      {
        label: 'kWt',
        data: hourResolutionValues,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      }
    ],
  };

  // Options for the weekly meter reading bar chart
  const optionsWeekly = {
    responsive: true,
    plugins: {
      legend: {
        position: true,
        labels: {
          font: { size: 14, weight: 'bold' },
          color: '#333',
          padding: 10,
        },
      },
      title: {
        display: true,
        text: 'Indicators for the week',
        font: { size: 24, weight: 'bold' },
        color: '#333',
        padding: { top: 30, bottom: 20 },
      },
    },
    // Defining the range for the y-axis
    scales:{
      y:{
        ticks: {
          font: { size: 14, weight: 'bold' },
          color: '#333',
        },
      },
      x:{
        ticks: {
          font: { size: 14, weight: 'bold' },
          color: '#333',
        },
      }    
    }
  };

  // Filtering the mock data to get meter readings with daily resolution for the selected meter
  const weekResolutionData = mockData.filter((data) => data.meter_id === props.id && data.resolution === "Day");

  // Extracting the values from the weekly meter readings data and flattening them into a single array
  const weekResolutionValues = weekResolutionData.map((data) => Object.values(data.values)).flat();

  // Data for the weekly meter reading bar chart
  const dataWeekly= {
        labels : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
        datasets: [
        {
          label: 'kWt',
          data: weekResolutionValues,
          backgroundColor: 'blue',
          tension: 0.5
        }
      ],
    };

  return (
    <div className="main-block">
        <h4 className="meter-header">METER №: {props.id}</h4>
        <div className="graphBlock">
        <Bar options={optionsHourly} data={dataHourly} />
        <hr />
        <Bar options={optionsWeekly} data={dataWeekly} />
        </div>
    </div>
  )
}

export default ViewDiagrams