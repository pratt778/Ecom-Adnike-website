
import { AiFillStar } from "react-icons/ai"
import { BsBagFill } from "react-icons/bs";
// import data from "../data/data_prod";
const Card = ()=>{



    return<>
     <div className="card-item flex flex-col gap-2 border-2 border-gray-200  w-fit px-2 py-5 rounded-md sm:gap-3">
                        <img src="https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg" className="w-[160px]" alt="" />
                        <h3 className="prod-name font-semibold">Nike Air Monarch Iv </h3>
                        <div className="ratings flex text-orange-600"><AiFillStar/><AiFillStar/><AiFillStar/></div>
                        <p className="newp flex gap-2"><del>$140</del>$200</p>
                        <p className="text-red-500"><BsBagFill/></p>
                    </div>
    
    </>
}

export default Card