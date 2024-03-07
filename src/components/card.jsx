
import { AiFillStar } from "react-icons/ai"
import { BsBagFill } from "react-icons/bs";
const Card = ({img,title,star,reviews,prevPrice,newPrice})=>{



    return<>
     <div className="card-item flex flex-col gap-2 border-2 border-gray-200  w-fit px-2 py-5 rounded-md sm:gap-3 cursor-pointer">
                        <img src={img} className="h-[100px]" width={200}  alt="" />
                        <h3 className="prod-name font-semibold">{title}</h3>
                        <div className="ratings flex text-orange-600">{star}{star}{star}{star}</div>
                        <p className="newp flex gap-2"><del>{prevPrice}</del>{newPrice}</p>
                        <p className="text-red-500"><BsBagFill/></p>
                    </div>
    
    </>
}

export default Card