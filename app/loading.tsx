import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-8">
        <div className="xl:col-span-4 lg:col-span-2 col-span-1 shadow-xl h-[750px] rounded-2xl">
          <div className="flex flex-rows justify-between h-full">
            <div className="w-full rounded-2xl relative">
              <Skeleton style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
            </div>
          </div>
        </div>
        <div className="shadow-xl rounded-2xl">
          <div className="relative rounded-2xl relative">
            <Skeleton style={{ width: "100%", height: "250px", objectFit: "cover" }}/>
          </div>
        </div>
        <div className="shadow-xl rounded-2xl">
          <div className="relative rounded-2xl relative">
            <Skeleton
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="shadow-xl rounded-2xl">
          <div className="relative rounded-2xl relative">
            <Skeleton
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="shadow-xl rounded-2xl">
          <div className="relative rounded-2xl relative">
            <Skeleton
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
