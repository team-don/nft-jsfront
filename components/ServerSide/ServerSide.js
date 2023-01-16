import {dehydrate, QueryClient} from "react-query";
import {crawling} from "../../pages/api/crawling";

export async function getServerSideProps() {

    const queryClient = new QueryClient();

    await queryClient.prefetchInfiniteQuery(
        "crawling",
        async () => await crawling());

    return {
        props: {
            dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
        }
    }
}