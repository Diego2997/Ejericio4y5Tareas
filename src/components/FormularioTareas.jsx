import {Button,Form} from 'react-bootstrap';
import ListaTareas from './ListaTareas';
import { useState} from 'react';

const FormularioTareas = () => {
    const [tarea,setTarea] = useState("")
    const [tareas,setTareas] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault()
        setTareas([...tareas,tarea])
        setTarea("")
    }
    return (
        <>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control type="text" placeholder="Ingrese una tarea" onChange={(e)=>setTarea(e.target.value)}/>
          <Button type='submit'>Agregar</Button>
        </Form.Group>
      </Form>
      <ListaTareas tareas={tareas}/>
      </>
    );
};

export default FormularioTareas;