import { Component} from 'react';
class Events extends Component {
    push(){
        console.log("push the button again");
    };
    render() {
        return(
            <div>
                <button onClick={()=>this.push()}>PUSH</button>
            </div>
        )
    };
};
export default Events;