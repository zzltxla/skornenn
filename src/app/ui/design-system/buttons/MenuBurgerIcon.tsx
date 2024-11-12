interface Props {
    className?: string;
}

export function MenuLine () {
    return (
        <div className="w-[2.125rem] h-[3px] bg-black ">
        </div>
    )
}

export const MenuBurgerIcon = ({className}:Props) => {
    return (
        <button 
        className="bg-none flex flex-col gap-[1rem] items-center justify-center">
            <MenuLine/>
            <MenuLine/>
            <MenuLine/>
        </button>
    )
}