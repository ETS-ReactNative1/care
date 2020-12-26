import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "20px",
    height: "100px",
  },
  appBar: {
    marginBottom: "20px",
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 0.3,
    paddingRight: "10px",
    marginRight: "5px",
  },
  timeClass: {
    [theme.breakpoints.up("md")]: {
      display: "block",
      marginRight: "20px",
      padding: "0px",
    },
    display: "none",
    textAlign: "center",
  },
  headerLeft: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: "0.33",
    padding: "5px",
  },
  headerCenter: {
    display: "flex",
    justifyContent: "center",
    flex: "0.33",
    padding: "5px",
  },
  usersContainer: {
    position: "fixed",
    zIndex: 999999,
    marginTop: "70px",
    background: ({ darkMode }) => (darkMode === "dark" ? "white" : "#3788E5"),
    width: "200px",
    marginLeft: "150px",
  },
  headerRight: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: "0.33",
    padding: "5px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    padding: "5px",
    [theme.breakpoints.up("md")]: {
      marginRight: "20px",
      padding: "0px",
    },
    transition: "transform 350ms ease-in-out",
    "&:hover": {
      transition: "transform 300ms ease-in-out",
      cursor: "pointer",
      transform: "scale(1.1)",
    },
  },
  userIcon: {
    marginRight: "10px",
  },
  userImage: {
    height: "40px",
    width: "40px",
    borderRadius: "40px",
    marginRight: "10px",
    objectFit: "cover",
  },
  logOut: {
    marginLeft: "10px",
    transition: "transform 350ms ease-out",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "30px",
    },
    "&:hover": {
      transition: "transform 300ms ease-in",
      cursor: "pointer",
      transform: "scale(1.1)",
    },
  },
}));

export { useStyles };
