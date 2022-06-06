import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dataWeather } from "../features/dataWeather";
import InforCard from "./InfoCard";
import blooming from "../assets/blooming.svg";
import { SpinnerCircular } from 'spinners-react';

const CardsContainer = () => {
  const apiKey = "ddb1d54458c1471aa6fab0b4cb187fa6";
  const [quote, setQuote] = useState({});
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

  useEffect(() => {
    const fetchQuotes = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
          "X-RapidAPI-Key":
            "4331bbb705msh2fa0729ca113689p16cabejsn017ad6ba18d7",
        },
      };
      const response = await fetch(
        "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en",
        options
      );
      const dataQuote = await response.json();
      console.log(dataQuote);
      setQuote({
        author: dataQuote.originator?.name,
        content: dataQuote.content,
      });
    };
    fetchQuotes();
  }, []);

  return (
    <section className="flex justify-center">
      {dataCityFromRedux || dataCountryFromRedux ? (
        <InforCard />
      ) : quote.content ? (
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mx-10">
          <img
            src={blooming}
            alt="Blooming Girl"
            className=" w-1/2 md:w-2/6 mt-20"
          />
          <div className="bg-slate-200/70  md:w-5/12 lg:w-1/4 p-2 rounded-xl">
            <h3 className="">{quote.author}</h3>
            <q className="text-sm font-nunito">{quote.content}</q>
          </div>
        </div>
      ): (
        <div className="flex mt-40">
          <SpinnerCircular size={50} thickness={100} speed={100} color="rgba(172, 57, 57, 1)" secondaryColor="rgba(57, 101, 172, 0.44)" />
        </div>

      )}
    </section>
  );
};

export default CardsContainer;
