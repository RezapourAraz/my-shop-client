import React, { FC } from "react";

// types
type IBlogCardProps = {
  blog: {
    id: number;
    title: string;
    image: string;
    user: string;
    date: Date;
  };
};

const BlogCard: FC<IBlogCardProps> = ({ blog }) => {
  return (
    <div>
      <div className="h-full">
        <img height="100%" width="100%" src={blog.image} alt={blog.title} />
      </div>
      <div>
        <p>
          <span className="text-gray-500 font-bold">
            BY {blog.user.toLocaleUpperCase()}
          </span>
          -{blog.date.toDateString()}
        </p>
      </div>
      <div>
        <p className="text-lg text-gray-500 font-bold">{blog.title}</p>
      </div>
    </div>
  );
};

export default BlogCard;
