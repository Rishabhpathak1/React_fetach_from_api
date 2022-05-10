import { FaTrashAlt } from 'react-icons/fa';
import { Container, Row, Col, Table, Tab, Tabs, Nav } from "react-bootstrap";

const LineItem = ({ item, handleCheck, handleDelete }) => {
    return (
        <>
            <td md={6}>
            {item.userId}
            </td>
            <td md={6}>
            {item.title}
            </td>
            <td>
            <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
                aria-label={`Delete ${item.item}`}
            />
            </td>
            
        </>
    )
}

export default LineItem
