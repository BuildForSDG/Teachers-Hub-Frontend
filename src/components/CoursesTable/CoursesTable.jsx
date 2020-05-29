import * as React from "react";
import { Table } from "react-bootstrap";

const CoursesTable = () => (
    <Table responsive striped>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Category </th>
          <th>Authors</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </Table>
);

export default CoursesTable;
