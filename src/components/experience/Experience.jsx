// import React from 'react'
import './experience.css'
import React, { useState, useEffect } from 'react';


export const Experience = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
                'https://api.github.com/repos/dnp176/AutomationMaterialCode/contents/experience.json'
            );
    
            if (response.ok) {
              const json = await response.json();
              const content = atob(json.content); // Decode Base64-encoded content
    
              // Parse the JSON content
              const jsonData = JSON.parse(content);
    
              if (Array.isArray(jsonData)) {
                setData(jsonData);
              }
            }
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        fetchData();
      }, []);
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="experience container" id="experience">
          <div className="content-inner">
              <div className="row align-items-center">
                {data.map((item, index) => (
                  <div className="col-md-6">
                      <div className="exp-col">
                          {/* <span> December-2022 <i>to</i> Present </span> */}
                          <span>{item.period} </span>
                          <h3>{item.company}</h3>
                          <h5>{item.position}</h5>
                          <p>{item.description}</p>
                      </div>
                  </div>
                ))}
              </div>
          </div>
      </div>
    </section>
  )
}
export default Experience