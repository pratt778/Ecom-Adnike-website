import Input from "../components/input"
const Price = ({handleradiochange})=>{
    return <>
      <div className="category">
        <h2 className="text-xl font-bold">Price</h2>
        <div className="categories flex flex-col gap-1 mt-2">
        <Input
        value='50'
        title='0-50'
        name='price'
        handleclick={handleradiochange}
        />
        <Input
        value='100'
        title='50-100'
        name='price'
        handleclick={handleradiochange}
        />
        <Input
        value='150'
        title='100-150'
        name='price'
        handleclick={handleradiochange}
        />
        <Input
        value='200'
        title='Over 150'
        name='price'
        handleclick={handleradiochange}
        />
       
            
        </div>
    </div>
    
    </>
}

export default Price