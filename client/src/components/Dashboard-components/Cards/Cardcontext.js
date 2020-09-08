import React, { createContext } from "react";

import axios from "axios";

export const Cardprovider = createContext();

class Cardcontext extends React.Component {
  constructor() {
    super();

    this.state = {
      savecard: this.savecard,
      isadd: false,
      addfirstcard: this.addfirstcard,
      isaddonemore: false,
      addonemore: this.addonemore,
      cancelClick: this.cancelClick,
      deletecard: this.deletecard,
    };
  }

  cancelClick = () => {
    this.setState({ isadd: false });
    this.setState({ isaddonemore: false });
  };
  addfirstcard = () => {
    this.setState({ isadd: true });
  };

  savecard = (newcard) => {
    axios
      .post("/api/savecard", newcard)
      .then((res) => {
        alert(res.data);
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deletecard = (cardtobedeleted) => {
    axios
      .post("/api/deletecard", cardtobedeleted)
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
      <Cardprovider.Provider value={{ ...this.state }}>
        {this.props.children}
      </Cardprovider.Provider>
    );
  }
}

export default Cardcontext;
