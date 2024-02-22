import './App.css';
import Alert from './components/Alert';
import { Button } from './components/Button';
import ListGroup from './components/ListGroup';

function App() {
  let items = ['New York', 'Las Vegas', 'Paris'];

  const handleSelectItem = (item: string) => {
    alert(item);
  };

  return (
    <>
      <Alert>
        Hello <strong>What</strong> is this?
      </Alert>
      <Button color="primary" onClick={() => console.log('Clicked')}>
        Press me!
      </Button>
      <Button color="secondary" onClick={() => console.log('Clicked')}>
        Press me!
      </Button>
      <Button color="success" onClick={() => console.log('Clicked')}>
        Press me!
      </Button>
      <Button color="danger" onClick={() => console.log('Clicked')}>
        Press me!
      </Button>
      <Button color="warning" onClick={() => console.log('Clicked')}>
        Press me!
      </Button>
      <Button color="light" onClick={() => console.log('Clicked')}>
        Press me!
      </Button>
      <Button color="dark" onClick={() => console.log('Clicked')}>
        Press me!
      </Button>

      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
