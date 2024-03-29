import React, { useState } from "react";

import SessionCard from "./session-card";
import talkSeminarsCards from "../../../data/sessions/lightning-talks";
import agendaCards from "../../../data/sessions/full-agenda";
import phone1 from "../../assets/designs/phone-1.png";
import tab from "../../assets/designs/tab.png";
import Image from "next/image";

function Sessions() {
  const [activeTab, setActiveTab] = useState("Networking");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div id="sessions-div" className="app-section sessions-div">
      <div className="header-container">
        <div className="section-title">
          Sessions
          <Image className="h-[40px] w-auto mx-4" src={tab}></Image>
        </div>
      </div>
      <div className="tabs-container">
        <div
          className={`tab ${activeTab === "Networking" ? "active" : ""}`}
          onClick={() => handleTabClick("Networking")}
        >
          <span>Schedule</span>
        </div>
        <div
          className={`tab ${activeTab === "Talks/Seminars" ? "active" : ""}`}
          onClick={() => handleTabClick("Talks/Seminars")}
        >
          <span>Lightning Talks</span>
        </div>
      </div>
      <div className="session-cards-container z-10">
        {activeTab === "Networking" &&
          agendaCards.map((session, index) => (
            <div className="sessions-row" key={index}>
              <SessionCard
                title={session.title}
                imageUrl={session.imageUrl}
                speaker={session.speaker}
                time={session.time}
                place={session.place}
                description={session.description}
                type={session.type}
                moderator={session.moderator}
                panelists={session.panelists}
                showImageBorder={session.showImageBorder}
              />
            </div>
          ))}
        {activeTab === "Talks/Seminars" &&
          talkSeminarsCards.map((session, index) => (
            <div className="sessions-row" key={index}>
              <SessionCard
                title={session.title}
                imageUrl={session.imageUrl}
                speaker={session.speaker}
                time={session.time}
                place={session.place}
                description={session.description}
                type={session.type}
                moderator={session.moderator}
                panelists={session.panelists}
                showImageBorder={session.showImageBorder}
              />
            </div>
          ))}
      </div>
      <Image
        class="absolute right-0 bottom-0 w-[400px] lg:w-[360px]"
        src={phone1}
      ></Image>
    </div>
  );
}

export default Sessions;
