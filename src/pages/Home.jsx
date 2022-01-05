import React from "react";

const Home = () => {
  return (
    <div
      className="row d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <div className="col-lg-6 col-sm-12 col-xs-12">
        <div className="card">
          <h3 align="center">Welcome to Dashboard!!</h3>
          <div className="card-body">
            <p style={{ textAlign: "center" }}>
              You can search for different characters from above Dropdown
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
