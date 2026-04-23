import { useEffect, useState } from "react";
import { Outlet } from "react-router";

import SpanishNavbar from "./nav/SpanishNavbar";

import SpanishWordleProvider from "./contexts/SpanishWordleContext";

export default function Wordle() {
    return(
        <SpanishWordleProvider>
            <div>
                <SpanishNavbar />
            <div style = {{margin: "1rem"}}>
                <Outlet />
            </div>
        </div>
        </SpanishWordleProvider>
    )
}