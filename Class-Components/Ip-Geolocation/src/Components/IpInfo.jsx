import React, { Component } from "react";

export default class IpInfo extends Component {
  render() {
    return (
      <div className="card-container bg-indigo-50 w-96 rounded-lg">
        <div className="header bg-white rounded-t-lg">
          <div className="flex flex-col items-center justify-center gap-5 p-4">
            <div className="img-flag">
              <img
                src="https://cdn.ipwhois.io/flags/ir.svg"
                className="w-20 h-20 object-cover rounded-full"
                alt=""
                srcset=""
              />
            </div>
            <div className="description text-center">
              <h4 className="name-country font-bold text-xl mb-2">Iran</h4>
              <h6>Tehran</h6>
              <p>isp: Irancell</p>
            </div>
          </div>
        </div>
        <div className="body p-4 px-6">
          <p className="font-semibold mb-2">IP: 1.2.3.4</p>
          <p className="font-semibold mb-2">latitude: 123456</p>
          <p className="font-semibold">longitude: 123456</p>
        </div>
      </div>
    );
  }
}
