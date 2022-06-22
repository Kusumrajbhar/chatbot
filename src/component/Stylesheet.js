import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  body: {
    position: "relative",
    backgroundColor: "#eeeeee",
    // height: "800px",
    minHeight: "100vh",
    width: "60%",
    // display: "flex",
    // alignItems: "center",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    border: " 2px solid black",
    animation: "changeBg 1s linear infinite",
    padding: "20px",
  },

  input: {
    position: "sticky",
    bottom: "0",
    width: "80%",
    marginBottom: "auto",
    alignSelf: "flex-end",
    backgroundColor: "white",
  },
  text: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  me: {
    backgroundColor: "#c5e1a5",
    width: "80%",
    marginLeft: "auto",
    marginRight: "0",
    // float: "right",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    border: "2px solid white",
    borderRadius: " 18px",
  },
  bot: {
    backgroundColor: "#e6ee9c",
    width: "80%",
    border: "2px solid white",
    borderRadius: " 18px",
  },
  textFields: {
    display: "block",
    // flexDirection: "column",
  },
});

export default useStyle;
