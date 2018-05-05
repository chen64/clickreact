import React, {Component} from "react";
import CardBody from "./CardBody";
import Counter from "./Counter";
import images from "../images.json";
import "./style.css";
//main body
class Click extends Component{

    state = {
        images: images,
        score: 0,
        scoreHigh: 0,
        click: []
    }
    handlePoint = id => {
        if(this.state.click.indexOf(id) === -1){
            this.state.click.push(id);
            this.setState({score: this.state.score + 1});
            if(this.state.score === 11){
                alert("You win");
                this.winnerHigh();
            }
        }
        else{
            alert("Clicked on same. You lose");
            this.handleHigh();
        }
        this.shuffle(this.state.images);
    }
    shuffle = array => {
        array.sort(function (){
            return .5 - Math.random()
        })
        this.setState({images: array})
    }
    handleHigh = () => {
        if(this.state.scoreHigh<this.state.score){
            this.setState({
              scoreHigh:this.state.score
            })
        }
        this.setState({
            score: 0,
            click: []
        })
    }
    winnerHigh = () => {
        this.setState({
            scoreHigh: 12
        })
        this.setState({
            score: 0,
            click: []
        })
    }

    render() {
        console.log(this.state.score)

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