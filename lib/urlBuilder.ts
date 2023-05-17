
import configs from "../configs.json";

const urlBuilder = (src: string) => {
    const fullUrl = configs.STRAPI_URL + src
    return fullUrl
}

export default urlBuilder;