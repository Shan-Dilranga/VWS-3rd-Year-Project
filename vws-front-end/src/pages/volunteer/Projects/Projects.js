import React, { useEffect,useState } from 'react';
import MidFormPopUp from '../../../utilities/PopUps/MidFormPopUp';
import TopFormPopUp from '../../../utilities/PopUps/TopFormPopUp';
import Table from "../../../utilities/Table/Table";
import "./Projects.css"

export default function Projects() {
    const [ProjectsData, setProjectsData] = useState([
        {
          project_name: "Ganitha Saviya",
          description: "Ganitha Saviya is a ....",
          idea_by: "Ravindu Perera",
          date: "2022 09 12",
          
          
          action: (
            <button
              type="button"
              id="submit"
              name="submit"
              className="btn p-1"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              style={{backgroundColor:"#96BE25",border:"none"}}
              // #96BE25,#BE4D25
              // onClick={handleSubmit}
            >
              Coordinate Event
            </button>
          ),
        },
        {
          project_name: "Re-green Earth",
          description: "Re-green Earth is a ...",
          idea_by: "Sadaru Avishka",
          date: "2022 09 02",
          
          
          action: (
            <button
              type="button"
              id="submit"
              name="submit"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              className="btn p-1"
              style={{backgroundColor:"#96BE25",border:"none"}}
              // #96BE25-green,#BE4D25-red
              // onClick={handleSubmit}
            >
              Coordinate Event
            </button>
          ),
        },
      ]);
    
      const [ProjectsHeadings, setProjectsTableHead] = useState([
        { id: "project_name", label: "PROJECT NAME" },
        { id: "description", label: "DESCRIPTION" },
        { id: "idea_by", label: "IDEA BY" },
        { id: "date", label: "DATE" },
        { id: "action", label: "COORDINATE EVENT" },
    
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
                                <h5>Ongoing Projects</h5>
                                
                                  <button id='proposenewbtn' data-toggle="modal" data-target="#exampleModalCenter">+ Propose New Project </button>
                                
                                <Table rows={ProjectsData} headCells={ProjectsHeadings} />
                                <TopFormPopUp />
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}