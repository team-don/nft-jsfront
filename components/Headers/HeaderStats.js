import React from "react";
import axios from "axios";
// import { useQuery } from "react-query";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { crawling } from "pages/api/crawling";
import { getServerSideProps } from "components/ServerSide/ServerSide"

// components
import CardStats from "components/Cards/CardStats.js";

// const job = async () => {
//   const getData = async () => {
//     const resp = await axios.get("https://5nft.link/crawling/data")
//     return resp.data
//   }
//   const query = useQuery("todos", getData);
//   return <pre>{JSON.stringify(query, null, 2)}</pre>;
// }
// export async function getServerSideProps() {
//
//   const queryClient = new QueryClient();
//
//   await queryClient.prefetchInfiniteQuery(
//       "crawling",
//       async () => await crawling());
//
//   return {
//     props: {
//       dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
//     }
//   }
// }

export default function HeaderStats() {
  // getServerSideProps()
  const { isLoading, error, data } = useQuery(['crawling'],() =>
          crawling(),
      {
        keepPreviousData: true,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      }
  );
  if (isLoading) {
    return (
        <>
          {/* Header */}
          <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
            <div className="px-4 md:px-10 mx-auto w-full">
              <div>
                {/* Card stats */}
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardStats
                        statSubtitle="1"
                        statTitle=""
                        statArrow="up"
                        statPercent="3.48"
                        statPercentColor="text-emerald-500"
                        statDescripiron="Since last month"
                        statIconName="far fa-chart-bar"
                        statIconColor="bg-red-500"
                    />
                  </div>
                  <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardStats
                        statSubtitle="2"
                        statTitle=""
                        statArrow="down"
                        statPercent="3.48"
                        statPercentColor="text-red-500"
                        statDescripiron="Since last week"
                        statIconName="fas fa-chart-pie"
                        statIconColor="bg-orange-500"
                    />
                  </div>
                  <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardStats
                        statSubtitle="3"
                        statTitle=""
                        statArrow="down"
                        statPercent="1.10"
                        statPercentColor="text-orange-500"
                        statDescripiron="Since yesterday"
                        statIconName="fas fa-users"
                        statIconColor="bg-pink-500"
                    />
                  </div>
                  <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardStats
                        statSubtitle="4"
                        statTitle=""
                        statArrow="up"
                        statPercent="12"
                        statPercentColor="text-emerald-500"
                        statDescripiron="Since last month"
                        statIconName="fas fa-percent"
                        statIconColor="bg-lightBlue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    );
  }
  console.log(data)
  console.log(isLoading)
  console.log(error)
  // let promise = job().json;
  return (
    <>
      {/* Header */}
      <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle={data[0].word}
                  statTitle={data[0].count}
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                    statSubtitle={data[1].word}
                    statTitle={data[1].count}
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                    statSubtitle={data[2].word}
                    statTitle={data[2].count}
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                    statSubtitle={data[3].word}
                    statTitle={data[3].count}
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


