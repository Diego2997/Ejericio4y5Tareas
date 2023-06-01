import {Button,Form} from 'react-bootstrap';
import ListaTareas from './ListaTareas';
import { useState,useEffect} from 'react';

const FormularioTareas = () => {
    const tareasLocalStorage = JSON.parse(localStorage.getItem("listaTareas")) || []
    const [tarea,setTarea] = useState("")
    const [tareas,setTareas] = useState(tareasLocalStorage)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setTareas([...tareas,tarea])
        setTarea("")
    }

    const borrarTarea = (nombreTarea) =>{
      let copiaTareas = tareas.filter((itemTarea) => itemTarea !== nombreTarea)
      setTareas(copiaTareas)}


    useEffect(()=>{
      localStorage.setItem("listaTareas",JSON.stringify(tareas))
    },[tareas])
    return (
        <>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control type="text" placeholder="Ingrese una tarea" onChange={(e)=>setTarea(e.target.value)}/>
          <Button type='submit'>Agregar</Button>
        </Form.Group>
      </Form>
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea}/>
      </>
    );
};

export default FormularioTareas;