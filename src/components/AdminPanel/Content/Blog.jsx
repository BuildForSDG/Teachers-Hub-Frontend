import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import fetchBlogsAction from "../../../redux/actions/fetchBlogsAction";
import deleteBlogAction from "../../../redux/actions/deleteBlogAction";
import { useDispatch, useSelector } from "react-redux";
import PaginationRow from "../../Pagination/PaginationRow.jsx";

const LIMIT = 5;
const Blog = () => {
  const dispatch = useDispatch();
  const blogData = useSelector((state) => state.fetchBlogsReducer);
  const filteredData = useSelector((state) => state.deleteBlogReducer);
  const [activeRow, setActiveRow] = useState(0);
  const [data, setData] = useState([]);

  const [count, setCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPage, setSelectedPage] = useState(0);

  useEffect(() => {
    dispatch(fetchBlogsAction());
  }, []);

  useEffect(() => {
    if (blogData.data.articles) {
      setData(blogData.data.articles);
      setCount(blogData.data.articles.length);
      setPageCount(Math.ceil(blogData.data.articles.length / LIMIT));
    }
  }, [blogData]);

  const handleView = (blogID) => {
    if (blogID !== activeRow) {
      setActiveRow(blogID);
      window.location.replace(`/articles/${blogID}`);
    }
  };

  const handleDelete = (blogID) => {
    setActiveRow(blogID);
    dispatch(deleteBlogAction(blogID)); //create blogs redux set

    setInterval(() => {
      window.location.reload(true);
    }, 3000);
  };

  useEffect(() => {
    if (filteredData.error.message === "article deleted successfully!") {
      setData(() => data.filter((item) => item._id !== activeRow));
    }
  }, [filteredData]);

  const handlePageChange = (page) => {
    setSelectedPage(page.selected);
    if (page.selected === selectedPage + 1) {
      setCurrentPage(currentPage + 1);
    } else if (page.selected === selectedPage - 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(() => page.selected + 1);
    }
  };

  const getDataByPage = () => {
    const begin = (currentPage - 1) * LIMIT;
    const end = begin + LIMIT;

    return data.slice(begin, end);
  };

  const renderPagination = () =>
    count === 0 ? (
      "No Data"
    ) : (
      <PaginationRow limit={LIMIT} count={count} pageCount={pageCount} onPageChange={handlePageChange} />
    );

  return (
    <div>
      <Table responsive="md" hover size="sm" bordered striped width="100%" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Article Title</th>
            <th>Author</th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {getDataByPage()
            ? getDataByPage().map((article, index) => (
                <tr
                  key={article[0]}
                  style={{
                    backgroundColor: activeRow === article[0] ? "#ffd3d9" : ""
                  }}
                >
                  <td>{currentPage * LIMIT + index + 1 - 5}</td>
                  <td>{article[1]}</td>
                  <td>{article[2]}</td>

                  <td>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-primary"
                      style={{ width: "60px", padding: "5px" }}
                      onClick={() => handleView(article[1])}
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      style={{ width: "60px", padding: "5px" }}
                      onClick={() => handleDelete(article[0])}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
      <div style={{ float: "right" }}>{renderPagination()}</div>
    </div>
  );
};

export default Blog;
