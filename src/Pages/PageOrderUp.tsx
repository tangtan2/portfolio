import React from "react";
import Page from "../Shared/Page";
import Spacer from "../Shared/Spacer";
import UserPage from "../images/order_up/user_page.png";
import WarehousePage from "../images/order_up/warehouse_page_all.png";
import AdminPage from "../images/order_up/admin_page.png";
import CreateNewAccountForm from "../images/order_up/create_new_account_form.png";

export default class PageOrderUp extends React.Component {
  render() {
    return (
      <Page>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              borderBottom: "1px solid lightgrey",
            }}
          >
            OrderUp!: Live Ordering System for Manufacturing Facilities
          </div>
          <Spacer type="row" size="medium" />
          <div>
            See the code <a href="https://github.com/tangtan2/cbware">here</a>!
          </div>
          <Spacer type="row" size="xxlarge" />
          <div
            style={{
              borderRadius: "10px",
              border: "1px solid lightgrey",
              boxShadow: "2px 2px 1px 1px lightgrey",
              padding: "20px",
              backgroundColor: "white",
              width: "950px",
              fontStyle: "italic",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                borderBottom: "1px solid lightgrey",
              }}
            >
              Skill Summary
            </div>
            <Spacer type="row" size="medium" />
            <div>
              OrderUp! was developed using a C#/.NET Core backend and a React
              frontend, employing SignalR to facilitate WebSocket communication,
              and deploys on IIS. It was recently installed as a pilot project
              in a medium-to-large size manufacturing facility in Ontario,
              Canada.
            </div>
          </div>
          <Spacer type="row" size="xxlarge" />
          <div>
            Some large industrial plants face a problem where their sheer size
            makes it difficult for warehouse personnel to keep track of part
            requests from different areas in the plant. One solution to this
            problem is to build a live ordering system, much like the
            touchscreen order kiosks at any fast food restaurant today.
          </div>
          <Spacer type="row" size="xxlarge" />
          <div>
            Live ordering requires two-way communication between computers
            connected on the same network. One way to achieve this communication
            is through a special communications protocol called WebSocket. A
            WebSocket protocol is established when the client sends a special
            HTTP request, called a handshake request. The server then returns an
            HTTP handshake response, which upgrades the connection from the HTTP
            protocol to the WebSocket protocol. Once this connection is
            established, data can be sent in full-duplex (bidirectional) mode.
          </div>
          <Spacer type="row" size="xxlarge" />
          <div>
            OrderUp! is a web application that employs the WebSocket protocol to
            allow operators in a manufacturing facility to place warehouse
            orders, which will appear in real time on the warehouse staff's
            computer. Warehouse staff can then pick the order, send it out, and
            complete the order, which will then disappear off of the operator's
            screen.
          </div>
          <Spacer type="row" size="xxlarge" />
          <div
            style={{
              padding: "20px",
              borderRadius: "10px",
              border: "1px solid lightgrey",
              boxShadow: "2px 2px 1px 1px lightgrey",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <img src={UserPage} alt="User Page" width="950px" />
            <div style={{ fontSize: "10pt", fontStyle: "italic" }}>
              Operators will have access to this screen to place new orders and
              view their active orders.
            </div>
          </div>
          <Spacer type="row" size="xxlarge" />
          <div
            style={{
              padding: "20px",
              borderRadius: "10px",
              border: "1px solid lightgrey",
              boxShadow: "2px 2px 1px 1px lightgrey",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <img src={WarehousePage} alt="Warehouse Page" width="950px" />
            <div
              style={{ fontSize: "10pt", fontStyle: "italic", width: "950px" }}
            >
              Warehouse staff will have access to this screen to view active
              orders from all users. When an order is complete, they can click
              the Complete button to remove the order from this screen and the
              screen of the operator who placed the order.
            </div>
          </div>
          <Spacer type="row" size="xxlarge" />
          This web application also features a fully functioning user management
          system, with encryted password storage and admin verification required
          for new accounts.
          <Spacer type="row" size="xxlarge" />
          <div
            style={{
              width: "950px",
              padding: "20px",
              borderRadius: "10px",
              border: "1px solid lightgrey",
              boxShadow: "2px 2px 1px 1px lightgrey",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <img
              src={CreateNewAccountForm}
              alt="Create New Account Form"
              width="300px"
            />
            <div
              style={{
                fontSize: "10pt",
                fontStyle: "italic",
              }}
            >
              New users can create accounts by filling out this form.
            </div>
          </div>
          <Spacer type="row" size="xxlarge" />
          <div
            style={{
              padding: "20px",
              borderRadius: "10px",
              border: "1px solid lightgrey",
              boxShadow: "2px 2px 1px 1px lightgrey",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <img src={AdminPage} alt="Admin Page" width="950px" />
            <div style={{ fontSize: "10pt", fontStyle: "italic" }}>
              Administrators will have access to this screen, which allows them
              to verify new accounts and allow new users to access the
              application.
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
