import Button from "../components/button"

const Recommend = ({handlebuttonchange})=>{
    return <>
    <section className="recommend w-fit lg:ml-[235px] ">
        <div className="recommend-cont w-full p-4">
            <h1 className="font-bold text-2xl">Recommended</h1>
            <div className="btn-list mt-7 flex flex-wrap gap-2 ">
                <Button value='' title='All' onClickHandle={handlebuttonchange}/>
                <Button  title='Puma' value='Puma'onClickHandle={handlebuttonchange}/>
                <Button  title='Nike' value='Nike'onClickHandle={handlebuttonchange}/>
                <Button  title='Adidas' value='Adidas'onClickHandle={handlebuttonchange}/>
                <Button  title='Vans' value='Vans'onClickHandle={handlebuttonchange}/>
            </div>
        </div>
    </section>
    
    </>
}

export default Recommend