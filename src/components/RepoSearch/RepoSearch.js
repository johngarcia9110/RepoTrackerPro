import React, { useState } from "react";
import { connect } from "react-redux";
import { Octokit } from "@octokit/rest";
import Alert from "antd/es/alert";
import Button from "antd/es/button";
import Input from "antd/es/input";
import { addRepoToList } from "../../actions/repoActions";
import moment from "moment";
import RepoSearchWrapper from "./Styles";

const RepoSearch = ({ handleAddRepoToList, repoList }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const octokit = new Octokit();

  const onSearch = async () => {
    setError("");
    if (searchTerm.length === 0) {
      setError("Please enter a search term");
      return;
    }
    setLoading(true);
    const resp = await octokit.search.repos({
      q: `${searchTerm.trim()}+in:name`,
      sort: "stars",
    });
    const { data } = resp;
    if (data.items.length === 0) {
      setError(
        "You search returned 0 results. Please try a different search term."
      );
      setLoading(false);
      return;
    }
    setSearchResults([...resp.data.items]);
    setLoading(false);
  };

  const clearResults = () => {
    setSearchResults([]);
  };

  const addRepo = async (owner, name, id) => {
    if (repoList.findIndex((repo) => repo.id === id) >= 0) {
      setError("You are already tracking this repo.");
      setLoading(false);
      return;
    }
    try {
      const resp = await octokit.repos.getLatestRelease({
        owner: owner.login,
        repo: name,
      });
      const { data } = resp;
      const { html_url, published_at } = data;
      const newRepoData = {
        id,
        owner: owner.login,
        avatar_url: owner.avatar_url,
        name,
        html_url,
        published_at: moment(published_at).utc().valueOf(),
        last_viewed: null,
      };
      handleAddRepoToList(newRepoData);
      clearResults();
    } catch (err) {
      if (err.message === "Not Found") {
        setError("This repo has no published releases.");
        setSearchResults([]);
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <RepoSearchWrapper className="card">
      <div className="search-box">
        {error.length > 0 && <Alert type="error" message={error} showIcon />}
        <div className="search-input">
          <Input
            onChange={(e) => setSearchTerm(e.target.value)}
            onPressEnter={onSearch}
            placeholder="Type the name of a repo"
            size="large"
          />
          <Button
            onClick={onSearch}
            size="large"
            type="primary"
            loading={loading}
          >
            Search
          </Button>
        </div>
        {searchResults.length > 0 && (
          <div className="results">
            <h3>Results</h3>
            <div className="inner">
              {searchResults.map((result) => (
                <div className="result" key={result.id}>
                  <div className="result-content">
                    {result.owner.avatar_url && (
                      <img
                        src={result.owner.avatar_url}
                        alt="Repo Owner Avatar"
                        className="repo-avatar"
                      />
                    )}
                    <p className="title">
                      {result.name}
                      <span>by: {result.owner.login}</span>
                    </p>
                  </div>
                  <Button
                    onClick={() =>
                      addRepo(result.owner, result.name, result.id)
                    }
                  >
                    Add
                  </Button>
                </div>
              ))}
            </div>
            <div className="controls">
              <Button onClick={clearResults}>Clear</Button>
            </div>
          </div>
        )}
      </div>
    </RepoSearchWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleAddRepoToList: (repo) => dispatch(addRepoToList(repo)),
});

export default connect(null, mapDispatchToProps)(RepoSearch);
