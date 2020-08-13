import React from "react";

import { Navigation } from "@instructure/ui-navigation";
import { Avatar } from "@instructure/ui-avatar";
import { IconDashboardLine,
        IconAdminLine,
        IconCoursesLine,
        IconCalendarMonthLine,
        IconQuestionLine,
        IconCommonsLine } from "@instructure/ui-icons";
import { ScreenReaderContent } from "@instructure/ui-a11y-content";
import { Img } from "@instructure/ui-img";
import "@instructure/canvas-theme";
import "./App.css";
import logo from "./logo.svg";
import { View } from "@instructure/ui-view";
import { DrawerLayout } from "@instructure/ui-drawer-layout";
import { CloseButton } from "@instructure/ui-buttons";
import Step from './components/Step'
//import Popup from './components/Popup'
import {connect} from 'react-redux'
import {} from './actions'
//import {isTourOpenReducer} from './reducers'

class App extends React.Component {
  state = {
    isTourOpen: false,
    visible: true,
  };

  render() {
    return (
      <div style={{ height: "100vh" }}>
        <DrawerLayout>
          <DrawerLayout.Tray
            open={this.state.endOpen}
            placement="start"
            label="Drawer Tray End Example"
            left="check-margin"
            onDismiss={() => {
              this.setState({ endOpen: false });
            }}
          >
          <View
            as="div"
            maxWidth="500px"
            textAlign="center"
            margin="large auto"
            padding="large"
          >
          <CloseButton
            placement="end"
            offset="small"
            onClick={() => {
              this.setState({ endOpen: false });
            }}
            screenReaderLabel="Close"
          />
          <div className="submenu-profile">
            Profile_Place_Holder
          </div>
          <div className="submenu-list">
            <div className="submenu"><a href ="./">Notifications</a></div>
            <div className="submenu"><a href ="./">Profile</a></div>
            <div className="submenu"><a href ="./">Files</a></div>
            <div className="submenu"><a href ="./">Settings</a></div>
            <div className="submenu"><a href ="./">Eportfolios</a></div>
            <div className="submenu"><a href ="./">Shared Content</a></div>
            <div className="submenu"><a href ="./">QR for Mobile Login</a></div>
          </div>
          </View>
          </DrawerLayout.Tray>
          <Navigation
            label="Main navigation"
            toggleLabel={{
            expandedLabel: "Minimize Navigation",
            minimizedLabel: "Expand Navigation",
            }}
          >
          <Navigation.Item
            icon={<Img src={logo} constrain="cover" />}
            label={<ScreenReaderContent>Home</ScreenReaderContent>}
            href="#"
          />
          <div className="step-2">
            <Navigation.Item
            icon={<Avatar name="Thai Chuong" size="x-small" />}
            label="Account"
            onClick={() => {
            this.setState({ endOpen: !this.state.endOpen });
            }}
          />
          </div>          
          <Navigation.Item icon={<IconAdminLine />} label="Admin" href="#" />
          <div className="step-1">
            <Navigation.Item
            icon={<IconDashboardLine />}
            label="Dashboard"
            href="#"
          />
          </div>          
          <div className="step-3">
            <Navigation.Item
            icon={<IconCoursesLine />}
            label="Courses"
            href="#"
          />
          </div>          
          <Navigation.Item
            icon={<IconCalendarMonthLine />}
            label="Calendar"
            href="#"
          />
          <Navigation.Item
            icon={<IconCommonsLine />}
            label="Commons"
            href="#"
          />
          <div className="step-4">
            <Navigation.Item
            icon={<IconQuestionLine />}
            label="Help"
            href="#"
          />
          </div>          
          </Navigation>
        </DrawerLayout>
        <div>
          <Step/>
        </div>       
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    isTourOpen: state.isTourOpen,
    visible: state.visible,
  }
}

export default connect(mapStatetoProps)(App);