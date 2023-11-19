/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import HeaderComponent from "./components/Headers";
import ListTodayActivity from "./components/ListTodayActivity";
import AttendanceDaily from "./components/AttendanceDaily";
import AttendanceShift from "./components/AttendanceShift";
import { IoIosArrowDown, IoIosCard } from "react-icons/io";
import { AiFillShop } from "react-icons/ai";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { SlOrganization } from "react-icons/sl";
import { BiSolidCube } from "react-icons/bi";

export default function Home() {
  const [data1, setData1] = useState({});
  const [data2, setData2] = useState({});
  const [labelDateAttendanceDaily, setLabelDateAttendanceDaily] = useState([]);
  const [labelTimeAttendancePerShift, setLabelTimeAttendancePerShift] =
    useState([]);
  const [dailyAttend, setDailyAttend] = useState([]);
  const [dailyUnAttend, setDailyUnAttend] = useState([]);
  const [dailyNonSchedule, setDailyNonSchedule] = useState([]);
  const [dailyAccumulationAttend, setDailyAccumulationAttend] = useState([]);
  const [dailyAccumulationUnAttend, setDailyAccumulationUnAttend] = useState(
    []
  );
  const [dailyAccumulationNonSchedule, setDailyAccumulationNonSchedule] =
    useState([]);
  const [perShiftAttend, setPerShiftAttend] = useState([]);
  const [perShiftUnAttend, setPerShiftUnAttend] = useState([]);
  const [perShiftLateCheckIn, setPerShiftLateCheckIn] = useState([]);
  const [perShiftNonSchedule, setPerShiftNonSchedule] = useState([]);
  const [perShiftTotalAttend, setPerShiftTotalAttend] = useState([]);
  const [perShiftTotalUnAttend, setPerShiftTotalUnAttend] = useState([]);
  const [perShiftTotalLateCheckIn, setPerShiftTotalLateCheckIn] = useState([]);
  const [perShiftTotalNonSchedule, setPerShiftTotalNonSchedule] = useState([]);

  const fetchData1 = async () => {
    try {
      const response = await fetch("/dummy chart interview 1.json");
      const jsonData = await response.json();

      setData1(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData2 = async () => {
    try {
      const response = await fetch("/dummy chart interview 2.json");
      const jsonData = await response.json();

      setData2(jsonData);

      // Attendance Daily
      const attendDailyArray = Object.entries(
        jsonData["Attendance Daily"].Attend
      ).map(([date, value]) => ({ date, value }));
      const unAttendDailyArray = Object.entries(
        jsonData["Attendance Daily"].Unattend
      ).map(([date, value]) => ({ date, value }));
      const nonScheduledDailyArray = Object.entries(
        jsonData["Attendance Daily"]?.["Non Schedule"]
      ).map(([date, value]) => ({ date, value }));
      const accumulationAttendDailyArray = Object.entries(
        jsonData["Attendance Daily"]?.["Accumulation Attend"]
      ).map(([date, value]) => ({ date, value }));
      const accumulationUnAttendDailyArray = Object.entries(
        jsonData["Attendance Daily"]?.["Accumulation Un-attend"]
      ).map(([date, value]) => ({ date, value }));
      const accumulationNonScheduleDailyArray = Object.entries(
        jsonData["Attendance Daily"]?.["Accumulation Non Schedule"]
      ).map(([date, value]) => ({ date, value }));

      // Attendance Per Shift
      const attendPerShiftArray = Object.entries(
        jsonData["Attendance Per Shift"].Attend
      ).map(([timeAndPosition, value]) => ({ timeAndPosition, value }));
      const unAttendPerShiftArray = Object.entries(
        jsonData["Attendance Per Shift"]?.["Un-attend"]
      ).map(([timeAndPosition, value]) => ({ timeAndPosition, value }));
      const lateCheckInPerShiftArray = Object.entries(
        jsonData["Attendance Per Shift"]?.["Late Check-in"]
      ).map(([timeAndPosition, value]) => ({ timeAndPosition, value }));
      const nonSchedulePerShiftArray = Object.entries(
        jsonData["Attendance Per Shift"]?.["Non Schedule"]
      ).map(([timeAndPosition, value]) => ({ timeAndPosition, value }));
      const totalAttendPerShiftArray = Object.entries(
        jsonData["Attendance Per Shift"]?.["Total Attend"]
      ).map(([timeAndPosition, value]) => ({ timeAndPosition, value }));
      const totalUnAttendPerShiftArray = Object.entries(
        jsonData["Attendance Per Shift"]?.["Total Un-attend"]
      ).map(([timeAndPosition, value]) => ({ timeAndPosition, value }));
      const totalLateCheckInPerShiftArray = Object.entries(
        jsonData["Attendance Per Shift"]?.["Total Late Check-in"]
      ).map(([timeAndPosition, value]) => ({ timeAndPosition, value }));
      const totalNonSchedulePerShiftArray = Object.entries(
        jsonData["Attendance Per Shift"]?.["Total Non Schedule"]
      ).map(([timeAndPosition, value]) => ({ timeAndPosition, value }));

      // State Daily
      setLabelDateAttendanceDaily(
        attendDailyArray.map((dateParam) => dateParam.date)
      );
      setDailyAttend(attendDailyArray.map((attendParam) => attendParam.value));
      setDailyUnAttend(
        unAttendDailyArray.map((unAttendParam) => unAttendParam.value)
      );
      setDailyNonSchedule(
        nonScheduledDailyArray.map(
          (nonScheduledParam) => nonScheduledParam.value
        )
      );
      setDailyAccumulationAttend(
        accumulationAttendDailyArray.map(
          (accumulationAttendParam) => accumulationAttendParam.value
        )
      );
      setDailyAccumulationUnAttend(
        accumulationUnAttendDailyArray.map(
          (accumulationUnAttendParam) => accumulationUnAttendParam.value
        )
      );
      setDailyAccumulationNonSchedule(
        accumulationNonScheduleDailyArray.map(
          (accumulationNonScheduleParam) => accumulationNonScheduleParam.value
        )
      );

      // State Per Shift
      setLabelTimeAttendancePerShift(
        attendPerShiftArray.map(
          (timeAndPositionParam) => timeAndPositionParam.timeAndPosition
        )
      );
      setPerShiftAttend(
        attendPerShiftArray.map((attendParam) => attendParam.value)
      );
      setPerShiftUnAttend(
        unAttendPerShiftArray.map((unAttendParam) => unAttendParam.value)
      );
      setPerShiftLateCheckIn(
        lateCheckInPerShiftArray.map(
          (lateCheckInParam) => lateCheckInParam.value
        )
      );
      setPerShiftNonSchedule(
        nonSchedulePerShiftArray.map(
          (nonScheduleParam) => nonScheduleParam.value
        )
      );
      setPerShiftTotalAttend(
        totalAttendPerShiftArray.map(
          (totalAttendParam) => totalAttendParam.value
        )
      );
      setPerShiftTotalUnAttend(
        totalUnAttendPerShiftArray.map(
          (totalUnAttendParam) => totalUnAttendParam.value
        )
      );
      setPerShiftTotalLateCheckIn(
        totalLateCheckInPerShiftArray.map(
          (totalLateCheckInParam) => totalLateCheckInParam.value
        )
      );
      setPerShiftTotalNonSchedule(
        totalNonSchedulePerShiftArray.map(
          (totalNonScheduleParam) => totalNonScheduleParam.value
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData1();
  }, [Object.keys(data1).length]);

  useEffect(() => {
    fetchData2();
  }, [Object.keys(data2).length]);

  return (
    <div className="flex flex-1 flex-row bg-[#edeeef] text-black h-screen">
      <div className="flex flex-col relative w-[100px] bg-[#991b1b] pr-3 pt-[89px]">
        <button
          type="button"
          className="absolute top-4 -right-2 rounded-full ring ring-[#f8f9fa] bg-[#67748e] w-[20px] h-[20px] items-center flex justify-center"
        >
          <IoIosArrowDown />
        </button>

        {/* Menues */}
        <div className="flex flex-col flex-1 items-start overflow-y-scroll hide-scrollbar">
          {/* Menu */}
          <button
            type="button"
            className="relative flex items-center justify-center w-full px-5 py-2 hover:bg-[#f53939] rounded-md"
          >
            <div className="flex items-center justify-center rounded-md bg-white w-full h-10">
              <AiFillShop size={20} color="#454b76" />
            </div>

            <IoIosArrowDown
              color="#7c6e75"
              className="absolute my-auto right-0"
            />
          </button>

          {/* Menu */}
          <button
            type="button"
            className="relative flex items-center justify-center w-full px-5 py-2 hover:bg-[#f53939] rounded-md"
          >
            <div className="flex items-center justify-center rounded-md bg-white w-full h-10">
              <HiClipboardDocumentList size={20} color="#454b76" />
            </div>

            <IoIosArrowDown
              color="#7c6e75"
              className="absolute my-auto right-0"
            />
          </button>

          {/* Menu */}
          <button
            type="button"
            className="relative flex items-center justify-center w-full px-5 py-2 hover:bg-[#f53939] rounded-md"
          >
            <div className="flex items-center justify-center rounded-md bg-white w-full h-10">
              <SlOrganization size={20} color="#454b76" />
            </div>
          </button>

          {/* Menu */}
          <button
            type="button"
            className="relative flex items-center justify-center w-full px-5 py-2 hover:bg-[#f53939] rounded-md"
          >
            <div className="flex items-center justify-center rounded-md bg-white w-full h-10">
              <IoIosCard size={20} color="#454b76" />
            </div>
          </button>

          {/* Menu */}
          <button
            type="button"
            className="relative flex items-center justify-center w-full px-5 py-2 hover:bg-[#f53939] rounded-md"
          >
            <div className="flex items-center justify-center rounded-md bg-white w-full h-10">
              <BiSolidCube size={20} color="#454b76" />
            </div>
          </button>

          {/* Menu */}
          <button
            type="button"
            className="relative flex items-center justify-center w-full px-5 py-2 hover:bg-[#f53939] rounded-md"
          >
            <div className="flex items-center justify-center rounded-md bg-white w-full h-10">
              <AiFillShop size={20} color="#454b76" />
            </div>

            <IoIosArrowDown
              color="#7c6e75"
              className="absolute my-auto right-0"
            />
          </button>

          {/* Menu */}
          <button
            type="button"
            className="relative flex items-center justify-center w-full px-5 py-2 hover:bg-[#f53939] rounded-md"
          >
            <div className="flex items-center justify-center rounded-md bg-white w-full h-10">
              <AiFillShop size={20} color="#454b76" />
            </div>

            <IoIosArrowDown
              color="#7c6e75"
              className="absolute my-auto right-0"
            />
          </button>

          {/* Menu */}
          <button
            type="button"
            className="relative flex items-center justify-center w-full px-5 py-2 hover:bg-[#f53939] rounded-md"
          >
            <div className="flex items-center justify-center rounded-md bg-white w-full h-10">
              <AiFillShop size={20} color="#454b76" />
            </div>
          </button>

          {/* Menu */}
          <button
            type="button"
            className="relative flex items-center justify-center w-full px-5 py-2 hover:bg-[#f53939] rounded-md"
          >
            <div className="flex items-center justify-center rounded-md bg-white w-full h-10">
              <AiFillShop size={20} color="#454b76" />
            </div>
          </button>

          {/* Menu */}
          <button
            type="button"
            className="relative flex items-center justify-center w-full px-5 py-2 hover:bg-[#f53939] rounded-md"
          >
            <div className="flex items-center justify-center rounded-md bg-white w-full h-10">
              <AiFillShop size={20} color="#454b76" />
            </div>
          </button>

          {/* Menu */}
          <button
            type="button"
            className="relative flex items-center justify-center w-full px-5 py-2 hover:bg-[#f53939] rounded-md"
          >
            <div className="flex items-center justify-center rounded-md bg-white w-full h-10">
              <AiFillShop size={20} color="#454b76" />
            </div>

            <IoIosArrowDown
              color="#7c6e75"
              className="absolute my-auto right-0"
            />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <HeaderComponent />

        <div className="flex flex-row gap-x-1 pl-3 pr-1 py-5 overflow-scroll">
          {/* List Today Activity */}
          <ListTodayActivity data1={data1} />

          <div className="flex flex-col gap-y-2">
            <AttendanceDaily
              labels={labelDateAttendanceDaily}
              attends={dailyAttend}
              unAttends={dailyUnAttend}
              nonSchedules={dailyNonSchedule}
              accumulationAttends={dailyAccumulationAttend}
              accumulationUnAttends={dailyAccumulationUnAttend}
              accumulationNonSchedules={dailyAccumulationNonSchedule}
            />

            <AttendanceShift
              labels={labelTimeAttendancePerShift}
              attends={perShiftAttend}
              unAttends={perShiftUnAttend}
              nonSchedules={perShiftNonSchedule}
              totalAttends={perShiftTotalAttend}
              totalUnAttends={perShiftTotalUnAttend}
              totalLateCheckIns={perShiftTotalLateCheckIn}
              totalNonSchedules={perShiftTotalNonSchedule}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
