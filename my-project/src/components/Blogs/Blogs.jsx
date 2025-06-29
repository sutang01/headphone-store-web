import React from "react";
import Blogs1 from "../../assets/blogs/blog1.jpg";
import Blogs2 from "../../assets/blogs/blog2.jpg";
import Blogs3 from "../../assets/blogs/blog3.jpg";
import Blogs4 from "../../assets/blogs/blog4.jpg";
import { UpdateFollower } from "react-mouse-follower";

const BlogsDate = [
  {
    id: 1,
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi eveniet reprehenderit nulla nobis, placeat deserunt.",
    link: "#",
    image: Blogs1,
  },
  {
    id: 2,
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi eveniet reprehenderit nulla nobis, placeat deserunt.",
    link: "#",
    image: Blogs2,
  },
  {
    id: 3,
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi eveniet reprehenderit nulla nobis, placeat deserunt.",
    link: "#",
    image: Blogs3,
  },
  {
    id: 4,
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi eveniet reprehenderit nulla nobis, placeat deserunt.",
    link: "#",
    image: Blogs4,
  },
];

const Blogs = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="container py-14">
          <h1 className="text-3xl font-bold text-center font-poppins pb-8">
            Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {BlogsDate.map((blog) => {
              return (
                <UpdateFollower
                  key={blog.id}
                  mouseOptions={{
                    backgroundColor: "#686868",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    mixBlendMode: "screen",
                    text: "read",
                    textFontSize: "3px",
                    scale: 5,
                    mixBlendMode: "difference",
                  }}
                >
                  <div
                    className="flex flex-col items-center justify-center 
                    p-5 max-w-[300px] mx-auto shadow-lg rounded-md 
                    bg-white hover:-translate-y-2 duration-300 gap-6"
                  >
                    <img src={blog.image} alt="" />
                    <div className="space-y-2">
                      <h1 className="text-xl font-bold line-clamp-2">
                        {blog.title}
                      </h1>
                      <p className="line-clamp-2">{blog.description}</p>
                    </div>
                  </div>
                </UpdateFollower>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
