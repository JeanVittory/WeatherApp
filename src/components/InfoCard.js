import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

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
    hour: "2-digit",
    minute: "2-digit",
  };

  //{el.fecha.toDate().toLocaleString("es", dateOptions)}

  return (
    <article className="w-1/4 backdrop-blur bg-[#F5E1DA]  rounded-xl  mt-16  form-shadow  flex  flex-col  divide-y divide-black">
      <div className=" flex justify-around items-center">
        <p className="font-nunito text-4xl">
          {dataWeather.temp}º
        </p>
        <img src={image} alt="" className="w-2/5"/>
      </div>
      <div className="w-full flex justify-center">
          <p>hola</p>
      </div>
      {/* <p className="font-nunito">{dataWeather.city_name}, {dataWeather.country_code}</p> */}
    </article>
  );
};

export default InforCard;
