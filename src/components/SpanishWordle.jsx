import { useEffect, useState } from "react";
import { Outlet } from "react-router";

import SpanishNavbar from "./nav/SpanishNavbar";

export default function Wordle() {
    return(
        <div>
            <SpanishNavbar />
            <div style = {{margin: "1rem"}}>
                <Outlet />
            </div>
        </div>
    )
}