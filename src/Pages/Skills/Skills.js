import React from "react";
import Home from "../Home/Home";
import { SkillSet } from "../../Config/Config";
import { Experience, Education } from "../../Config/Config";
import { FaUniversity, FaBriefcase } from "react-icons/fa";
import Card from "./Card";
import "./Skill.scss";

function Skills() {
  const SkillCard = (val, ind) => {
    return <Card key={ind} name={val.name} imgsrc={val.imgsrc} />;
  };

  return (
    <>
      <Home />
      <div className="card-inner">
        <div className="card-wrap">
        <div className="content resume">
            <div className="title">
              <span>Resume</span>
            </div>
            <div className="row">
              <div className="col ol-d-6 col-t-6 col-m-12 border-line-v">
                <div className="resume-title border-line-h">
                  <div className="icon">
                    <FaBriefcase />
                  </div>
                  <div className="name">Experience</div>
                </div>
                <div className="resume-items">
                  {Experience &&
                    Experience.map((val, ind) => (
                      <div key={ind} className="resume-item border-line-h">
                        <div className="date">{val.date}</div>
                        <div className="name">{val.name}</div>
                        <div className="company">{val.company}</div>
                        <p className="experience-desc">
                        <li>{val.desc[0]}</li>
                        <li>{val.desc[1]}</li>
                        </p>
                      </div>
                    ))}
                </div>
              </div>
              <div className="col ol-d-6 col-t-6 col-m-12 border-line-v">
                <div className="resume-title border-line-h">
                  <div className="icon">
                    <FaUniversity />
                  </div>
                  <div className="name">Education</div>
                </div>
                <div className="resume-items">
                  {Education && 
                  Education.map((val, ind) => (
                    <div key={ind} 
                    className={ind === 0 ? `${'resume'}-${'item'} ${'active'} ${'border'}-${'line'}-${'h'}` : `${'resume'}-${'item'} ${'border'}-${'line'}-${'h'}`}>
                      <div className="date">{val.date}</div>
                      <div className="name">{val.name}</div>
                      <div className="company">{val.company}</div>
                      <p>{val.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="content skills">
            <div className="title">
              <span className="first-word">My </span>
              Skills
            </div>
            <div className="row grid-items border-line-v">
              <div className="grid-item">{SkillSet && SkillSet.map(SkillCard)}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
