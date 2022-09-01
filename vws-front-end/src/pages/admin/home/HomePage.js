import React, { useState, useEffect, useMemo } from "react";
import Table from "../../../utilities/Table/Table";
import DonutChart from "../../../utilities/Charts/DonutChart";
import PieChart from "../../../utilities/Charts/PieChart";
import "./homepage.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { getJoinRequest } from "../../../services/adminServices/JoinRequestService";
import { getParticularJoinRequestData } from "../../../services/adminServices/JoinRequestService";
import Loading from "../../../utilities/Loading/Loading";
import NewTable from "../../../utilities/Table/NewTable";
import RegisterNewUser from "./RegisterNewUser";
import ConfirmPopUp from "../../../utilities/PopUps/ConfirmPopUp";
// for remove box shadow
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";

export default function HomePage() {
  const [upComingEventsData, setUpComingEventsData] = useState([
    {
      eventId: "E001",
      project: "Ganitha Saviya",
      place: "Kurunegala",
      member: 25,
      coordinator: "Ravindu Prabasha",
      date: "2022 09 12",
    },
    {
      eventId: "E002",
      project: "Re-green Earth",
      place: "Kaduruwela",
      member: 100,
      coordinator: "Namal Upendra",
      date: "2022 09 25",
    },
    {
      eventId: "E003",
      project: "Re-green Earth",
      place: "Matara",
      member: 130,
      coordinator: "Sahan Kalhara",
      date: "2022 09 25",
    },
  ]);


  const [pieChartData, setPieChartData] = useState([
    ["Task", "votes"],
    ["Lohithuthpada", 11],
    ["Re-green Earth", 2],
  ]);

  const [joinRequestsData, setJoinRequestsData] = useState([]);
  const [selectedJoinRequestsData, setSelectedJoinRequestsData] = useState({});

  const [donutChartData, setDonutChartData] = useState([
    ["Project", "Count"],
    ["Ganitha Saviya", 11],
    ["Re-Green Earth", 2],
    ["Lohithuppada", 2],
    ["Scholarship", 2],
    ["Sarasavi Piya", 7],
  ]);

  useEffect(() => {
    checkValidate();
    getRequest();
  }, []);

  const getRequest = async () => {
    const res = await getJoinRequest();
    console.log(res.data);
    setJoinRequestsData([...res.data]);
  };

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  const [selected, setSelected] = useState(false);

  const [popup, setPopUp] = useState("");
  const [message, setMessage] = useState("");
  // close pop up modal
  const closePopUp = () => {
    setPopUp("");
  };

  return (
    <>
      <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
        <div className="row gutters mt-10">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 ">
            <div className="card h-8" id="contentcard">
              <div className="card-body" id="mid">
                <div className="row gutters">Volunteers</div>
                <div className="row gutters ">
                  <div className="featuredContainer">
                    <span className="featured">750</span>
                    <span className="rate">
                      0 <ArrowDownward className="featuredIcon negative" />
                    </span>
                    <span className="rate">
                      +25 <ArrowUpward className="featuredIcon" />
                    </span>
                  </div>
                </div>
                <div className="row gutters">
                  <small>Compared to last month</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12  ">
            <div className="card h-8" id="contentcard">
              <div className="card-body" id="mid">
                <div className="row gutters">Events Completed</div>
                <div className="row gutters ">
                  <div className="featuredContainer">
                    <span className="featured">119</span>
                    <span className="rate">
                      -3 <ArrowDownward className="featuredIcon negative" />
                    </span>
                    <span className="rate">
                      0 <ArrowUpward className="featuredIcon" />
                    </span>
                  </div>
                </div>
                <div className="row gutters">
                  <small>Compared to last month</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 ">
            <div className="card h-10" id="contentcard">
              <div className="card-body" id="mid">
                <div className="row gutters">New Requests</div>
                <div className="row gutters ">
                  <div className="featuredContainer">
                    <span className="featured">8</span>
                    <span className="rate">
                      0 <ArrowDownward className="featuredIcon negative" />
                    </span>
                    <span className="rate">
                      +3 <ArrowUpward className="featuredIcon" />
                    </span>
                  </div>
                </div>
                <div className="row gutters">
                  <small>Compared to last month</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12  ">
            <div className="card h-10" id="contentcard">
              <div className="card-body" id="mid">
                <div className="row gutters">Total Projects</div>
                <div className="row gutters ">
                  <div className="featuredContainer">
                    <span className="featured">19</span>
                    <span className="rate">
                      0 <ArrowDownward className="featuredIcon negative" />
                    </span>
                    <span className="rate">
                      +25 <ArrowUpward className="featuredIcon" />
                    </span>
                  </div>
                </div>
                <div className="row gutters">
                  <small>Compared to last month</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row gutters mt-3">
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                
              

                  <MaterialTable
                    components={{
                      Container: (props) => <Paper {...props} elevation={0} />,
                    }}
                    options={{ actionsColumnIndex: -1 }}
                    title="Upcoming Events"
                    columns={[
                      { field: "eventId", title: "EVENT ID", minWidth:"120px" },
                      { field: "project", title: "PROJECT NAME", minWidth:"150px" },
                      { field: "place", title: "PLACE" },
                      { field: "member", title: "MEMBERS" },
                      { field: "coordinator", title: "COORDINATOR" },
                      { field: "date", title: "DATE", minWidth:"100px" },
                    ]}
                    data={upComingEventsData}
                    actions={[
                      {
                        icon: () => {
                          return (
                            <button
                              type="button"
                              className="btn mt-0"
                              style={{
                                backgroundColor: "#96BE25",
                                border: "none",
                              }}
                            >
                              More...
                            </button>
                          );
                        },
                        onClick: (event, rowData) => {
                          setSelectedJoinRequestsData(rowData);
                          setSelected(true);
                        },
                        // tooltip: "Register User",
                      },
                    ]}
                  />
                
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters ">
                  <h3 className="ml-3">
                    <h5>Project Summary</h5>
                  </h3>
                </div>
                <div className="row gutters ">
                  <DonutChart data={donutChartData} />
                  Project Occuring details . . .
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row gutters mt-3">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body ">
                <div className="row gutters ">
                  <h3 className="ml-3">
                    <h5>Poll Results</h5>
                    <h6>Title : Event for september</h6>
                  </h3>
                </div>
                <div className="row gutters ">
                  <PieChart data={pieChartData} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body ">
                <MaterialTable
                  components={{
                    Container: (props) => <Paper {...props} elevation={0} />,
                  }}
                  options={{ actionsColumnIndex: -1 }}
                  title="Join Requests"
                  columns={[
                    { title: "REQUEST ID", field: "id" },
                    { title: "FIRST NAME", field: "firstName" },
                    { title: "LAST NAME", field: "lastName" },
                    { title: "NIC", field: "nic" },
                    { title: "PHONE", field: "phoneNumber" },
                    { title: "DATE", field: "date" },
                    { title: "DISTRICT", field: "district" },
                  ]}
                  data={joinRequestsData}
                  actions={[
                    {
                      icon: () => {
                        return (
                          <button
                            type="button"
                            className="btn mt-0"
                            style={{
                              backgroundColor: "#96BE25",
                              border: "none",
                            }}
                          >
                            Register
                          </button>
                        );
                      },
                      onClick: (event, rowData) => {
                        setSelectedJoinRequestsData(rowData);
                        setSelected(true);
                      },
                      // tooltip: "Register User",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedJoinRequestsData.id && (
        <RegisterNewUser
          data={selectedJoinRequestsData}
          setSelectedData={setSelectedJoinRequestsData}
        />
      )}
    </>
  );
}

//   {
//     id: 72,
//     firstName: "chathura",
//     lastName: "manohara",
//     email: "cms@gmail.com",
//     phoneNumber: "0715248569",
//     address: "Polgahawela",
//     universityCollege: "Colombo",
//     district: "Kurunegala",
//     date: "2021-10-11",
//     status: 0,
//     nic: "985475865v",
//     info: "Singing",
//     other: "",
//   }
