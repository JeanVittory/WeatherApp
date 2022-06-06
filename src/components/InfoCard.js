import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { RiMapPinLine } from "react-icons/ri";
import { IconContext } from "react-icons";

const InforCard = () => {
  const dataFromRedux = useSelector((state) => state.dataWeather);
  const dataWeather = { ...dataFromRedux.data };
  console.log(dataWeather);
  const [image, setImage] = useState("");

  useEffect(() => {
    //const date = new Date().getHours();
    const fetchImage = async () => {
      try {
        const response = await import(
          `../assets/icons/${dataWeather.weather.icon}.png`
        );
        setImage(response.default);
      } catch (error) {
        return error;
      }
    };
    fetchImage();
  }, [dataFromRedux]);

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const currentDate = new Date().toLocaleDateString("en", dateOptions);

  return (
    <article className="w-1/4 backdrop-blur bg-[#F5E1DA]  rounded-xl  mt-16  form-shadow  flex  flex-col  divide-y divide-black">
      <div className=" flex flex-wrap justify-between items-center p-2">
        <p className="font-nunito text-4xl">{dataWeather.temp}º</p>
        <img src={image} alt="" className="w-2/5" />
        <p className="font-nunito text-sm">{dataWeather.weather.description}</p>
      </div>
      <div className="w-full flex flex-col justify-start p-2 mb-2">
        <p className="font-nunito text-xs">{currentDate}</p>
        <IconContext.Provider value={{ style: {} }}>
          <div className="flex gap-1 mt-1">
            <RiMapPinLine />
            <span className="uppercase font-nunito font-semibold">
              {dataWeather.city_name}, {dataWeather.country_code}
            </span>
          </div>
        </IconContext.Provider>
      </div>
    </article>
  );
};

export default InforCard;
