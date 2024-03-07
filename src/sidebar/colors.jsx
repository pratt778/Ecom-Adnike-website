import Input from "../components/input"

const Colors = ({handleradiochange})=>{
    return <>
    <div className="category">
        <h2 className="text-xl font-bold">Colors</h2>
        <div className="categories flex flex-col gap-1 mt-2">

        <Input
        value=''
        title='All'
        name='col'
        handleclick={handleradiochange}
        color='darkcyan'
        />
        <Input
        value='red'
        title='Red'
        name='col'
        handleclick={handleradiochange}
        color='red'
        />
        <Input
        value='blue'
        title='Blue'
        name='col'
        handleclick={handleradiochange}
        color='blue'
        />
        <Input
        value='black'
        title='Black'
        name='col'
        handleclick={handleradiochange}
        color='black'
        />
        <Input
        value='green'
        title='Green'
        name='col'
        handleclick={handleradiochange}
        color='green'
        />
        <Input
        value='white'
        title='White'
        name='col'
        handleclick={handleradiochange}
        color='#ddd'
        />
           
            
        </div>
    </div>
    </>
}


export default Colors