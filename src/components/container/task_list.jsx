import React from 'react'
import { LEVELS } from '../../models/levels.enum'
import {Task} from '../../models/task.class'
import TaskComponent from '../pure/forms/task'

const TaskListComponents = (props)=>{
    const defaultTask = new Task('Example','Default description',false,LEVELS.NORMAL)
    const changeState = (id)=>{
        console.log('TODO Cambiar estadode una tarea')
    }
  return (
    <div>
        <div>
            <h1>Your Tasks:</h1>
        </div>
        {/*TODO Aplicar un For /map para renderizar una lislta*/}
        <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  )
}

export default TaskListComponents
