import React, {Component} from 'react';
import Profile from './Profile';
import nba from '../nba-client';
import ShotChart from './ShotChart.js';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            playerInfo: {},
            playerId: 201939
        }
    }

    componentDidMount() {
        window.nba = nba;
        const curry = nba.findPlayer('Stephen Curry');
        console.log('curry -> ', curry)
        nba.stats.playerInfo({PlayerID: nba.findPlayer('Stephen Curry').playerId}).then(info => {
            console.log(info);
            const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
            this.setState({playerInfo: playerInfo})
        })
    }

    render() {
        return (
            <div className="main">
                <Profile playerInfo={this.state.playerInfo}/>
                <ShotChart/>
            </div>
        );
    }
}

export default Main;