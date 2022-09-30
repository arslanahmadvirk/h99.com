import React from "react";

import Sidebar from "../components/Sidebar/Sidebar.js";
import DashboardNav from "../components/Sidebar/DashboardNav.js";

export default function Admin({ children }) {
  return (
    <div className="flex flex-col md:flex-row md:px-10 justify-center px-10">
      <DashboardNav />
      <Sidebar />
      <div className="relative">
        {/* Header */}
        <div className="px-4 md:px-10 mx-auto">{children}</div>
      </div>
    </div>
  );
}
