"use client";

import clsx from "clsx";
import Link from "next/link";

interface DesktopItemProps {
    label: string
    icon: any
    href: string
    onClick?: () => void
    active?: boolean
}

const DesktopItem = ({
    label,
    href,
    icon: Icon,
    active,
    onClick
}: DesktopItemProps) => {

    const handleClick = () => {
        if (onClick) {
            return onClick();
        }
    }


    return ( 
        <button onClick={handleClick}>
            <Link href={href} className={clsx(`
                    group
                    flex
                    gap-x-3
                    rounded-md
                    p-3
                    text-sm
                    leading-6
                    font-semibold
                    text-gray-500
                    hover:text-black
                    hover:bg-gray-100
                    `,
                    active && "bg-gray-100 text-black"
                )}>
                <Icon className={clsx(active && "text-amber-500", "h-6 w-6")} />
                {/* <span className="sr-only">{label}</span> */}
            </Link>
        </button>
     );
}
 
export default DesktopItem;