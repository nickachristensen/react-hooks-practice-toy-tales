import React from "react";

function ToyCard({ toyObj, onDelete, onLikedToy }) {
const {name, image, likes, id} = toyObj

function handleDelete() {
  fetch(`http://localhost:3001/toys/${id}`, {
    method:'DELETE',
  })
  .then(resp => resp.json())
  .then(() => {
    onDelete(toyObj);
  });
}

function handleLike() {
  const updateObj = {
    likes: toyObj.likes + 1,
  };

  fetch(`http://localhost:3001/toys/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateObj),
  })
    .then((r) => r.json())
    .then(onLikedToy);
}
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
