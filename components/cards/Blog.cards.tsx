import React, { FC } from "react";

// type
import { IBlog } from "../sections/OurBlogs.sections";

// types
type IBlogCardProps = {
  blog: IBlog;
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
          -{new Date(blog.date).toDateString()}
        </p>
      </div>
      <div>
        <p className="text-lg text-gray-500 font-bold">{blog.title}</p>
      </div>
    </div>
  );
};

export default BlogCard;
