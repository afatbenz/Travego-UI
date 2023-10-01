import React from "react";
import {FcWorkflow} from "react-icons/fc"

export default function Sidebar() {
    return (
        <div className="bg-teal-900 w-60 p-3 flex flex-col text-white">
            <div className="flex item-center gap-2 px-1 py-3"> 
                <FcWorkflow fontSize={24}/>
                <span className="text-lg">TraveGO</span>
            </div>
            <div className="flex-1">Top Part</div>
            <div>Bottom Part</div>
        </div>
    )
}