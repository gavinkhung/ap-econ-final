import React, { useContext, useState } from "react";

import Context from "./Context";

import Modal from "./Modal";
import Chart from "./Chart";
import ProductionPossibilityCurve from "./ProductionPossibilityCurve";

const App = () => {
  const { chartsData, setChartsData } = useContext(Context);
  return (
    <div className="bg-gray-100 p-4 w-full h-full space-y-4">
      <div className="space-y-2 mb-4">
        <h1 className="text-5xl font-extrabold ">
          Creative Economic Assignment
        </h1>
        <p className="text-3xl">Gavin Hung Period: 1</p>
      </div>
      <div className="flex justify-between">
        <div className="">
          <h2 className="text-xl text-center">Production Possibility Curve</h2>
          <Chart />
        </div>
        <div className="">
          <h2 className="text-xl text-center">Production Possibility Curve</h2>
          <ProductionPossibilityCurve />
        </div>
        <div className="">
          <h2 className="text-xl text-center">Production Possibility Curve</h2>
          <Chart />
        </div>
      </div>
      <button
        onClick={() => {
          setChartsData({
            ...setChartsData,
            production:
              chartsData["production"] < 1.5
                ? chartsData["production"] + 0.1
                : chartsData["production"],
          });
        }}
      >
        click
      </button>
    </div>
  );
};

const TextMessage = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div
        className="p-4 bg-gray-500 hover:bg-gray-600 cursor-pointer backdrop-blur-md filter rounded-3xl shadow"
        onClick={() => setOpenModal(true)}
      >
        <div className="flex flex-row space-x-2">
          <div className="">
            <img
              className="w-20 h-20 rounded-xl object-cover"
              src="https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?auto=format&fit=crop&w=1160&q=80"
              alt=""
            />
          </div>
          <div className="">
            <h3 className="text-md font-bold text-gray-100">Headline 1</h3>
            <p className="mt-0.5 text-sm text-gray-300">Deck 1</p>
          </div>
        </div>
      </div>
      <Modal openModel={openModal} setOpenModel={setOpenModal}>
        <div className="prose prose-lg">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A magni et
            quas incidunt delectus fugit quam praesentium cum est quidem!
            Consectetur saepe libero voluptas maiores incidunt dicta expedita
            eos reiciendis blanditiis a modi pariatur, recusandae est cupiditate
            autem? Facilis quis praesentium minima voluptatibus quisquam
            perferendis inventore officia ratione, fuga quos.
          </p>
          <blockquote>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
            laudantium. - John Doe
          </blockquote>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              asperiores.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              asperiores.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              asperiores.
            </li>
          </ul>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A magni et
            quas incidunt delectus fugit quam praesentium cum est quidem!
            Consectetur saepe libero voluptas maiores incidunt dicta expedita
            eos reiciendis blanditiis a modi pariatur, recusandae est cupiditate
            autem? Facilis quis praesentium minima voluptatibus quisquam
            perferendis inventore officia ratione, fuga quos.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default App;
