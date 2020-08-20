import React from "react";
import Button from "antd/es/button";
import moment from "moment";
import StyledRepoCard from "./Styles";

const RepoCard = ({
  title,
  link,
  lastDateViewed,
  dateOfLastUpdate,
  deleteRepo,
  avatar,
  viewRelease,
}) => {
  return (
    <StyledRepoCard className="card">
      {moment(lastDateViewed).isBefore(dateOfLastUpdate) ||
        (lastDateViewed === null && <span className="tag">New!</span>)}
      <div className="title">
        <img src={avatar} alt="Repo Avatar" />
        <h2>{title}</h2>
      </div>
      <div className="date-group">
        {lastDateViewed !== null && (
          <p className="date">
            <span>Last Viewed On:</span>
            {moment(lastDateViewed).format("YYYY-MM-DD")}
          </p>
        )}
        {lastDateViewed !== null && <div className="separator" />}
        <p className="date">
          <span>Latest Release Date:</span>
          {moment(dateOfLastUpdate).format("YYYY-MM-DD")}
        </p>
      </div>
      <div className="controls">
        <Button type="secondary" size="large" onClick={deleteRepo}>
          Delete
        </Button>
        <Button type="primary" size="large" onClick={viewRelease}>
          View Release Notes
        </Button>
      </div>
    </StyledRepoCard>
  );
};

export default RepoCard;
