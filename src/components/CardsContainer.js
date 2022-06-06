import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dataWeather } from "../features/dataWeather";
import InforCard from "./InfoCard";

const CardsContainer = () => {
  const apiKey = "ddb1d54458c1471aa6fab0b4cb187fa6";
  const dataCityFromRedux = useSelector((state) => state.dataUser.value.city);
  const dataCountryFromRedux = useSelector(
    (state) => state.dataUser.value.country
  );
  const dataDailyWeather = useSelector(
    (state) => state.dataUser.value.dailyWeather
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (dataCityFromRedux === "" && dataCountryFromRedux === "") {
          return;
        }
        if (dataDailyWeather) {
          const response = await fetch(
            `https://api.weatherbit.io/v2.0/current?&city=${dataCityFromRedux}&country=${dataCountryFromRedux}&key=${apiKey}`
          );
          if (response.status >= 400) {
            throw new Error(
              `Something happend. error ${response.status}: ${response.statusText}`
            );
          }
          const dataResponse = await response.json();
          const dataWeatherFetched = { ...dataResponse.data[0] };
          dispatch(dataWeather(dataWeatherFetched));
        } else {
          const response = await fetch(
            `https://api.weatherbit.io/v2.0/forecast/hourly?city=${dataCityFromRedux}&country=${dataCountryFromRedux}&key=${apiKey}`
          );
          if (response.status >= 400) {
            throw new Error(
              `Something happend. error ${response.status}: ${response.statusText}`
            );
          }
          const dataResponse = await response.json();
          const dataWeatherFetched = { ...dataResponse.data[0] };
          dispatch(dataWeather(dataWeatherFetched));
        }
      } catch (error) {
        return error;
      }
    };
    fetchData();
  }, [dataCityFromRedux, dataCountryFromRedux]);

  return (
    <section className="flex justify-center">
      <InforCard />
    </section>
  );
};

export default CardsContainer;
