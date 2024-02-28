const Category = ()=>{
    return <>
    <div className="category">
        <h2 className="text-xl font-bold">Category</h2>
        <div className="categories flex flex-col gap-1 mt-2">
            <label htmlFor="all" className="flex gap-1 list-cont select-none relative pl-10">
                <input type="radio" id="all" name="btn_rd" className="absolute cursor-pointer opacity-0" />
                <span className="font-semibold checkmark absolute rounded-full top-0 left-0 bg-[#eee] h-[20px] w-[20px]"></span>All
            </label>
            <label htmlFor="sn" className="flex gap-1 list-cont select-none relative pl-10">
                <input type="radio" id="sn" name="btn_rd" className="absolute cursor-pointer opacity-0" />
                <span className="font-semibold checkmark absolute rounded-full top-0 left-0 bg-[#eee] h-[20px] w-[20px]"></span>Sneakers
            </label>
            <label htmlFor="sd" className="flex gap-1 list-cont select-none relative pl-10">
                <input type="radio" id="sd" name="btn_rd" className="absolute cursor-pointer opacity-0" />
                <span className="font-semibold checkmark absolute rounded-full top-0 left-0 bg-[#eee] h-[20px] w-[20px]"></span>Sandals
            </label>
            <label htmlFor="hl" className="flex gap-1 list-cont select-none relative pl-10">
                <input type="radio" id="hl" name="btn_rd" className="absolute cursor-pointer opacity-0" />
                <span className="font-semibold checkmark absolute rounded-full top-0 left-0 bg-[#eee] h-[20px] w-[20px]"></span>Heels
            </label>
            <label htmlFor="ft" className="flex gap-1 list-cont select-none relative pl-10">
                <input type="radio" id="ft" name="btn_rd" className="absolute cursor-pointer opacity-0" />
                <span className="font-semibold checkmark absolute rounded-full top-0 left-0 bg-[#eee] h-[20px] w-[20px]"></span>Flats
            </label>
           
            
        </div>
    </div>
    </>
}


export default Category