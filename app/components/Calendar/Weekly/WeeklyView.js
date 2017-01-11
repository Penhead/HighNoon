import React from 'react';

export default class Week extends React.Component {

    constructor() {
        super();
        this.state = {
            viewHeight: "400px"
        };
    }

    componentDidMount (){
        window.addEventListener("resize", function () {
            console.log('resizing', this);
        }.bind(this));
    }
    buildWeeklyTimes (){
        let timeDivs = ["12am", '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'];
        return timeDivs.map((x, idx) => {
            return <div className="rc-weekly-times" key={idx}><p className="rc-hourly-time"> {x}</p></div>;
        });
    }
    buildWeeklySlots (){
        let timeDivs = [];
        for (let i = 1; i <= 24; i++){
            timeDivs.push(<div key={i} className="rc-markercell">
                <div className="rc-dualmarker"></div>
            </div>);
        }
        return timeDivs;
    }
    buildWeeklyDayCols (){
        let timeDivs = [];
        for (let i = 1; i <= 7; i++){
            timeDivs.push(<td key={i} className="rc-weekly-day-col"></td>);
        }
        return timeDivs;
    }
    render() {
        let viewHeight = {
            height: "400px"
        };
        return (
            <div className="rc-weekly-wrapper">
                <div>
                    <table className="rc-weekly-day-table">
                        <tbody>
                        <tr>
                            <td style={{width: "60px"}}>&nbsp;</td>
                            <td className="rc-day-col">Sun</td>
                            <td className="rc-day-col">Mon</td>
                            <td className="rc-day-col">Tues</td>
                            <td className="rc-day-col">Wed</td>
                            <td className="rc-day-col">Thur</td>
                            <td className="rc-day-col">Fri</td>
                            <td className="rc-day-col">Sat</td>
                            <td style={{width: "10px"}}>&nbsp;</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div style={viewHeight} className="rc-weekly-table-wrapper">
                    <table  className="rc-weekly-table">
                        <tbody>
                        <tr height="1">
                            <td style={ {width: '60px'}}></td>
                            <td colSpan="7">
                                <div className="rc-hours-wrapper">
                                    <div className="rc-weekly-hoursmarker">
                                        {this.buildWeeklySlots().map(function (x) {
                                            return x;
                                        })}
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: "60px"}}>
                                {this.buildWeeklyTimes().map(function (x) {
                                    return x;
                                })}
                            </td>
                            {this.buildWeeklyDayCols().map(function (x) {
                                return x;
                            })}
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}