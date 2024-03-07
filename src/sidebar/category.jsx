
import Input from "../components/input"
const Category = ({handleradiochange})=>{
    return <>
    <div className="category">
        <h2 className="text-xl font-bold">Category</h2>
        <div className="categories flex flex-col gap-1 mt-2">
            
        <Input
        value=''
        title='All'
        name='type'
        handleclick={handleradiochange}
        />
        <Input
        value='sneakers'
        title='Sneakers'
        name='type'
        handleclick={handleradiochange}
        />
        <Input
        value='flats'
        title='Flats'
        name='type'
        handleclick={handleradiochange}
        />
        <Input
        value='sandals'
        title='Sandals'
        name='type'
        handleclick={handleradiochange}
        />
        <Input
        value='heels'
        title='Heels'
        name='type'
        handleclick={handleradiochange}
        />
            
        </div>
    </div>
    </>
}


export default Category