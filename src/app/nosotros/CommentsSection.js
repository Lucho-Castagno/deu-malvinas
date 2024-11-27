"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const CommentsSection = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      name,
      email,
      comment,
      date: new Date().toLocaleString(),
    };
    setComments([...comments, newComment]);
    setName("");
    setEmail("");
    setComment("");
  };
  const t = useTranslations("AboutPage");

  return (
    <div aria-labelledby="comments-section">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">{t("leave_name")}</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">{t("leave_email")}</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="comment">{t("leave_comments")}</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>
        <button className="btn btn-success" type="submit">
          {t("send")}
        </button>
      </form>
      <br></br>
      <div aria-live="polite">
        <h2 id="comments-section" className="titulo">
          {t("leave_recentscomments")}
        </h2>
        {comments.map((comment, index) => (
          <div
            key={index}
            tabIndex="0"
            role="region"
            aria-labelledby={`comment-${index}`}
          >
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
