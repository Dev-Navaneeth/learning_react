import Madegoal from "./Madegoal";
import MissedGoal from "./Missedgoal";
function Goal(props){
    let isGoal = props.goal;
    if(props.isGoal){
        return <Madegoal/>
    }
    else{
        return <MissedGoal/>
    }
}


export default Goal;
