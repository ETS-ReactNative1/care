import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Moment from "react-moment";
import Typography from "@material-ui/core/Typography";
import { DarkModeContext } from "../../components/Context/DarkModeContext";
import { grey, yellow, blue } from "@material-ui/core/colors";
import { checkInsights } from "../../utils/checkInsights";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Wrapper = styled.div`
  min-height: 100vh;
  max-height: 100%;
  background: ${({ darkMode }) => (darkMode === "dark" ? grey[800] : "#fff")};

  .content-container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    .buttons {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 30px;
    }
  }
  .title-container {
    align-self: center;
    padding: 20px;
    margin-top: 20px;
    color: ${({ darkMode }) => (darkMode === "dark" ? grey[100] : "#000")};
  }
  .title {
    font-size: 1.3rem;
  }
  .user-icon {
    margin-right: 10px;
    margin-bottom: -2px;
    font-size: 30px;
  }
  .body {
    margin: 0 auto;
    margin-top: 20px;
    min-width: 400px;
    min-height: 400px;
    color: ${({ darkMode }) => (darkMode === "dark" ? grey[100] : "#000")};
  }
  .insights-container {
    padding: 20px;
    display: flex;
    flex-direction: column;
    max-height: 450px;
    overflow-y: scroll;
  }
  .check-insights {
    margin-bottom: 10px;
  }
  .edit {
    margin-right: 10px;
  }
  .top-hr {
    margin-top: 20px;
  }

  a {
    color: ${({ darkMode }) => (darkMode === "dark" ? yellow[700] : blue[600])};
    text-decoration: none;
    overflow-wrap: break-word;
    font-size: 1.5rem;
    font-family: "montserrat", sans-serif;
  }
  @media screen and (min-width: 600px) {
    .title {
      font-size: 1.5rem;
    }
    @media screen and (min-width: 1280px) {
      .title {
        font-size: 2rem;
      }
    }
  }
`;
export default function UserDetail({ getOneUser }) {
  const [user, setUser] = useState(null);
  const [darkMode] = useContext(DarkModeContext);
  const { id } = useParams();

  const goBack = () => {
    window.history.back();
  };

  useEffect(() => {
    const getData = async () => {
      const getUser = await getOneUser(id);
      setUser(getUser);
    };
    getData();
  }, [getOneUser, id]);

  const INSIGHTS = React.Children.toArray(
    user?.insights?.map((insight) => (
      <Link to={`/users/${user.id}/insights/${insight.id}`}>
        {insight?.title}
      </Link>
    ))
  );

  return (
    <Wrapper darkMode={darkMode}>
      <div className="content-container">
        <div className="title-container">
          <Typography className="title">
            <AccountCircleIcon className="user-icon" />
            {user?.name}
          </Typography>
          Joined:&nbsp;
          <Moment format="MMMM-DD-yyyy">
            <small>{user?.created_at}</small>
          </Moment>
        </div>
        <hr className="top-hr" />
        <div className="body">
          <div className="check-insights">{checkInsights(user)}</div>
          <div className="insights-container">{INSIGHTS}</div>
        </div>
        <br />
        <br />
        <hr className="bottom-hr" />
        <div className="buttons">
          <Button variant="contained" color="secondary" onClick={goBack}>
            Go Back
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
