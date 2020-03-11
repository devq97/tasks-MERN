import React from "react";
import New from "../projects/New";
import List from "../projects/List";

const Sidebar = () => {
  return (
    <aside>
      <h1>MERN<span>Tasks</span></h1>

      <New />

      <div className="proyectos">
        <h2>Your Projects</h2>

        <List/>

      </div>
    </aside>
  )
};

export default Sidebar;