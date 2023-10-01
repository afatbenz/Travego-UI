import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../partials/Sidebar";

export default function Home() {
    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            <Sidebar />
            <div className="bg-teal-200">Header</div>
            <div>{<Outlet />}</div>
            <p>This is footer</p>
        </div>
    )
}