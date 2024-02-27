const Category = ()=>{
    return <>
    <div className="category">
        <h2 className="text-xl font-bold">Category</h2>
        <div className="categories flex flex-col gap-1 mt-2">
            <label htmlFor="all" className="flex gap-1">
                <input type="radio" id="all" name="btn_rd" />
                <span className="font-semibold">All</span>
            </label>
            <label htmlFor="snk" className="flex gap-1 ">
                <input type="radio" id="snk" name="btn_rd" />
                <span className="font-semibold">Sneakers</span>
            </label>
            <label htmlFor="ft" className="flex gap-1">
                <input type="radio" id="ft" name="btn_rd" />
                <span className="font-semibold">Flats</span>
            </label>
            <label htmlFor="hl" className="flex gap-1">
                <input type="radio" id="hl" name="btn_rd" />
                <span className="font-semibold">Heels</span>
            </label>
            <label htmlFor="sd" className="flex gap-1">
                <input type="radio" id="sd" name="btn_rd" />
                <span className="font-semibold">Sandals</span>
            </label>
            
        </div>
    </div>
    </>
}


export default Category