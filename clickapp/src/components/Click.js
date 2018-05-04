import React from "react";
import CardBody from "./CardBody";
import Counter from "./Counter";
import images from "../images.json";
import "./style.css";
//main body
class Click extends React.Component{

    state = {
        images,
        score: 0,
        scoreHigh: 0
    }
    handlePoint = id => {

        this.handleHigh();
    }

    handleHigh = () => {
        if(this.state.scoreHigh<this.state.score){
            this.setState({
              scoreHigh:this.state.score
            })
          }
    }

    render() {
        console.log(this.state.images)
        return(
            <div>
                <Counter 
                    score={this.state.score}
                    scoreH={this.state.scoreHigh}
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