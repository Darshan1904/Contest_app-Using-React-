import React, { Component } from 'react'
import Contest from './Contest'

export default class contests extends Component {
  constructor(){
    super();
    this.state = {
      contestList:[],
      loading: false
    }
  }

  async componentDidMount(){
    this.props.func(50);
    this.setState({loading:true});
    let data = await fetch(`https://kontests.net/api/v1/${this.props.plateform}`);
    this.props.func(70);
    let parsedData = await data.json();
    this.props.func(90);
    this.setState({contestList:parsedData, loading:false});
    this.props.func(100);
  }

  render() {
    return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {
              this.state.contestList?.map((item,index)=>{
                let d = Number.parseInt(item.duration);
                d = d/3600;
                d = Math.round(d);
                let date = "",time = "";
                for(let i=0; i<10; i++){
                    date += item.start_time[i];
                }
                for(let i=11; i<item.start_time.length-4; i++){
                    time += item.start_time[i];
                }
                return (
                    <Contest key={index} title={item.name} url={item.url} date={date} time={time} d={d} image={this.props.image}/>
                )
              })
            }
          </div>
        </div>
      </section>
    )
  }
}
