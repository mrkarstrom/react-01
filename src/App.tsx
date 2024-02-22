import './App.css';
import Alert from './components/Alert';
import ListGroup from './components/ListGroup';

function App() {
  let items = ['New York', 'Las Vegas', 'Paris'];

  const handleSelectItem = (item: string) => {
    alert(item);
  };

  return (
    <>
      <Alert>
        Hello
      </Alert>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
