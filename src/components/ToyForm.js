import React, { useState } from "react";

function ToyForm({ onHandleNewToy }) {
  const [formData, setFormData] = useState({
    name:"",
    image:"",
    likes: 0
  })

  function handleChange(event) {
    let name = event.target.name
    let value = event.target.value
    setFormData({...formData, [name]: value})


  }

  function handleFormSubmit(event) {
    event.preventDefault()

    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData),
    })
    .then(resp => resp.json())
    .then(data => onHandleNewToy(data))
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleFormSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange = {handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange = {handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
