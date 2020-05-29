import React from "react";
import Search from "../Search/Search.jsx";
import TableCard from "../TableCard/TableCard.jsx";


const UserDashboard = () => (
        <div>
            <Search />
            <div className="site-section courses-title  " id="courses-section">
            <TableCard />
            </div>
        </div>
);
export default UserDashboard;
