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

export default function AttendanceShift(props) {
  const options = {
    plugins: {
      title: {
        display: false,
        text: "Chart.js Bar Chart - Stacked",
      },
      label: {
        display: false,
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
          stepSize: 8,
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
        label: "Late Check-in",
        data: props?.unAttends?.map((value) => value),
        backgroundColor: "#fc2d2f",
        type: "bar",
      },
      {
        label: "Non Schedule",
        data: props?.nonSchedules?.map((value) => value),
        backgroundColor: "#5c5c61",
        type: "bar",
      },
      {
        label: "Total Attend",
        data: props?.totalAttends?.map((value) => value),
        backgroundColor: "#4f81af",
        type: "line",
        yAxisID: "y2",
      },
      {
        label: "Total Un-attend",
        data: props?.totalUnAttends?.map((value, index) => value),
        // barValue: props?.totalUnAttends?.map((value) => value),
        backgroundColor: "#ffbc79",
        type: "line",
        yAxisID: "y2",
      },
      {
        label: "Total Late Check-in",
        data: props?.totalLateCheckIns?.map((value, index) => value),
        // barValue: props?.totalLateCheckIns?.map((value) => value),
        backgroundColor: "#fc2d2f",
        type: "line",
        yAxisID: "y2",
      },
      {
        label: "Total Non Schedule",
        data: props?.totalNonSchedules?.map((value, index) => value),
        // barValue: props?.totalNonSchedules?.map((value) => value),
        backgroundColor: "#5c5c61",
        type: "line",
        yAxisID: "y2",
      },
    ],
  };

  return (
    <div className="flex flex-1 flex-col gap-y-2">
      <div className="bg-white rounded-md p-3 flex flex-col h-fit w-[690px]">
        {/* Title */}
        <span className="text-[#344767] font-medium text-sm">
          Attendance - Per Shift
        </span>

        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
