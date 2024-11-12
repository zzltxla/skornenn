interface Props {
    className?: string;
}

export function MenuLine () {
    return (
        <div className="w-[1.125rem] h-[2px] bg-black ">
        </div>
    )
}

export const MenuBurgerIcon = ({className}:Props) => {
    return (
        <button 
        className="bg-none flex flex-col gap-[0.31rem] items-center justify-center w-fit h-fit">
            <MenuLine/>
            <MenuLine/>
            <MenuLine/>
        </button>
    )
}