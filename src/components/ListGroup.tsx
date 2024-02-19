function ListGroup() {
  let items = ['New York', 'Las Vegas', 'Paris'];
  items = [];

  // If no props are neede use this method
  const message = items.length === 0 ? <p>No item found</p> : null;

  //If props are needed use this method
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  return (
    <>
      <h1>ListGroup</h1>

      {/* if no props */}
      {/* {message} */}

      {/* If props use this */}
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
