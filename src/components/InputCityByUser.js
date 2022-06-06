import "../App.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { dataFetchReducer } from "../features/inputCity";
import { MdKeyboardArrowDown } from "react-icons/md";
import {MdKeyboardArrowUp} from "react-icons/md"
import { IconContext } from "react-icons";

const InputCityByUser = () => {
  const [dataUser, setDataUser] = useState({
    city: "",
    country: "",
    dailyWeather:true,
    forecastWeather:false
  });
  const [dailyWeather, setDailyWeather] = useState(true);
  const [forecastWeather, setForecastWeather] = useState(false);
  const dispatch = useDispatch();

  const handlerCityInput = (e) => {
    setDataUser({ ...dataUser, city: e.target.value });
  };

  const handlerCountryInput = (e) => {
    setDataUser({ ...dataUser, country: e.target.value });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
  };

  const handlerDispatchStateReducer = () => {
    dispatch(dataFetchReducer(dataUser));
  };

  const handlerDailyWeather = () => {
    setDailyWeather(true);
    setForecastWeather(false)
    setDataUser({
      ...dataUser, 
      dailyWeather:true, 
      forecastWeather:false
    })
  };

  const handlerForecastWeather = () => {
    setForecastWeather(true);
    setDailyWeather(false)
    setDataUser({
      ...dataUser, 
      dailyWeather:false, 
      forecastWeather:true
    })
  };

  return (
    <form
      onSubmit={handlerSubmit}
      className={`${dailyWeather ? "bg-[#9BA3EB]": "bg-[#FEF9A7]"} flex flex-col w-11/12 md:w-7/12 lg:w-5/12 mx-auto md:mx-0 mt-8 rounded-xl form-shadow pt-4 pl-8 pb-4 pr-8`}
    >
      <IconContext.Provider value={{ style: { marginTop: ".2rem" } }}>
        <div className="flex gap-8 mb-2">
          <button className={`text-sm flex ${dailyWeather && "font-semibold"}`} onClick={handlerDailyWeather}>
            Current Weather {dailyWeather ? <MdKeyboardArrowDown/>: <MdKeyboardArrowUp/>}
          </button>
          <button className={`text-sm flex ${forecastWeather && "font-semibold"}`} onClick={handlerForecastWeather}>
            Forecast Weather 48/hours~ {forecastWeather ? <MdKeyboardArrowDown/>: <MdKeyboardArrowUp/>}
          </button>
        </div>
      </IconContext.Provider>
      <input
        type="text"
        placeholder="Enter your city..."
        value={dataUser.city}
        onChange={handlerCityInput}
        className="rounded my-2 p-1 input-shadow md:w-full"
      />
      <input
        type="text"
        placeholder="Enter the country of the city..."
        value={dataUser.country}
        onChange={handlerCountryInput}
        className="rounded my-2 p-1 input-shadow md:w-full"
      />
      <button
        onClick={handlerDispatchStateReducer}
        className="bg-[#EB5353] rounded-lg mt-3 p-1 w-2/6 button-shadow self-end font-nunito"
      >
        Go
      </button>
    </form>
  );
};

export default InputCityByUser;
