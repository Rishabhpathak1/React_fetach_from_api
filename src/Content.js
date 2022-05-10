import ItemList from './ItemList';
import { Container, Row, Col, Table, Tab, Tabs, Nav } from "react-bootstrap";
const Content = ({ items, handleDelete }) => {
    return (
        <table>
            {items.length ? (
                <ItemList
                    items={items}
                    handleDelete={handleDelete}
                />
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
        </table>
    )
}

export default Content
