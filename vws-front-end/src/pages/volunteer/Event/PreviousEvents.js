import React, { useEffect,useState } from 'react';
import NewTable from '../../../utilities/Table/NewTable';
import { useMemo } from 'react';
// import "./PreviousEvents.css";


export default function PreviousEvents() {
  const [upcomingEventsData, setUpComingEventsData] = useState([
    {
            event_id: "E001",
            category: "Ganitha Saviya",
            event_coordinator: "Ravindu",
            startdate: "2022 09 12",
            enddate: "2022 09 14",
            no_of_members: "13",
            location: "Nikawaratiya",
            
            action: (
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        className="btn p-1"
                        style={{backgroundColor:"#96BE25",border:"none"}}
                        // #96BE25,#BE4D25
                        // onClick={handleSubmit}
                      >
                        Event Details
                      </button>
                    ),
    },
    {
            event_id: "E002",
            category: "Re-green Earth",
            event_coordinator: "Sadaru",
            startdate: "2022 09 02",
            enddate: "2022 09 04",
            no_of_members: "8",
            location: "Horana",
            
            action: (
              <button
                type="button"
                id="submit"
                name="submit"
                data-toggle="modal"
                data-target="#exampleModalCenter"
                className="btn p-1"
                style={{backgroundColor:"#96BE25",border:"none"}}
                // #96BE25,#BE4D25
                // onClick={handleSubmit}
              >
                Event Details
              </button>
            ),
    }
  ]);

const data = useMemo(
() => upcomingEventsData  )

  const UpcomingEventsHeadings=useMemo(
    () => [
     
      { accessor: "event_id", Header: "EVENT ID" },
      { accessor: "category", Header: "CATEGORY" },
      { accessor: "event_coordinator", Header: "EVENT COORDINATOR" },
      { accessor: "startdate", Header: "STARTS ON" },
      { accessor: "enddate", Header: "ENDS ON" },
      { accessor: "no_of_members", Header: "NO. OF MEMBERS" },
      { accessor: "location", Header: "LOCATION" },
      { accessor: "action", Header: "EVENT DETAILS" },
    ],
    []
  )


    useEffect(() => {
        checkValidate();
    }, []);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };
    return (
        <>
            <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
                

                <div className="row gutters mt-3">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card h-100" id="contentcard">
                            <div className="card-body ">
                            <h5>Previous Events</h5><br></br>
                            
                                <NewTable columns={UpcomingEventsHeadings} data={upcomingEventsData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
