import React, { useState, useEffect } from "react";
import Table from "../../../utilities/Table/Table";
import TopFormPopUp from "../../../utilities/PopUps/TopFormPopUp";
import ConfirmPopUp from "../../../utilities/PopUps/ConfirmPopUp";
import MidFormPopUp from "../../../utilities/PopUps/MidFormPopUp";

export default function ProposedProject() {
  const [proposedProjectData, setProposedProjectData] = useState([
    {
      projectName: "Adurata Eliyak",
      proposedPerson: "Yashodha Subhasinghe",
      phone: "+94 76 7845 111",
      proposedDate: "2020-10-21",
      forum: (
        <button
          type="button"
          id="submit"
          name="submit"
          className="btn mt-0"
          style={{
            backgroundColor: "#BE4D25",
            border: "none",
            marginRight: "2px",
          }}
          // #96BE25,#BE4D25
          // onClick={handleSubmit}
        >
          Check
        </button>
      ),
      initialize: (
        <button
          type="button"
          id="submit"
          name="submit"
          className="btn mt-0"
          style={{
            backgroundColor: "#96BE25",
            border: "none",
            marginRight: 0,
          }}
          // #96BE25,#BE4D25
          // onClick={handleSubmit}
        >
          Initialize
        </button>
      ),
    },
  ]);

  const [proposedProjectTableHead, setProposedProjectTableHead] = useState([
    { id: "projectName", label: "PROJECT NAME" },
    { id: "proposedPerson", label: "PROPOSED PERSON" },
    { id: "phone", label: "PHONE" },
    { id: "proposedDate", label: "PROPOSED DATE" },
    { id: "forum", label: "FORUM" },
    { id: "initialize", label: "INITIALIZE" },
  ]);
  return (
    <>
      <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
        <div className="row gutters mt-10">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters ">
                </div>
                <div className="row gutters ">
                <Table
                    rows={proposedProjectData}
                    headCells={proposedProjectTableHead}
                    tableName={"Proposed Projects"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row gutters mt-3">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body ">
                <ConfirmPopUp /><br></br>
                <TopFormPopUp /><br></br>
                <MidFormPopUp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
