import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ListTodayActivity(props) {
  const datasets1 = {
    // labels: ['On Duty', 'Total'],
    datasets: [
      {
        // label: '',
        data: [
          // 14, 20
          props?.data1?.["Card On Duty"]?.["On Duty"] || 0,
          props?.data1?.["Card On Duty"]?.["Total"] || 0,
        ],
        backgroundColor: ["#4f81af", "#ffbc79"],
        borderColor: ["#ffffff", "#ffffff"],
        borderWidth: 1,
      },
    ],
  };
  const datasets2 = {
    // labels: ['On Duty', 'Total'],
    datasets: [
      {
        // label: '',
        data: [
          // 14, 20
          props?.data1?.["Card Attendance"]?.["Attend"] || 0,
          props?.data1?.["Card Attendance"]?.["Total"] || 0,
        ],
        backgroundColor: ["#4f81af", "#ffbc79"],
        borderColor: ["#ffffff", "#ffffff"],
        borderWidth: 1,
      },
    ],
  };
  console.log("PROPS", props)
  return (
    <div className="flex flex-row border flex-wrap w-[410px] h-screen gap-x-2 gap-y-2 items-start">
      {/* Item Today On Duty */}
      <div className="flex flex-col rounded-md bg-white items-start max-w-[200px] max-h-[250px] w-full h-full p-3">
        <span className="text-[#f87a5f] text-sm font-medium">
          Today <span className="text-sm text-[#344767]">On Duty</span>
        </span>
        <div className="relative w-full h-full flex items-center justify-center">
          <div>
            <Doughnut
              data={datasets1}
              options={{
                responsive: true,
                maintainAspectRatio: false, // Set to false to customize width and height
                cutout: "75%",
              }}
            />
          </div>

          <div className="absolute w-full h-full top-1 flex items-center justify-center">
            <span className="text-2xl text-[#627593] font-semibold">
              {props?.data1?.["Card On Duty"]?.["On Duty"] || 0}
              /
              {props?.data1?.["Card On Duty"]?.["Total"] || 0}
            </span>
          </div>
        </div>
      </div>

      {/* Item Today Attendance */}
      <div className="flex flex-col rounded-md bg-white items-start max-w-[200px] max-h-[250px] w-full h-full p-3">
        <span className="text-[#f87a5f] text-sm font-medium">
          Today <span className="text-sm text-[#344767]">Attandance</span>
        </span>
        <div className="relative w-full h-full flex items-center justify-center">
          <div>
            <Doughnut
              data={datasets2}
              options={{
                responsive: true,
                maintainAspectRatio: false, // Set to false to customize width and height
                cutout: "75%",
              }}
            />
          </div>

          <div className="absolute w-full h-full top-1 flex flex-col items-center justify-center">
            <span className="text-xl text-[#627593] font-semibold">
              87.71%
            </span>

            <span className="text-[#344767] text-sm">{props?.data1?.["Card Attendance"]?.["Attend"] || 0}/{props?.data1?.["Card Attendance"]?.["Total"] || 0} Person</span>
          </div>
        </div>
      </div>

      {/* Item Today Feed / Activity */}
      <div className="flex flex-col rounded-md bg-white items-start max-w-[200px] max-h-[250px] w-full h-full p-3">
        <span className="text-[#f87a5f] text-sm font-medium">
          Today <span className="text-sm text-[#344767]">Feed / Activity</span>
        </span>

        <div className="w-full h-full flex flex-col items-center justify-center">
          <span className="text-5xl font-bold">{props?.data1?.["Card Feed Activity"]?.["Total feed"] || 0}</span>
          <span>
            OF <span className="text-green-500">{props?.data1?.["Card Feed Activity"]?.["Total person"] || 0}</span> PERSON
          </span>
        </div>
      </div>

      {/* Item Today Patrol */}
      <div className="flex flex-col rounded-md bg-white items-start max-w-[200px] max-h-[250px] w-full h-full p-3">
        <span className="text-[#f87a5f] text-sm font-medium">
          Today <span className="text-sm text-[#344767]">Patroli</span>
        </span>

        <div className="w-full h-full flex flex-col items-center justify-center">
          <span className="text-5xl font-bold">{props?.data1?.["Card Patrol"]?.["Total Patrol"] || 0}</span>
          <span className="text-[#344767]">Person</span>
        </div>
      </div>

      {/* Item Today Non Schedule */}
      <div className="flex flex-col rounded-md bg-white items-start max-w-[200px] max-h-[250px] w-full h-full p-3">
        <span className="text-[#f87a5f] text-sm font-medium">
          Today <span className="text-sm text-[#344767]">Non Schedule</span>
        </span>

        <div className="w-full h-full flex flex-col items-center justify-center">
          <span className="text-5xl font-bold">{props?.data1?.["Card Non Schedule"]?.["Total person"] || 0}</span>
          <span className="text-[#344767]">Person</span>
        </div>
      </div>

      {/* Item Today Non Geofence */}
      <div className="flex flex-col rounded-md bg-white items-start max-w-[200px] max-h-[250px] w-full h-full p-3">
        <span className="text-[#f87a5f] text-sm font-medium">
          Today <span className="text-sm text-[#344767]">Non Geofence</span>
        </span>

        <div className="w-full h-full flex flex-col items-center justify-center">
          <span className="text-5xl font-bold">{props?.data1?.["Card Non Geofence"]?.["Total person"] || 0}</span>
          <span className="text-[#344767]">Person</span>
        </div>
      </div>
    </div>
  );
}
