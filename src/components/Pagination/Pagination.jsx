/* eslint-disable react/prop-types */
import classNames from "classnames";
import React from "react";
import ReactPaginate from "react-paginate";

const renderLabel = (caption) => (
  <>
    <span aria-hidden="true">{caption}</span>
    <span className="sr-only">{caption}</span>
    <div className="ripple-container"></div>
  </>
);

const Pagination = (props) => (
    <ReactPaginate
      containerClassName={classNames("pagination", props.className)}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      previousLabel={renderLabel("Previous")}
      nextClassName="page-item"
      nextLinkClassName="page-link"
      nextLabel={renderLabel("Next")}
      breakClassName="page-item"
      breakLinkClassName="page-link"
      onPageChange={props.onPageChange}
      pageCount={props.pageCount}
      pageRangeDisplayed={props.pageRangeDisplayed}
      marginPagesDisplayed={props.marginPagesDisplayed}
    />
);

Pagination.defaultProps = {
  pageCount: 10,
  pageRangeDisplayed: 5,
  marginPagesDisplayed: 2
};

export default Pagination;
