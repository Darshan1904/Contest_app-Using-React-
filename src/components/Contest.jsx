import React, { Component } from 'react'

export default class contest extends Component {
  render() {
    const {title,url,date,time,d,image} = this.props;
    return (
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-[#D2E9E9] bg-[#E3F4F4] border-opacity-60 rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition duration-150 ease-linear">
                <img className="lg:h-48 md:h-36 w-full object-fit object-center" src={image} alt="blog"/>
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
                  <hr/>
                  <p className="card-text my-1">Date : {date}</p>
                  <p className="card-text my-1">Start Time : {time} UTC</p>
                  <p className="card-text my-1">Duration : {d} Hours</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" target='_blank' href={url} rel="noreferrer">Register
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
      )
  }
}
