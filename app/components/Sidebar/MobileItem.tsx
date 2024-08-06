"use client";

import Link from "next/link";
import clsx from "clsx";


interface MobileItemProps {
    label: string;
    icon: any;
    href: string;
    onClick?: () => void;
    active?: boolean;
}


const MobileItem = ({
    label,
    href,
    icon: Icon,
    active,
    onClick
}: MobileItemProps ) => {

    const handleClick = () => {
        if (onClick) {
            return onClick();
        }
    }

    return ( 
        <Link href={href} onClick={handleClick} className={clsx(`
            group flex gap-x-3 rounded-md p-4 justify-center w-full text-sm font-semibold leading-6 text-gray-500 hover:text-black hover:bg-gray-100`,
            active && "bg-gray-100 text-black"
        )}>
            <Icon className={clsx(active && "text-amber-500", "h-6 w-6")} />
        </Link>
     );
}
 
export default MobileItem;