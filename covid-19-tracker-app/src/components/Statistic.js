import React from "react";
import { useSelector } from "react-redux";
const Statistic = () => {
  const data = useSelector((state) => state.covid.covidInfo);
  console.log(data);
  return (
    <div className="statisticContainer">
      <div className="part blue">
        <div className="fontType">Infected </div>
        <div className="value">
          {data.confirmed?.value
            ?.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
        <div className="update">Last Updated</div>
        <div className="at">at : </div>
        <div className="date">
          {new Date(data.lastUpdate)
            .toLocaleDateString(undefined, {
              weekday: "short",
              month: "short",
              year: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
              second: "2-digit",
            })
            .replace(/,/g, "")}
        </div>
        <div className="covid">Number of infected cases of COVID-19 </div>
        <div className="country">{data.deaths.detail.slice(41, 43)}</div>
        <div className="lastBlue"></div>
      </div>
      <div className="part green">
        <div className="fontType">Recovered </div>
        <div className="value">
          {data.recovered?.value
            ?.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
        <div className="update">Last Updated</div>
        <div className="at">at : </div>
        <div className="date">
          {new Date(data.lastUpdate)
            .toLocaleDateString(undefined, {
              weekday: "short",
              month: "short",
              year: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
              second: "2-digit",
            })
            .replace(/,/g, "")}
        </div>
        <div className="covid">Number of recoveries from COVID-19 </div>
        <div className="country">{data.deaths.detail.slice(41, 43)}</div>
        <div className="lastGreen"></div>
      </div>
      <div className="part red">
        <div className="fontType">Deaths </div>
        <div className="value">
          {data.deaths?.value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
        <div className="update">Last Updated</div>
        <div className="at">at : </div>
        <div className="date">
          {new Date(data.lastUpdate)
            .toLocaleDateString(undefined, {
              weekday: "short",
              month: "short",
              year: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
              second: "2-digit",
            })
            .replace(/,/g, "")}
        </div>
        <div className="covid">Number of deaths caused by COVID-19 </div>
        <div className="country">{data.deaths.detail.slice(41, 43)}</div>
        <div className="lastRed"></div>
      </div>
      <div className="part yellow">
        <div className="fontType">Active </div>
        <div className="value">
          {(parseInt(data.confirmed?.value) - parseInt(data.deaths?.value))
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
        <div className="update">Last Updated</div>
        <div className="at">at : </div>
        <div className="date">
          {new Date(data.lastUpdate)
            .toLocaleDateString(undefined, {
              weekday: "short",
              month: "short",
              year: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
              second: "2-digit",
            })
            .replace(/,/g, "")}
        </div>
        <div className="covid">Number of active cases of COVID-19 </div>
        <div className="country">{data.deaths.detail.slice(41, 43)}</div>
        <div className="lastYellow"></div>
      </div>
    </div>
  );
};

export default Statistic;
