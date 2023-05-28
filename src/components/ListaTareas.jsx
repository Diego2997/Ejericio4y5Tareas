import ItemTareas from './ItemTareas';
import {ListGroup }from 'react-bootstrap';

const ListaTareas = ({tareas}) => {
    return (
        <ListGroup>
            {tareas.map((tarea,id) => <ItemTareas tarea={tarea} key={id}/>)}
        </ListGroup>
    );
};

export default ListaTareas;