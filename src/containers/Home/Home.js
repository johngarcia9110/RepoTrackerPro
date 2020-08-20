import React from "react";
import { connect } from "react-redux";
import MainLayout from "../../components/MainLayout/MainLayout";
import StyledHomeContainer from "./Styles";
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import RepoCard from "../../components/RepoCard/RepoCard";
import { deleteRepo, setRepoToViewed } from "../../actions/repoActions";
import moment from "moment";
import RepoSearch from "../../components/RepoSearch/RepoSearch";
import Loader from "../../components/Loader/Loader";

const Home = ({
  repoList,
  handleDeleteRepo,
  handleSetRepoToViewed,
  loading,
}) => {
  if (loading) {
    return <Loader />;
  }

  const latestRepos = repoList.filter((repo) => {
    return (
      moment(repo.last_viewed).isBefore(repo.published_at) ||
      repo.last_viewed === null
    );
  });

  const handleViewRelease = (id, url) => {
    handleSetRepoToViewed(id, repoList).then(() => window.open(url));
  };

  return (
    <MainLayout>
      <StyledHomeContainer>
        <RepoSearch repoList={repoList} />
        <Row>
          <Col span={24}>
            {repoList.length !== 0 && (
              <>
                <h2 className="section-title">Latest</h2>
                <div className="latest-list">
                  {latestRepos.length === 0 && (
                    <div className="card info-card">
                      <p>You are up to date!</p>
                    </div>
                  )}
                  {latestRepos.map((repo) => (
                    <RepoCard
                      key={repo.name}
                      title={repo.name}
                      link={repo.html_url}
                      avatar={repo.avatar_url}
                      lastDateViewed={repo.last_viewed}
                      dateOfLastUpdate={repo.published_at}
                      deleteRepo={() => handleDeleteRepo(repo.id)}
                      viewRelease={() =>
                        handleViewRelease(repo.id, repo.html_url)
                      }
                    />
                  ))}
                </div>
              </>
            )}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <h2 className="section-title">All Repos</h2>
            <div className="repo-list">
              {repoList.map((repo) => (
                <RepoCard
                  key={repo.name}
                  title={repo.name}
                  link={repo.html_url}
                  avatar={repo.avatar_url}
                  lastDateViewed={repo.last_viewed}
                  dateOfLastUpdate={repo.published_at}
                  deleteRepo={() => handleDeleteRepo(repo.id)}
                  viewRelease={() => handleViewRelease(repo.id, repo.html_url)}
                />
              ))}
              {repoList.length === 0 && (
                <div className="card info-card">
                  <p>
                    You aren't tracking any repos right now. Use the search
                    above to get started.
                  </p>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </StyledHomeContainer>
    </MainLayout>
  );
};

const mapStateToProps = ({ repoList }) => ({
  repoList,
});

const mapDispatchToProps = (dispatch) => ({
  handleDeleteRepo: (id) => dispatch(deleteRepo(id)),
  handleSetRepoToViewed: (id, repoList) =>
    dispatch(setRepoToViewed(id, repoList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
