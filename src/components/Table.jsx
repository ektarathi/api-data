import React from "react";
import UserDetails from './UserDetails';
import "../assets/table.scss";

const Table = ({ error, items }) => {
  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <React.Fragment>
        <br />
        {items.map(item => (
         <UserDetails key={item.name} item = {item}/>
        ))}
      </React.Fragment>
    );
  }
};

export default Table;
