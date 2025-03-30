import React from "react";
import databaseService from "../appwrite/databaseService";
import { Link } from "react-router-dom";
function PostCard({ $id, title, imageId }) {
  return (
    <Link to = {`posts/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4 flex justify-center">
        <img
          src={databaseService.getFilePreview(imageId)}
          className="rounded-xl"
          alt={title}
        />
        <h2 className="font-bold text-xl">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
