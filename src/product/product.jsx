import Card from "../components/card"
const Product = ({result})=>{
    return <>
        <section className="w-fit h-fit lg:ml-[235px]">
            <div className="product-container w-full p-2">
                <div className="cards flex flex-wrap gap-3 justify-start p-3">
                   {result}
                </div>
            </div>
        </section>
    </>
}


export default Product