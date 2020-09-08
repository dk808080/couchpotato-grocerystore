import React from "react";
import "../../css/dashboard-css/notifications.css";
import Card from "react-bootstrap/Card";
import notifications from "../../notifications.json";
function Allnotifications() {
  function createNotification(notification) {
    return (
      <Card body className="allnotisec-card" key={notification.id}>
        {notification.notification}
        <br />
        <br />
        <Card.Link
          onClick={(event) => {
            event.preventDefault();
            if (window.confirm("Are you sure?")) {
              window.location.reload();
            }
          }}
        >
          <i class="fas fa-times fa-2x" style={{ color: "#028174" }}></i>
        </Card.Link>
      </Card>
    );
  }
  return (
    <div className="allnotisec">
      <h1>All Notifications</h1>
      {notifications.map(createNotification)}
    </div>
  );
}

export default Allnotifications;
