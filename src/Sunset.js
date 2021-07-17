import React from "react";

export default function Sunrise(props) {
  let hours = props.date.getUTCHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getUTCMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {hours}:{minutes}
    </div>
  );
}
