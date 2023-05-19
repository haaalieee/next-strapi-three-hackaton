import ModelList from "@/components/ModelList";
import { getModels } from "@/lib/strapi-utils";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const models = await getModels();

  return <Suspense fallback={<Loading/>}><ModelList models={models} /></Suspense>;
}
