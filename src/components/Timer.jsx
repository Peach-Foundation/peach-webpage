import { useCallback, useEffect, useState } from "react";
const Timer = () => {
   const [countDownTime, setCountDownTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDifference = countDownTime - currentTime;

    if (timeDifference <= 0) {
      clearInterval(timerInterval);
      setCountDownTime({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
    } else {
      const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000))
        .toString()
        .padStart(2, "0");
      const hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
        .toString()
        .padStart(2, "0");
      const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))
        .toString()
        .padStart(2, "0");
      const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000)
        .toString()
        .padStart(2, "0");

      setCountDownTime({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  };

  let timerInterval;

  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      customDate.getFullYear(),
      customDate.getMonth(),
      customDate.getDate() + 6,
      customDate.getHours(),
      customDate.getMinutes(),
      customDate.getSeconds() + 1
    );

    timerInterval = setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, []);

  useEffect(() => {
    startCountDown();
    return () => {
      clearInterval(timerInterval);
    };
  }, [startCountDown, timerInterval]);

  return (
    <div className="flex justify-center items-center  ">
      <div className="mx-5 sm:p-6 p-4 rounded-md flex justify-center flex-col gap-6 shadow-[5px_5px_50px_rgba(47,46,60,1)]">
        
        <div className=" grid grid-cols-4 gap-12 sm:px-4">
          <div className="flex  flex-col justify-center items-center gap-2">
            <span className="  flex justify-center items-center  text-[#112D32] text-3xl font-semibold rounded-md">
              {countDownTime?.days}
            </span>
            <span className="text-sm text-black font-bold">
              {countDownTime?.days == 1 ? "Day" : "Days"}
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <span className="  text-[#112D32] text-3xl font-semibold rounded-md">
              {countDownTime?.hours}
            </span>
            <span className="text-sm text-black font-bold">
              {countDownTime?.hours == 1 ? "Hour" : "Hours"}
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <span className="  text-[#112D32] text-3xl font-semibold rounded-md">
              {countDownTime?.minutes}
            </span>
            <span className="text-sm text-black font-bold">
              {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
            </span>
          </div>
          <div className="flex  flex-col justify-center items-center gap-3">
            <span className=" text-[#112D32] text-3xl font-semibold rounded-md">
              {countDownTime?.seconds}
            </span>
            <span className="text-sm text-black font-bold">
              {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Timer;