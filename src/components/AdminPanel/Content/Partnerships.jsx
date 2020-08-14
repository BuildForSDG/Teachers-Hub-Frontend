import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import PaginationRow from "../../Pagination/PaginationRow.jsx";
import OrganizationModal from "../../Modal/OrganizationModal.jsx";
import AddOrganizationContainer from "../../../containers/AddOrganizationContainer.jsx";
import deleteOrganizationAction from "../../../redux/actions/deleteOrganizationAction.jsx";
import fetchOrganizationsAction from "../../../redux/actions/fetchOrganizationsAction.jsx";

const LIMIT = 6;
const Partnerships = () => {
  const dispatch = useDispatch();

  const OrganizationData = useSelector((state) => state.fetchOrganizationsReducer);
  const filteredData = useSelector((state) => state.deleteOrganizationReducer);

  const [activeRow, setActiveRow] = useState(0);
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [updateData, setUpdateData] = useState();

  const [count, setCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPage, setSelectedPage] = useState(0);

  useEffect(() => {
    dispatch(fetchOrganizationsAction());
  }, []);

  useEffect(() => {
    if (OrganizationData.data.organizations) {
      setData(OrganizationData.data.organizations);
      setCount(OrganizationData.data.organizations.length);
      setPageCount(Math.ceil(OrganizationData.data.organizations.length / LIMIT));
    }
  }, [OrganizationData]);

  const handleView = (organizationID) => {
    if (organizationID !== activeRow) {
      setActiveRow(organizationID);
      window.location.replace(`/organization/${organizationID}`);
    }
  };

  const handleDelete = (organizationID) => {
    setActiveRow(organizationID);
    dispatch(deleteOrganizationAction(organizationID));
  };

  useEffect(() => {
    if (filteredData.error.message === "Organization deleted!") {
      setData(() => data.filter((item) => item.organization_id !== activeRow));
    }
  }, [filteredData]);

  const handleEdit = (organizationID) => {
    setActiveRow(organizationID);
    setModalShow(true);
    setUpdateData(() => data.filter((item) => item.organization_id === activeRow));
  };

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
            <th>ORGANIZATION NAME</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {getDataByPage()
            ? getDataByPage().map((organization, index) => (
                <tr
                  key={organization.organization_id}
                  style={{
                    backgroundColor: activeRow === organization.organization_id ? "#ffd3d9" : ""
                  }}
                >
                  <td>{currentPage * LIMIT + index + 1 - 5}</td>
                  <td>{organization.organization_name}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-primary"
                      style={{ width: "60px", padding: "5px" }}
                      onClick={() => handleView(organization.organization_id)}
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      style={{ width: "60px", padding: "5px" }}
                      onClick={() => handleEdit(organization.organization_id)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      style={{ width: "60px", padding: "5px" }}
                      onClick={() => handleDelete(organization.organization_id)}
                    >
                      Delete
                    </button>
                    <OrganizationModal show={modalShow} onHide={() => setModalShow(false)} data={updateData} />
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
      <div style={{ float: "right" }}>{renderPagination()}</div>
      <br />
      <br />
      <div>
        <AddOrganizationContainer />
      </div>
    </div>
  );
};
export default Partnerships;
