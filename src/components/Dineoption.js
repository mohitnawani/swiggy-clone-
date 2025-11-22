import {stackedDetails} from "../utils/appcard.js";
import Dinecard from "./Dinecard.js";

export function Dineoption() {
  return (
    <div className=" w-[80%] mx-auto mt-10">
      <p className="text-2xl font-bold mb-5">"Discover best restaurant on Dineout"</p>

      <div className=" flex gap-4 pb-3 overflow-x-auto">
        {stackedDetails.map((dinedata) => ( 
            <Dinecard key={dinedata.info.id} dinedata={dinedata} />))}
      </div>
    </div>
  );
}
