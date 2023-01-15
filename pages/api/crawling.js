import axios from "axios";

export const crawling = async () => {

    const { data } = await axios.get(
        `https://5nft.link/crawling/data`
    );

    return data;
}