import React, { useEffect, useState } from "react";
import BlogItem from "../../components/BlogItem";
import { fetchDataFromApi } from "../../utils/api";

const BlogList = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetchDataFromApi("/api/blog").then((res) => {
      setBlogData(res?.blogs);
    });
  }, []);

  return (
    <>
      <div className="p-12 pt-3 bg-white w-full ">
        <div className="text-center text-[25px] font-[600] mb-5">Danh sách bài viết</div>

        <div className={`grid grid-cols-4 md:grid-cols-4 gap-4`}>
          {blogData?.map((item, index) => {
            return <BlogItem key={index} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default BlogList;
