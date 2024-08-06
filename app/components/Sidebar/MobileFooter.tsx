"use client";

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";

const MobileFooter = () => {

    const routes= useRoutes();

    const { isOpen} = useConversation();

    if(isOpen) {
        return null;
    }

    return ( 
        <div className="border-t-[1px] bg-white fixed bottom-0 z-40 w-full py-2 px-4 lg:hidden flex justify-between items-center">
            
            {routes.map((item) => (
                <MobileItem
                    key={item.label}
                    href={item.href}
                    label={item.label}
                    icon={item.icon}
                    active={item.active}
                    onClick={item.onClick}
                />
            ))}
        </div>
     );
}
 
export default MobileFooter;