import React from "react";
import PaginationRow from "../../Pagination/PaginationRow.jsx";

export const LIMIT = 5;
export const getDataByPage = (courses, currentPage) => {
  const begin = (currentPage - 1) * LIMIT;
  const end = begin + LIMIT;

  return courses.slice(begin, end);
};

export const renderPagination = (count, pageCount, handlePageChange) =>
  count === 0 ? (
    "No Data"
  ) : (
    <PaginationRow limit={LIMIT} count={count} pageCount={pageCount} onPageChange={handlePageChange} />
  );
