import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/posts';

  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    setTimeout(() => fetchItems(), 2000);

  }, [])


  const handleDelete = async (id) => {
    console.log(id);
    var target = [];
    for (let i in items){
      if(items[i].id === id) continue;
      target.push(items[i]);
    }
    setItems(target);
    console.log(items);
  }


  return (
    <div className="App">
      <Header title="List" />
      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content
          items={items}
          handleDelete={handleDelete}
        />}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
