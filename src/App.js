import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import axios from 'axios';
import "./App.scss";

const App = () => {
  const [hasError, setErrors] = useState(false)
  const [items, setItems] = useState([])
  async function fetchData() {
    try {
      const response= await axios('https://swapi.co/api/people/')
      setItems(response.data.results)
    } catch (error) {
      setErrors(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <div className="container">
      <div className="heading">Star Wars Heroes</div>
      <Table items={items} error={hasError} />
    </div>
  )
}

export default App;
