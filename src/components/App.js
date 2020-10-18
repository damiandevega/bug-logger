import React, { useState, useEffect } from "react";
import { ipcRenderer } from "electron";
import { Container, Table, Alert } from "react-bootstrap";
import LogItem from "./LogItem";
import AddLogItem from "./AddLogItem";

const App = () => {
  const [logs, setLogs] = useState([]);

  const [alert, setAlert] = useState({
    show: false,
    message: "",
    variant: "success",
  });

  useEffect(() => {
    ipcRenderer.send("logs:load");

    ipcRenderer.on("logs:get", (e, logs) => {
      console.log("logs", logs);
      setLogs(JSON.parse(logs));
    });
  }, []);

  const addItem = (item) => {
    if (item.text === "" || item.user === "" || item.priority === "") {
      showAlert("Please enter all fields", "danger");
      return false;
    }

    // item._id = Math.floor(Math.random() * 90000) + 10000;
    // item.created = new Date().toString();
    // setLogs([...logs, item]);

    ipcRenderer.send("logs:add", item);

    showAlert("Log Added Successfully");
  };

  const deleteItem = (_id) => {
    setLogs(logs.filter((item) => item._id !== _id));
    showAlert("Log Removed Successfully");
  };

  const showAlert = (message, variant = "success", seconds = 3000) => {
    setAlert({
      show: true,
      message,
      variant,
    });

    setTimeout(() => {
      setAlert({
        show: false,
        message: "",
        variant: "success",
      });
    }, seconds);
  };

  return (
    <Container>
      <AddLogItem addItem={addItem} />
      {alert.show && <Alert variant={alert.variant}>{alert.message}</Alert>}
      <Table>
        <thead>
          <tr>
            <th>Priority</th>
            <th>Log Text</th>
            <th>User</th>
            <th>Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <LogItem key={log._id} log={log} deleteItem={deleteItem} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default App;
