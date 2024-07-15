import React from "react";
import TopBar from "../TopBar";
import MiddleBar from "./MiddleBar";
import BottomBar from "./BottomBar";
import MobileMiddleNav from "./MobileNav";

const NavBar = () => {
    return (
        <>
            <TopBar />
            <MiddleBar />
            <MobileMiddleNav />
            <BottomBar />
        </>
    );
};

export default NavBar;
