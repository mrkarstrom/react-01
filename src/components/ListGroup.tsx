function ListGroup() {
  let items = ['New York', 'Las Vegas', 'Paris'];
  //items = [];

  return (
    <>
      <h1>ListGroup</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => alert('Clicked: ' + item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
