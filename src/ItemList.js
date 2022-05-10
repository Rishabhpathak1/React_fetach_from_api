import LineItem from './LineItem';
import { Container, Row, Col, Table, Tab, Tabs, Nav } from "react-bootstrap";

const ItemList = ({ items, handleDelete }) => {
    return (
        <>
            {items.map((item) => (
                <tr>
                <LineItem
                    key={item.id}
                    item={item}
                    handleDelete={handleDelete}
                />
                </tr>
            ))}
        </>
    )
}

export default ItemList
