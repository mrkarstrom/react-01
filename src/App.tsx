import './App.css';
import ListGroup from './components/ListGroup';

function App() {
  let items = ['New York', 'Las Vegas', 'Paris'];

  return (
    <>
      <ListGroup items={items} heading="Cities" />
    </>
  );
}

export default App;
