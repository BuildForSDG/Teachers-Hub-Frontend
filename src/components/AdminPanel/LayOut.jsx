import React from "react";
import {
} from "react-router-dom";
import { LeftSide } from "./LeftSide.jsx";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";

export const Layout = () => (
            <div>
                <div id="wrapper">
                    <LeftSide></LeftSide>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Header />
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
);

export default Layout;
