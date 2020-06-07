import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { options, columns, indication } from "./utils";


const Courses = () => (
        <div>
            <BootstrapTable keyField='id' data={ [] }
            columns={ columns }
            noDataIndication={ indication }
            striped hover condensed pagination={ paginationFactory(options) }/>
        </div>
);
export default Courses;
