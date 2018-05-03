import React from "react";
import CardBody from "./CardBody";
import Counter from "./Counter";
import images from "../images.json";
//main body
class Click extends React.Component{

    state = {
        images,
        count: 0
    }
    handlePoint = id => {

    }

    render() {
        console.log(this.state.images)
        return(
            <div>
                <Counter 
                    count={this.state.count}
                />
            <main className="container">
            {this.state.images.map(pic =>(
                <CardBody 
                    handle={this.handlePoint}
                    id={pic.id}
                    key={pic.id}
                    image={pic.image}
                />
            ))}
            </main>
            <footer className="footer">
                <div className="bottom">Game</div>
            </footer>
            </div>
        )
    }

}

export default Click;