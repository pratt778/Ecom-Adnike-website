import { useState } from "react";
import { AiFillHeart, AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {

    const [active, setActive] = useState(false);
    return <>
        <header className="w-full flex z-40 items-center justify-between sm:justify-around  p-3 border-b-2 border-gray-200">
           <a href="/"><h1 className="font-bold text-xl text-orange-500">Logo</h1></a>

            <div className="flex text-black sm:hidden cursor-pointer" onClick={()=>setActive(true)} >
                <AiOutlineMenu />
            </div>
            <nav className="hidden sm:flex w-[70%] justify-between transition-all duration-500 ease-in-out">
                <div className="text-container px-3 py-2 rounded-md  bg-gray-200 w-[250px] md:w-[350px] lg:w-[450px] xl:w-[550px]">
                    <input type="text" placeholder="Search Your Product Here...." className="bg-transparent w-full outline-none" />
                </div>

                <div className="profile-container flex items-center gap-6">
                    <a href="#" className="">
                        <AiFillHeart className="text-xl" />
                    </a>
                    <a href="#">
                        <AiOutlineShoppingCart className="text-xl" />
                    </a>
                    <a href="#">
                        <AiOutlineUser className="text-xl" />
                    </a>
                </div>
            </nav>

            <nav className={active?"sm:hidden fixed h-[100vh] bg-red-100 w-[70px] top-0 right-0 transition-all duration-300 ease-in-out":"sm:hidden fixed right-[-1000px]"}>
                <div className=" profile-container flex flex-col items-center gap-6 mt-10">
                    <button onClick={()=>setActive(!active)} className="cursor-pointer">
                        <AiOutlineClose className="text-2xl"/>
                    </button>

                    <a href="#" className="">
                        <AiFillHeart className="text-2xl" />
                    </a>
                    <a href="#">
                        <AiOutlineShoppingCart className="text-2xl" />
                    </a>
                    <a href="#">
                        <AiOutlineUser className="text-2xl" />
                    </a>
                </div>
            </nav>
        </header>


    </>
}


export default Nav;