import { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "../../../components/Context/DarkModeContext";
import CurrentUserContainer from "./CurrentUserContainer";
import HeaderSearch from "./HeaderSearch";
import { yellow, red, blue } from "@material-ui/core/colors";

const Ul = styled.ul`
  margin: 0;
  flex-flow: column nowrap;
  background-color: ${({ darkMode }) =>
    darkMode === "light" ? blue[600] : yellow[700]};
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  padding-top: 1.5rem;
  transition: transform 0.3s ease-in-out;
  list-style: none;
  z-index: 998;
  overflow: scroll;
  display: flex;
  align-items: center;
  li {
    padding: 40px;
    font-size: large;
    /* color: black; */
    font-weight: 30px;
    text-decoration: none;
  }
  li:hover {
    cursor: default;
  }
  span {
    margin-left: 10px;
  }
  span:hover {
    cursor: pointer;
  }
  img {
    width: 100px;
    object-fit: contain;
  }
  a {
    text-decoration: none;
  }
`;
function OpenNavBar({ open, search, setSearch }) {
  const [darkMode] = useContext(DarkModeContext);
  return (
    <Ul open={open}>
      <li>
        <HeaderSearch
          darkMode={darkMode}
          search={search}
          setSearch={setSearch}
        />
      </li>
      <li>
        <CurrentUserContainer isMenuShowing={open} />
      </li>
    </Ul>
  );
}

export default OpenNavBar;