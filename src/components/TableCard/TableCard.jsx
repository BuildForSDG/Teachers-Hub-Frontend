import * as React from "react";
import { Card } from "react-bootstrap";
import CoursesTable from "../CoursesTable/CoursesTable.jsx";

const TableCard = () => (
    <React.Fragment>
      <Card style={{ width: "70vw", marginLeft: "15%" }}>
        <Card.Header className="card-header-rose card-header-icon">
          <h5 style={{ textAlign: "center" }}>Course List</h5>
        </Card.Header>
        <Card.Body>
          <CoursesTable />
        </Card.Body>
      </Card>
    </React.Fragment>
);

export default TableCard;
