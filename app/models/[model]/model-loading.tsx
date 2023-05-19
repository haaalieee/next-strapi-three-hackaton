import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ModelLoading() {
  return (
    <>
      <div className="text-sm breadcrumbs mb-10">
        <Skeleton style={{ width: "30%", height: "30px" }} />
      </div>
      <div className="grid items-center gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1fr_700px]">
        <div className="h-[50rem] rounded-2xl">
          <Skeleton
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="xl:px-10 px-4">
          <Skeleton style={{ height: "30px", width: "30%" }} />
          <Skeleton style={{ height: "100px", width: "80%" }} />
          <Skeleton style={{ height: "20px", width: "50%" }} />
          <div className="divider"></div>
          <Skeleton count={4} />
        </div>
      </div>
    </>
  );
}
