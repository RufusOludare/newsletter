"use client";

import { useState, Fragment } from "react";
import ListItems from "./components/listItems";

export default function Home() {
  return (
    <main className="backBackground bg-white h-screen">
      <div className="whiteBackground h-full bg-white flex flex-col gap-8 md:flex md:flex-row-reverse md:justify-center md:items-center  md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 md:gap-8 md:w-[750px] md:h-[500px] md:p-4 md:pl-10 md:rounded-3xl md:shadow-lg md:shadow-black sha">
        <div className="orangeSection">
          <img
            src="/illustration-sign-up-mobile.svg"
            className="w-full md:hidden"
          />
          <img
            src="/illustration-sign-up-desktop.svg"
            className="hidden md:block md:h-full md:w-[500px] md:object-cover"
          />
        </div>

        <div className="innerWhiteSection  mx-8 md:mx-0 md:w-[550px] ">
          <h1 className="text-4xl font-bold mb-4 md:text-5xl">Stay updated!</h1>
          <p className="mb-6 md:mb-4 md:text-sm">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ListItems
            text="Product discovery and building what matters"
            imageSrc="/icon-list.svg"
          />
          <ListItems
            text="Measuring to ensure updates are a success"
            imageSrc="/icon-list.svg"
          />
          <ListItems
            text="And much more!"
            imageSrc="/icon-list.svg"
            className="mb-8 md:mb-6"
          />

          <p className="mb-2 text-xs font-semibold">Email address</p>
          <input
            type="text"
            placeholder="email@company.com"
            className="w-full rounded-md h-12 p-6 border-2 mb-6 md:h-12"
            required
          />
          <button className="text-center w-full border bg-slate-800 text-white font-bold text-sm h-14 rounded-lg md:h-12">
            Subscribe to monthly newsletter
          </button>
        </div>
      </div>
    </main>
  );
}
