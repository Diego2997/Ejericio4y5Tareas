import ItemTareas from './ItemTareas';
import {ListGroup }from 'react-bootstrap';

const ListaTareas = ({tareas,borrarTarea}) => {
    return (
        <ListGroup>
            {tareas.map((tarea,id) => <ItemTareas tarea={tarea} borrarTarea={borrarTarea} key={id}/>)}
        </ListGroup>
    );
};

export default ListaTareas;