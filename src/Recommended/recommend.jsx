const Recommend = ()=>{
    return <>
    <section className="recommend w-fit lg:ml-[235px] ">
        <div className="recommend-cont w-full p-4">
            <h1 className="font-bold text-2xl">Recommended</h1>
            <div className="btn-list mt-7 flex flex-wrap gap-2 ">
                <button className="border-gray-200 border-2 p-2 rounded-md">All Products</button>
                <button className="border-gray-200 border-2 p-2 rounded-md">Nike</button>
                <button className="border-gray-200 border-2 p-2 rounded-md">Addidas</button>
                <button className="border-gray-200 border-2 p-2 rounded-md">Puma</button>
                <button className="border-gray-200 border-2 p-2 rounded-md">Vans</button>
            </div>
        </div>
    </section>
    
    </>
}

export default Recommend