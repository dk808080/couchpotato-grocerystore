import React, { createContext } from "react";

import axios from "axios";
import getServerUrl from "../../../utils/getServerUrl";

export const Addressprovider = createContext();

class Addresscontext extends React.Component {
  constructor() {
    super();

    this.state = {
      saveaddress: this.saveaddress,
      isadd: false,
      addfirstaddr: this.addfirstaddr,
      isaddonemore: false,
      addonemore: this.addonemore,
      cancelClick: this.cancelClick,
      deleteaddress: this.deleteaddress,
    };
  }

  cancelClick = () => {
    this.setState({ isadd: false });
    this.setState({ isaddonemore: false });
  };
  addfirstaddr = () => {
    this.setState({ isadd: true });
  };

  saveaddress = (newaddress) => {
    axios
      .post(`${getServerUrl()}/api/saveaddress`, newaddress)
      .then((res) => {
        alert(res.data);
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteaddress = (addresstobedeleted) => {
    axios
      .post(`${getServerUrl()}/api/deleteaddress`, addresstobedeleted)
      .then((res) => {
        alert(res.data);
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  addonemore = () => {
    this.setState({ isaddonemore: true });
  };

  render() {
    return (
      <Addressprovider.Provider value={{ ...this.state }}>
        {this.props.children}
      </Addressprovider.Provider>
    );
  }
}

export default Addresscontext;
