import { getModel } from "@/lib/strapi-utils";
import Link from "next/link";
import { Suspense } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import ModelScene from "../../../components/ModelScene";
import Loading from "./loading";

type Props = {
  params: { model: string };
};

export const revalidate = 60;
export const dynamic = "force-dynamic";

export default async function Model({ params }: Props) {
  const model = await getModel(params.model);

  return (
    <>
      <div className="text-sm breadcrumbs mb-10">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <p>{model.attributes.name}</p>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loading />}>
        <div className="grid items-center gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1fr_700px]">
          <div className="h-[50rem] bg-gray-200 rounded-2xl">
            <ModelScene
              url={model.attributes.file.data.attributes.url}
              isFeatured={false}
            />
          </div>
          <div className="xl:px-10 px-4">
            <p className="pb-2">Category</p>
            <h2 className="text-5xl font-bold pb-6">{model.attributes.name}</h2>
            <div className="rating">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-purple-600"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-purple-600"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-purple-600"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-purple-600"
                checked
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-purple-600"
              />
            </div>
            <div className="divider"></div>
            <ReactMarkdown>{model.attributes.description}</ReactMarkdown>
          </div>
        </div>
      </Suspense>
    </>
  );
}
