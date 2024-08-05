'use client';

import React, { useState } from 'react';

const CommentsSection = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = { name, email, comment, date: new Date().toLocaleString() };
    setComments([...comments, newComment]);
    setName('');
    setEmail('');
    setComment('');
  };

  return (
    <div aria-labelledby="comments-section">
      <form onSubmit={handleSubmit} aria-labelledby="comment-form">
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="comment">Comentario:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            aria-required="true"
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
      <div aria-live="polite">
        <h2 id="comments-section">Comentarios Recientes</h2>
        {comments.map((comment, index) => (
          <div key={index} tabIndex="0" role="region" aria-labelledby={`comment-${index}`}>
            <p id={`comment-${index}`}>
              <strong>{comment.name}</strong> ({comment.date})
            </p>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
