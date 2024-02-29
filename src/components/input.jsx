const Input = () => {
    return <>
        <label htmlFor="all" className="flex gap-1 list-cont select-none relative pl-10">
            <input type="radio" id="all" name="btn_rd" className="absolute cursor-pointer opacity-0" />
            <span className="font-semibold checkmark absolute rounded-full top-0 left-0 bg-[#eee] h-[20px] w-[20px]"></span>All
        </label>

    </>
}

export default Input