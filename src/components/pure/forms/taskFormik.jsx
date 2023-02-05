import React from 'react';
import {Formik, Field , Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { LEVELS } from '../../../models/levels.enum';

const taskSchema = Yup.object().shape(
    {
        name: Yup
                    .string()
                    .required('The task name is required'),
        description: Yup
                    .string()
                    .required('The description of the task is required'),
        level: Yup
                    .string()
                    .oneOf([LEVELS.NORMAL,LEVELS.URGENT,LEVELS.BLOCKING], 'You must select the level of the task')
                    .required('The level of the task is required')
    }
)

const TaskFormik = () => {
    const initialValues = {
        name: '',
        description: '',
        completed: false,
        level: LEVELS.NORMAL
    }
    return (
        <div style={{backgroundColor:'yellow', width:'400px',margin:'30px',border:'solid',padding:'10px'}}>
            <h4>Crear Tareas</h4>
            <Formik
                initialValues={initialValues}
                
                validationSchema={taskSchema}

                onSubmit={ async(values)=>{
                    await new Promise( (r)=>setTimeout(r,1000));
                    alert(JSON.stringify(values,null,2))
                }}
            >
            {({
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur }) => (
                    <Form>
                        <label htmlFor='name'>Task Name</label>
                        <Field id="name" type="text" name="name" placeholder="The task name"/>
                            {/* Task name errors */}
                            {
                                errors.name && touched.name &&
                                (
                                    <ErrorMessage name='name' component='div'></ErrorMessage>
                                )
                            }           
                        <label htmlFor='description'>Description</label>             
                        <Field id="description" type="text" name="description" placeholder="Description of the task"/>
                            {/* Description errors */}
                            {
                                errors.description && touched.description &&
                                (
                                    <ErrorMessage name='description' component='div'></ErrorMessage>
                                )
                            }
                        <select id="level" onChange={handleChange} name="level" defaultValue={LEVELS.NORMAL}>
                            <option value={LEVELS.NORMAL}>Normal</option>
                            <option value={LEVELS.URGENT}>Urgente</option>
                            <option value={LEVELS.BLOCKING}>Blocking</option>
                        </select>
                        <br/>
                        <button type="submit">Add Task</button>
                            {isSubmitting ? (<p>Adding the new task...</p>): null}
                    </Form>
                )}

            </Formik>
        </div>
    );
}

export default TaskFormik;
