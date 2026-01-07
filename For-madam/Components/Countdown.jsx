import React, { useEffect, useState } from "react";

function Countdown() {
  const PomiBirthday = new Date(new Date("2026-09-08").setHours(0, 0, 0, 0));
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const currentDate = Date.now();
      const diff = PomiBirthday - currentDate;
      const daysRemaining = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hoursRemaining = Math.floor(
        (diff / (1000 * 60 * 60 * 24) - daysRemaining) * 24
      );
      const minutesRemaining = Math.floor(
        ((diff / (1000 * 60 * 60 * 24) - daysRemaining) * 24 - hoursRemaining) *
          60
      );
      const secondsRemaining = Math.floor(
        (((diff / (1000 * 60 * 60 * 24) - daysRemaining) * 24 -
          hoursRemaining) *
          60 -
          minutesRemaining) *
          60
      );
      setDays(daysRemaining);
      setHours(hoursRemaining);
      setMinutes(minutesRemaining);
      setSeconds(secondsRemaining);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative bg-gray-900 rounded-lg">
      <div className="absolute bg-gray-700 rounded-lg -top-1 -left-1"></div>
    </div>
  );
}

export default Countdown;
