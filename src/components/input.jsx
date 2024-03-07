const Input = ({name,value,title,handleclick,color}) => {
    return <>
        <label htmlFor="all" className="flex list-cont select-none relative pl-10">
            <input type="radio" id="all" name={name} value={value} onChange={handleclick}  className="absolute cursor-pointer w-full opacity-0" />
            <span className={"font-semibold checkmark absolute rounded-full top-0 left-0 bg-[#eee] h-[20px] w-[20px]"} style={{backgroundColor:color}}></span>{title}
        </label>

    </>
}

export default Input