import React, { useEffect, useState } from "react";

const Statewise = () => {
  const [datas, setData] = useState([]);

  const getcoviddata = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData);
    setData(actualData.statewise);
  };
  useEffect(() => {
    getcoviddata();
  }, []);


  return (
    <>
      <div className="container-fluid  mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center ">
            <span className="font-weight-bold">INDIA</span> COVID-19 Dashboard
          </h1>
        </div>

        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark ">
              <tr>
                <th>state</th>
                <th>confirmed</th>
                <th>recovered</th>
                <th>deaths</th>
                <th>active</th>
                <th>updated</th>
              </tr>
            </thead>

            <tbody>
              {datas.map((curEleme, ind) => {
                return (
                  <tr key={ind}>
                    <td>{curEleme.state}</td>
                    <td>{curEleme.confirmed}</td>
                    <td>{curEleme.recovered}</td>
                    <td>{curEleme.deaths}</td>
                    <td>{curEleme.active}</td>
                    <td>{curEleme.lastupdatedtime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Statewise;
