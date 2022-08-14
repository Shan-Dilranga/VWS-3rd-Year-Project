import React, { useEffect,useState } from 'react';
import NewTable from '../../../utilities/Table/NewTable';
//import CoordinateEventForm from './Coordinate';
//import "./Project.css"
import { useMemo } from 'react';


export default function PcUpcomingEvents() {


  const [upcomingProjectsData, setUpComingProjectsData] = useState([
    {
      project_id: "E001",
      project_name: "Ganitha Saviya",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      coordinator: "Ravindu",
      startdate: "2022 09 14",
      // no_of_members: "13",
      // location: "Nikawaratiya",
      
      action: (
        <button
          type="button"
          id="submit"
          name="submit"
          className="btn btn-primary p-1"
          style={{backgroundColor:"#96BE25",border:"none"}}
          // #96BE25,#BE4D25
          // onClick={handleSubmit}
        >
          Join
        </button>
      ),
    },
    {
      project_id: "E002",
      project_name: "Widyawa Mulasita",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      coordinator: "Tharindu",
      startdate: "2022 09 14",
      // no_of_members: "8",
      // location: "Horana",
      
      action: (
        <button
          type="button"
          id="submit"
          name="submit"
          className="btn btn-primary p-1"
          style={{backgroundColor:"#96BE25",border:"none"}}
          // #96BE25,#BE4D25
          // onClick={handleSubmit}
        >
          Join
        </button>
      ),
    },
  ]);

  const [UpcomingProjectsHeadings, setUpComingProjectsTableHead] = useState([
    { accessor: "project_id", Header: "Project ID" },
    { accessor: "project_name", Header: "Project Name" },
    { accessor: "description", Header: "Description" },
    { accessor: "coordinator", Header: "Coordinator" },
    { accessor: "startdate", Header: "Start Date" },
    // { id: "no_of_members", label: "Coordinate Events" },
    // { id: "location", label: "Location" },
    { accessor: "action", Header: "Action" },

  ]);

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
                            <h5>Upcoming Events</h5>

                            <br></br><NewTable columns={UpcomingProjectsHeadings} data={upcomingProjectsData}/>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
}





//   return (
//     <>
//     <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
//       <div className="row gutters mt-10">
//         <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
//           <div className="card h-100" id="contentcard">
//             <div className="card-body">
//               <div className="row gutters">Upcoming Events</div>
//               <div className="row gutters ">line 1</div>
//               <div className="row gutters">line 2</div>
//             </div>
//           </div>
//         </div>

//         <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
//           <div className="card h-100" id="contentcard">
//             <div className="card-body">
//               <div className="row gutters ">
//                 <h3 className="ml-3">Title</h3>
//               </div>
//               <div className="row gutters ">
//                 Content
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="row gutters mt-3">
//         <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//           <div className="card h-100" id="contentcard">
//             <div className="card-body ">
//              Content
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </>
//   )
// }
