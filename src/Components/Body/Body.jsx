import { useDebounce } from "../../hooks/useDebounce";
import { useFetch } from "../../hooks/useFetch";
import { useField } from "../../hooks/useField";
import { Rain, Cloud, Search, Search2, Sunny } from "../../index";
import "./Body.css";

function Body() {
  const [onChange, val] = useField("");
  const debouncedVal = useDebounce(val);
  const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${debouncedVal}&appid=5fddaf96dc8b6f52eee1222fb88eb9cb&units=metric`;
  const [Data, isLoading] = useFetch(currentUrl);
  const WeatherDetails = [
    {
      status: "HUMIDITY",
      seed: [Data?.main?.humidity],
      key: "Z",
      unit: "%",
    },
    {
      status: "VISIBILITY",
      seed: [Data?.visibility],
      key: "X",
      unit: "m",
    },
    {
      status: "AIR PRESSURE",
      seed: [Data?.main?.pressure],
      key: "C",
      unit: "hPa",
    },
    {
      status: "WIND",
      seed: [Data?.wind?.speed],
      key: "V",
      unit: "m/s",
    },
  ];

  return (
    <div className="BodyContainer">
      <input onChange={onChange} type="text" placeholder="Search location..." />
      <p className="BodyContainer-Location">
        {" "}
        {isLoading
          ? "Waiting for data..."
          : Data.name
          ? Data.name + ", " + Data?.sys?.country
          : "No data found"}{" "}
      </p>
      <div className="BodyContainer-tampAndImg">
        <h1 className="BodyContainer-MainTemp">
          {" "}
          {isLoading
            ? "Waiting for data..."
            : Data?.main
            ? Math.trunc(Data?.main?.temp) + "°"
            : "No data available"}{" "}
        </h1>
        <img src={Data?.weather?.main === "snow" ? Search : Sunny} alt="" />
      </div>
      <div className="BodyContainer-Card-Info">
        {WeatherDetails.map((status, seed) => {
          return (
            <div className="BodyContainer-Card-Info-Template">
              <p className="BodyContainer-Card-Info-Template-InfoP" key={seed}>
                {" "}
                {status.status}{" "}
              </p>
              <p
                className="BodyContainer-Card-Info-Template-InfoP"
                key={status.key}
              >
                {" "}
                {Data?.main?.temp ? status.seed + "  " + status.unit : " "}{" "}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
