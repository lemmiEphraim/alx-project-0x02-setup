// components/common/PostCard.tsx
import React from "react";
import { Post } from "../../interfaces";

interface PostCardProps {
  post: Post;
  className?: string;
}

const PostCard: React.FC<PostCardProps> = ({ post, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
    >
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.body}</p>
        <div className="flex items-center">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            User ID: {post.userId}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

