const Button=({value,onClickHandle,title})=>{
    return<button className="border-gray-200 border-2 p-2 rounded-md" onClick={onClickHandle} value={value}>{title}</button>
}

export default Button