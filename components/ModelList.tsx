"use client";

import urlBuilder from "@/lib/urlBuilder";
import { Model } from "@/types/model";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import ModelScene from "./ModelScene";

type Props = {
  models: Model[];
};

export default function ModelList({ models }: Props) {
  const [showAllModels, setShowAllModels] = useState(false);
  const visibleModels = showAllModels ? models : models.slice(0, 5);

  const handleSeeMoreClick = () => {
    setShowAllModels(true);
  };

  const handleSeeLessClick = () => {
    setShowAllModels(false);
  };

  return (
    <>
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-8">
        {visibleModels.map((model: Model) =>
          model.attributes.featured ? (
            <div
              className="xl:col-span-4 lg:col-span-2 col-span-1 shadow-xl h-[750px] rounded-2xl"
              key={model.id}
            >
              <div className="flex flex-rows justify-between h-full">
                <div className="w-full rounded-l-2xl relative">
                  <ModelScene
                    url={model.attributes.file.data.attributes.url}
                    isFeatured={true}
                  />
                  <div className="absolute inset-0 flex flex-col justify-center text-white text-center">
                    <h1 className="font-bold xl:text-5xl lg:text-2xl text-4xl shadow-neutral-950 ">
                      Full Hero Canvas
                    </h1>
                    <h3 className="font-light text-sm lg:text-md xl:text-xl">with TailwindCSS</h3>
                  </div>
                  <div className="absolute inset-0 mt-auto lg:ml-auto xl:w-3/12 lg:w-1/3 min-w-[150px] h-2/5 lg:h-auto bg-purple-600/75 lg:px-8 lg:py-16 p-6 lg:rounded-tr-2xl lg:rounded-b-none rounded-b-2xl">
                    <div className="lg:w-[150px] lg:h-[150px] lg:pb-5">
                      <Image
                        className="lg:w-full lg:h-full w-12 h-auto object-cover"
                        src={urlBuilder(
                          model.attributes.qrcode.data.attributes.url
                        )}
                        width={150}
                        height={150}
                        alt="Model QR Code"
                      />
                    </div>
                    <h2 className="py-3 lg:py-6 font-bold xl:text-5xl lg:text-2xl text-4xl shadow-neutral-950 text-white">
                      {model.attributes.name}
                    </h2>
                    <ReactMarkdown className="text-sm lg:text-md xl:text-xl shadow-neutral-950 text-white lg:pb-8 pb-4">
                      {`${model.attributes.description
                        .toString()
                        .substring(0, 100)}...`}
                    </ReactMarkdown>
                    <Link href={`/models/${model.attributes.slug}`}>
                      <p className="btn normal-case">View More</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Link
              href={`/models/${model.attributes.slug}`}
              key={model.id}
              className="shadow-xl hover:scale-105 hover:border-purple-600 transition bg-zinc-200 border-2 border-white rounded-2xl"
            >
              <div className="relative rounded-2xl relative">
                <Image
                  src={urlBuilder(
                    model.attributes.thumbnail.data.attributes.url
                  )}
                  alt={model.attributes.name}
                  width={250}
                  height={300}
                  className="h-64 w-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 flex flex-col justify-center text-white text-center ">
                  <h2 className="font-bold xl:text-5xl lg:text-2xl text-4xl shadow-neutral-950 ">
                    {model.attributes.name.toString().length > 10
                      ? `${model.attributes.name
                          .toString()
                          .substring(0, 10)}...`
                      : model.attributes.name}
                  </h2>
                </div>
                <div className="absolute inset-5 ml-auto w-[50px] h-[50px] bg-black ">
                  <Image
                    className="w-full h-full object-cover"
                    src={urlBuilder(
                      model.attributes.qrcode.data.attributes.url
                    )}
                    width={50}
                    height={50}
                    alt="Model QR Code"
                  />
                </div>
              </div>
            </Link>
          )
        )}
      </div>
      <div className="mx-auto my-8 p-2 text-center">
        <button
          className="btn rounded-2xl text-2xl lg:text-3xl font-bold bg-purple-600 text-black w-[250px] hover:text-white normal-case"
          onClick={showAllModels ? handleSeeLessClick : handleSeeMoreClick}
        >
          {showAllModels ? "See Less" : "See More"}
        </button>
      </div>
    </>
  );
}
