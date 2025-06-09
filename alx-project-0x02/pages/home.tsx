// pages/home.tsx
import React, { useState } from "react";
import Header from "../components/layout/Header";
import Card from "../components/common/Card";
import PostModal from "../components/common/PostModal";
import { Post } from "../interfaces";

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: "First Post", content: "This is the first post content." },
    { id: 2, title: "Second Post", content: "Another example post content." },
  ]);

  const handleAddPost = (newPost: Post) => {
    setPosts((prev) => [...prev, { ...newPost, id: Date.now() }]);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Welcome to Our Website</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add New Post
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card
              key={post.id}
              title={post.title}
              content={post.content}
              className="hover:shadow-lg transition-shadow"
            />
          ))}
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </div>
    </div>
  );
};

export default HomePage;

