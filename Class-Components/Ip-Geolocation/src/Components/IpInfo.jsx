import React, { Component } from "react";
import { InfinitySpin } from "react-loader-spinner";

export default class IpInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: null,
      isLoading: true,
    };
  }

  async getIp() {
    const responseIP = await fetch("https://api.ipify.org?format=json");
    return (await responseIP.json()).ip;
  }

  async getInfo() {
    const ip = await this.getIp();
    const responseInfoIp = await fetch(`http://ipwho.is/${ip}`);
    return await responseInfoIp.json();
  }

  componentDidMount() {
    this.getInfo().then((data) => {
      this.setState({ info: data, isLoading: false });
    });
  }

  render() {
    if (this.state.isLoading) {
      return <InfinitySpin width="200" color="#fff" />;
    }

    const infoIp = this.state.info;
    console.log(infoIp);

    return (
      <div className="card-container bg-slate-600 text-white w-96 rounded-lg">
        <div className="header bg-slate-700 rounded-t-lg">
          <div className="flex flex-col items-center justify-center gap-5 p-4">
            <div className="img-flag">
              <img
                src={infoIp.flag.img}
                className="w-20 h-20 object-cover rounded-full "
                alt=""
              />
            </div>
            <div className="description text-center">
              <h4 className="name-country font-bold text-xl mb-2">
                {infoIp.country}
              </h4>
              <h6>{infoIp.city}</h6>
              <p>isp: {infoIp.connection.isp}</p>
            </div>
          </div>
        </div>
        <div className="body p-4 px-6">
          <p className="font-semibold mb-2">IP: {infoIp.ip}</p>
          <p className="font-semibold mb-2">latitude: {infoIp.latitude}</p>
          <p className="font-semibold">longitude: {infoIp.longitude}</p>
        </div>
      </div>
    );
  }
}
