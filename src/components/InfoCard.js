import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { RiMapPinLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import { SpinnerCircular } from "spinners-react";

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
    <>
      {image ? (
        <article className="w-5/12 md:w-1/2 lg:w-1/4 backdrop-blur bg-[#F5E1DA]  rounded-xl  mt-16  form-shadow  flex  flex-col  divide-y divide-black">
          <div className=" flex flex-wrap justify-between items-center p-2">
            <p className="font-nunito text-4xl">{dataWeather.temp}º</p>
            <img src={image} alt="" className="w-2/5" />
            <p className="font-nunito text-sm">
              {dataWeather.weather?.description}
            </p>
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
      ) : (
        <div className="flex mt-40">
          <SpinnerCircular
            size={50}
            thickness={100}
            speed={100}
            color="rgba(172, 57, 57, 1)"
            secondaryColor="rgba(57, 101, 172, 0.44)"
          />
        </div>
      )}
    </>
  );
};

export default InforCard;
