import { protocols } from "@/lib/constants";
import { Link } from "react-router-dom";

const GridProtocol = () => {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-8 sm:gap-14 mt-20">
        {protocols.map((item) => (
          <Link to={item.link} target="_blank" key={item.id} className="bg-white/50 flex-col-center gap-2 cursor-pointer border-2 border-artMidBlue-50 rounded-full w-40 h-40 sm:w-48 sm:h-48 p-4 ">
            <h4 className="font-barlow text-base text-center font-semibold text-black">{item.text}</h4>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default GridProtocol;
