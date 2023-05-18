// @ts-nocheck
import { Model } from "@/types/model";
import configs from "../configs.json";

const qs = require('qs');
 
export async function getModels(): Promise<Model[]> {
  const res = await fetch(`${configs.STRAPI_URL}/api/models?populate=*`, { cache: 'no-store' });
  const models = await res.json();

  return models.data.map((attributes: Model) => attributes);
}

export async function getModel(slug: string): Promise<Model> {
  const params = qs.stringify({
    populate: "*",
    filter: { slug }
  })


  const res = await fetch(`${configs.STRAPI_URL}/api/models?${params}`, { cache: 'no-store' });
  const model = await res.json();

  return model.data.find((obj: { attributes: { slug: string }}) => obj.attributes.slug === slug);
}

