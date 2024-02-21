import { useState } from 'react';

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  //items = [];

  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIdx === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item}
            onClick={() => {
              setSelectedIdx(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
