import React, {useState} from "react";
import axios from 'axios';
import { posts } from "@/utils/blogPosts";
const BlogPosts: React.FC = () => {
    const[likes, steLikes] = useState<{ [key: number]: number }>({});

    const handleLike = async (postId: number) => {
        try {
            const response = await axios.post('/api/like', {postId});
            const updatedLikes = response.data.likes;
            setLikes((prevLikes) => ({...prevLikes, [postId]: updatedLikes}));
        } catch (error) {
            console.error('Failed to like post', error);
        }
    };

  return (
    <div className="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-lg shadow-lg">
      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.postId}
            className="bg-gradient-to-b from-emerald-500 from-10% via-sky-500 via-30% to-indigo-500 to-90% p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-white text-xl">{post.title}</h3>
            <p className="text-gray-200">{post.date}</p>
            {post.content && <p className="text-gray-200">{post.content}</p>}
            {post.sections?.map((section) => (
              <div key={section.title}>
                {section.title && (
                  <h4 className="text-lg text-gray-300">{section.title}</h4>
                )}
                <p className="text-sm text-gray-200">{section.content}</p>
                <br></br>
              </div>
            ))}
              <button
                  onClick={() => handleLike(post.postId)} className="mt-2 p-2 bg-blue-500 text-white rounded">
                  Like
              </button>
              <p className="text-gray-200">Likes: {likes[post.postId] || 0}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPosts;
