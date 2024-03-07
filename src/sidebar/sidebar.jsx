import Category from "./category";
import Price from "./price";
import Colors from "./colors";

const Sidebar = ({handleradiochange}) => {
    return <>
        <section className="sidebar max-lg:hidden fixed bg-white z-50 top-0 left-0 w-[245px] border-r-2  border-r-gray-200 h-full overflow-y-scroll">
            <div className="side-container h-full flex flex-col items-center mt-4">
                <h1 className="cartlogo text-2xl border-b-2 border-gray-200 w-full text-center pb-4">🛒</h1>
                <div className="filter flex p-3 flex-col gap-4 items-start w-full h-full ">
                <Category handleradiochange={handleradiochange} />
                <Price handleradiochange={handleradiochange} />
                <Colors handleradiochange={handleradiochange} />
            </div>
                </div>
        </section>
    </>
}

export default Sidebar;