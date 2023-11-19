import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

export default function AttendanceDaily(props) {
  const options = {
    plugins: {
      title: {
        display: false,
        text: "Chart.js Bar Chart - Stacked",
      },
      legend: {
        display: true,
        position: "bottom",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        position: "bottom",
      },
      y: {
        stacked: true,
        position: "left",
        suggestedMin: 0,
        suggestedMax: 100,
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 20,
        },
      },
      y2: {
        position: "right",
        suggestedMin: 0,
        suggestedMax: 75,
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 25,
        },
      },
    },
  };

  const labels = props?.labels;

  const data = {
    labels,
    datasets: [
      {
        label: "Attend",
        data: props?.attends?.map((value) => value),
        backgroundColor: "#4f81af",
        type: "bar",
      },
      {
        label: "Un-attend",
        data: props?.unAttends?.map((value) => value),
        backgroundColor: "#ffbc79",
        type: "bar",
      },
      {
        label: "Non Schedule",
        data: props?.nonSchedules?.map((value) => value),
        backgroundColor: "#5c5c61",
        type: "bar",
      },
      {
        label: "Accumulation Attend",
        data: props?.accumulationAttends?.map((value) => value),
        backgroundColor: "#86b4a9",
        type: "line",
        yAxisID: "y2",
      },
      {
        label: "Accumulation Un-attend",
        data: props?.accumulationUnAttends?.map((value, index) => value),
        barValue: props?.accumulationUnAttends?.map((value) => value),
        backgroundColor: "#82853b",
        type: "line",
        yAxisID: "y2",
      },
      {
        label: "Accumulation Non Schedule",
        data: props?.accumulationNonSchedules?.map((value, index) => value),
        barValue: props?.accumulationNonSchedules?.map((value) => value),
        backgroundColor: "#39737c",
        type: "line",
        yAxisID: "y2",
      },
    ],
  };

  return (
    <div className="flex flex-1 flex-col gap-y-2">
      <div className="bg-white rounded-md p-3 flex flex-col h-fit w-[690px]">
        {/* Title and Filtering */}
        <div className="flex flex-row items-center justify-between w-full">
          {/* Title */}
          <span className="text-[#344767] font-medium text-sm">
            Attendance - Daily
          </span>

          {/* Wrap Filtering */}
          <div className="flex items-center justify-end gap-x-3">
            <button
              type="button"
              className="bg-red-600 text-white text-sm rounded-full px-3 hover:bg-red-500"
            >
              1 W
            </button>

            <div className="flex flex-row gap-x-0">
              <button
                type="button"
                className="bg-white text-black text-sm rounded-l-full border px-1 hover:border hover:border-black"
              >
                October
              </button>

              <button
                type="button"
                className="bg-white text-black text-sm rounded-r-full border px-1 hover:border hover:border-black"
              >
                2023
              </button>
            </div>
          </div>
        </div>

        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
