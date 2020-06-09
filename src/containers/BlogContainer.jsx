import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlogCard } from "../components/BlogCard";
import fetchBlogsAction from "../redux/actions/fetchBlogsAction.jsx";


const BlogCardContainer = () => {
  const dispatch = useDispatch();
  const Articles = useSelector((state) => state.fetchBlogsReducer);

  useEffect(() => {
    dispatch(fetchBlogsAction());
  }, []);
  return (
      <div>
        <BlogCard data={Articles} />
      </div>
  );
};
export default BlogCardContainer;
