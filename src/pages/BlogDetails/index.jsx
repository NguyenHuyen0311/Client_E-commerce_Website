import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/api";

const BlogDetails = () => {
  const [blogData, setBlogData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchDataFromApi(`/api/blog/${id}`).then((res) => {
      setBlogData(res?.blog);
    });
  }, []);

  return (
    <div className="w-full mx-auto p-12">
      <h1 className="text-3xl text-center font-bold mb-2">{blogData.title}</h1>
      <p className="text-gray-500 text-center mb-4">
        {new Date(blogData?.createdAt).toLocaleDateString("vi-VN")}
      </p>
      <img
        src={blogData.images}
        alt="Blog"
        className="w-[100%] max-h-[800px] object-cover mx-auto rounded-lg mb-5"
      />
      <div className="text-[20px] text-justify" dangerouslySetInnerHTML={{ __html: blogData?.description }} />
    </div>
  );
};

export default BlogDetails;
