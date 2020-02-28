import React, { Fragment } from "react";
import Task from "./Task";

const List = () => {

  const TASKS = [
    { name: 'Choose Platform', status: true },
    { name: 'Choose Colors', status: false },
    { name: 'Choose Pay Platforms', status: false },
    { name: 'Choose Hosting', status: true },
  ];

  return (
    <Fragment>
      <h2>Project: Online Shop</h2>
      <ul className="listado-tareas">
        {
          TASKS.length === 0 ?
            (<li className="tarea"><p>Don't have any tasks</p></li>)
          :
            (TASKS.map( task => (
              <Task
                task={task}
              />
            )))
        }
      </ul>

      <button
        type="button"
        className="btn btn-eliminar"
      >
        Delete Project &times;
      </button>
    </Fragment>
  )
};

export default List;