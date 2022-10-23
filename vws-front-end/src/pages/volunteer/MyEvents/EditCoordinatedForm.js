import React, { useState } from "react";
import { Link } from "react-router-dom";

import ImageUploadComponent from "./ImageUploadComponent";


export default function EditCoordinatedForm(props) {

  const [eventData, setEventData] = useState(props.eventData);
  console.log(eventData);


  return (
    <div>
      {/* <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Middle
      </button> */}

      <div
        class="modal fade show"
        id="EditCoordinatedEvent"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
        style={{ display: "block" }}

      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Edit Coordinated Event Details
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  props.setSelected(false);
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                <div className="row gutters ">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <small>Coordinator : {eventData.name}</small>
                  <br></br>
                  <small>Phone : {eventData.phoneNumber}</small>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <small>Start Date : {eventData.startDate} </small>
                  <br />
                  <small>End Date : {eventData.endDate} </small>
                  <br />
                </div>

                  {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group ">
                      <label for="fullName">Coordinated By</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        placeholder="Ravindu Medagama"
                        // value={profile.firstName}
                        name="firstName"
                        // onChange={handleChange}
                      />
                    </div>
                  </div> */}

                  {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="eMail">Phone</label>
                      <input
                        type="email"
                        className="form-control"
                        id="phone"
                        placeholder="Enter phone number"
                        // value={profile.email}
                        name="email"
                        // onChange={handleChange}
                      />
                    </div>
                  </div> */}

                  {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="phone">Starts On</label>
                      <input
                        type="date"
                        className="form-control"
                        id="startDate"
                        // placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="phone">Ends On</label>
                      <input
                        type="date"
                        className="form-control"
                        id="endDate"
                        // placeholder="Enter phone number"
                      />
                    </div>
                  </div> */}

<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group ">
                    <label for="progress" id="formLabel">
                      Upload Images
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="progress1"
                      name="progress1"
                      value="img 1"
                      //   onChange={handleChange}
                      disabled
                    />
                  </div>
                  <div className="form-group ">
                    <input
                      type="text"
                      className="form-control"
                      id="progress2"
                      name="progress2"
                      value="img 2"
                      //   onChange={handleChange}
                      disabled
                    />
                  </div>
                  <div className="form-group ">
                    <input
                      type="text"
                      className="form-control"
                      id="progress3"
                      name="progress3"
                      value="img 3"
                      //   onChange={handleChange}
                      disabled
                    />
                  </div>
                  <div className="form-group ">
                    <input
                      type="text"
                      className="form-control"
                      id="progress4"
                      name="progress4"
                      value="img 4"
                      //   onChange={handleChange}
                      disabled
                    />
                  </div>
                </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="phone">Description</label>
                      <input
                        type="text"
                        style={{height:80}}
                        className="form-control"
                        id="description"
                        placeholder="Enter description"
                      />
                    </div>
                  </div>

                  

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="eMail">No.of Volunteers</label>
                      <input
                        type="number"
                        className="form-control"
                        id="volunteercount"
                        // placeholder="Enter volunteer count"
                        value={eventData.noOfVolunteers}
                        name="volunteercount"
                        // onChange={handleChange}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="eMail">No.of Participated Volunteers</label>
                      <input
                        type="number"
                        className="form-control"
                        id="volunteercount"
                        placeholder="Enter volunteer count"
                        // value={profile.email}
                        name="volunteercount"
                        // onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="eMail">Location</label>
                      <input
                        type="text"
                        className="form-control"
                        id="location"
                        // placeholder="Enter location"
                        // value={profile.email}
                        value={eventData.place}
                        name="location"
                        // onChange={handleChange}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="eMail">Progress</label>
                      <input
                        type="range"
                        className="form-control" min="0" max="100"
                        id="progress"
                        // placeholder="Enter location"
                        // value={profile.email}
                        name="location"
                        // onChange={handleChange}
                      />
                    </div>
                  </div>



                  {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="progress">Progress</label>

                      <ImageUploadComponent />
                    </div>
                  </div> */}

                  {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="progress">Status</label>
                      </div>
                      </div> */}
                      
                      {/* <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group mr-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-secondary" style={{marginLeft:15,backgroundColor:"#96BE25"}}>Success</button>
    
  </div>
  <div class="btn-group mr-2" role="group" aria-label="Second group">
    <button type="button" class="btn btn-secondary" style={{backgroundColor:"#2596BE"}}>Ongoing</button>
    
  </div>
  <div class="btn-group" role="group" aria-label="Third group">
    <button type="button" class="btn btn-secondary" style={{backgroundColor:"#BE4D25"}}>Cancel</button>
  </div>
</div> */}
                    



                </div>

                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-center mt-3 ">
                      <div class="modal-footer justify-content-center ">
                        <button
                          type="button"
                          id="submit"
                          name="submit"
                          className="btn btn-secondary m-2"
                          data-dismiss="modal"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          id="submit"
                          name="submit"
                          className="btn btn-primary"
                          // onClick={handleSubmit}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
