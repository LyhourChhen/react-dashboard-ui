import React from "react";
import styled from "styled-components";
import SmallCard from "./components/SmallCard";
import BigCard from "./components/BigCard";

import { Menu, Dropdown, Button, Pagination, Icon } from "antd";
import ChartComponent from "./components/Chart";

const treatments = require("./components/assets/total treatments.svg");
const patients = require("./components/assets/total patients.svg");
const appointments = require("./components/assets/total appointment.svg");
const upcoming = require("./components/assets/upcoming appointment.svg");

const WrapCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 382px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 2px;
  opacity: 1;
`;
const WrapCard_header = styled.div`
  height: 53px;
  min-height: 53px;
  display: flex;
  align-items: center;
`;
const Wrap = styled.div`
  height: 329px;
  background: #f4f8f9 0% 0% no-repeat padding-box;
  border-radius: 0px 0px 2px 2px;
  opacity: 1;
`;
const FunctionWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

function App() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <SmallCard
          name={"Total Treatments"}
          amount={294}
          picture={treatments}
        />
        <SmallCard name={"Total Patients"} amount={2558} picture={patients} />
        <SmallCard
          name={"Total Appointments"}
          amount={493}
          picture={appointments}
        />
        <SmallCard
          name={"Upcoming Appointments"}
          amount={23}
          picture={upcoming}
        />
      </div>
      <div style={{ marginTop: 30 }}>
        <WrapCard>
          <WrapCard_header>
            <h2 style={{ marginLeft: 20, marginTop: 10 }}>Appointments</h2>
          </WrapCard_header>
          <Wrap>
            <FunctionWrap style={{ marginTop: 20 }}>
              <div style={{ marginLeft: 40 }}>
                <Button style={{ marginRight: 5, color: "#63D2EF" }}>
                  Upcoming
                </Button>
                <Button style={{ marginRight: 5, color: "#63D2EF" }}>
                  Past
                </Button>
              </div>
              <div>
                <Pagination />
              </div>
              <div style={{ marginRight: 40 }}>
                <Dropdown overlay={menu} placement="bottomLeft">
                  <Button style={{ color: "#63D2EF" }}>
                    Sort by <Icon type="down" />
                  </Button>
                </Dropdown>
              </div>
            </FunctionWrap>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: 20,
              }}
            >
              <BigCard
                userName={"LyhourChhen"}
                sex={"Male"}
                location={"Terk Tla, Phnom Penh"}
                date={"June 06, 2020"}
                time={"5:40 PM"}
                picture={
                  "https://avatars3.githubusercontent.com/u/22294314?s=460&v=4"
                }
              />
              <BigCard
                userName={"LyhourChhen"}
                sex={"Male"}
                location={"Terk Tla, Phnom Penh"}
                date={"June 06, 2020"}
                time={"5:40 PM"}
                picture={
                  "https://avatars3.githubusercontent.com/u/22294314?s=460&v=4"
                }
              />
              <BigCard
                userName={"LyhourChhen"}
                sex={"Male"}
                location={"Terk Tla, Phnom Penh"}
                date={"June 06, 2020"}
                time={"5:40 PM"}
                picture={
                  "https://avatars3.githubusercontent.com/u/22294314?s=460&v=4"
                }
              />
              <BigCard
                userName={"LyhourChhen"}
                sex={"Male"}
                location={"Terk Tla, Phnom Penh"}
                date={"June 06, 2020"}
                time={"5:40 PM"}
                picture={
                  "https://avatars3.githubusercontent.com/u/22294314?s=460&v=4"
                }
              />
            </div>
          </Wrap>
        </WrapCard>
        <div style={{ marginTop: 30 }}>
          <WrapCard>
            <ChartComponent />
          </WrapCard>
        </div>
      </div>
    </div>
  );
}

export default App;
