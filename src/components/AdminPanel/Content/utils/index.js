/* eslint-disable import/prefer-default-export */
import React from "react";

const products = [];

const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing { from } to { to } of { size } Results
    </span>
);


export const options = {
  paginationSize: 4,
  pageStartIndex: 0,
  firstPageText: "First",
  prePageText: "Back",
  nextPageText: "Next",
  lastPageText: "Last",
  nextPageTitle: "First page",
  prePageTitle: "Pre page",
  firstPageTitle: "Next page",
  lastPageTitle: "Last page",
  showTotal: true,
  paginationTotalRenderer: customTotal,
  disablePageTitle: true,
  sizePerPageList: [{
    text: "5", value: 5
  }, {
    text: "10", value: 10
  }, {
    text: "All", value: products.length
  }]
};

export const columns = [{
  dataField: "id",
  text: "ID"
},
{
  dataField: "title",
  text: "Title"
},
{
  dataField: "category",
  text: "Category"
},
{
  dataField: "description",
  text: "Description"
},
{
  dataField: "duration",
  text: "Duration"
},
{
  dataField: "organization",
  text: "Organization"
},
{
  dataField: "totalenrolled",
  text: "Total Enrolled"
}];

export const indication = () => (
    <p>No courses added yet</p>
);
