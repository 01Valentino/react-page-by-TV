import { TiWorld } from "react-icons/ti";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import image1 from "./images/image-1.jpg";
import image2 from "./images/image-2.jpg";
import image3 from "./images/image-3.jpg";
import Travel from "./assets/components/travel";
const App = () => {
  return (
    <>
      <div className="font-sans">
        <div className="bg-red-500 text-white flex gap-2  py-4 justify-center">
          <TiWorld className="text-4xl" />
          <h4 className="text-2xl">my travel journal</h4>
        </div>
        <div className="  flex flex-col justify-center">
          <div className="max-w-3xl mx-auto mb-5 mt-10 pl-10 pr-10 md:flex gap-10 items-center">
            <img
              src={image1}
              alt=""
              className="rounded-2xl flex justify-center h-75 max-w-2xs"
            />
            <div className="max-w-sm">
              <Travel
                country={"JAPAN"}
                view={"View on Google Maps"}
                place={"Mount Fuji"}
                date={"12 Jan, 2023 - 24 Jan, 2023"}
                text={
                  "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
                }
              />
            </div>
          </div>
          <div className="max-w-3xl mx-auto mb-5 mt-5 pl-10 pr-10 md:flex gap-10 items-center">
            <img
              src={image2}
              alt=""
              className="rounded-2xl flex justify-center h-75 max-w-2xs"
            />
            <div className="max-w-sm">
              <Travel
                country={"AUSTRALIA"}
                view={"View on Google Maps"}
                place={"Sydney Opera House"}
                date={"27 May, 2023 - 8 Jun, 2023"}
                text={
                  "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
                }
              />
            </div>
          </div>
          <div className="max-w-3xl mx-auto mb-5 mt-10 pl-10 pr-10 md:flex gap-10 items-center">
            <img
              src={image3}
              alt=""
              className="rounded-2xl flex justify-center h-75 max-w-2xs"
            />
            <div className="max-w-sm">
              <Travel
                country={"NORWAY"}
                view={"View on Google Maps"}
                place={"Geirangerfjord"}
                date={"01 Oct, 2024 - 18 Nov, 2024"}
                text={
                  "The Geiranger Fjord is a fjord in the Sunnmere region of More og Romsdal country, Norway. It is located entirely in the Stranda Municipality."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
