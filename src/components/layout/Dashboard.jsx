import React from "react";
import {Link} from "react-router-dom"

export default function Dashboard() {
    return (
        <div>
            <h1>This is Dashboard Page, click here to visit <Link to="/services" > here,</Link></h1>
        </div>
    )
}