import ModelList from "@/components/ModelList";
import { getModels } from "@/lib/strapi-utils";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const models = await getModels();

  return <ModelList models={models} />;
}
