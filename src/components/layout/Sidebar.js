import React from "react";
import New from "../proyects/New";
import List from "../proyects/List";

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