import React, { Component } from "react";
import images from "../../images.json";
import Images from "../Images/Images";
import "./Game.css";
import Scoreboard from "../Scoreboard/Scoreboard.js";


class Game extends Component {

    //keep track of state for clicked images and scores
    state = {
        images,
        score: 0,
        highScore: 0,
        feedback: "Click a Wes Anderson character to get started!"
    };

    //set up handleClick method
    handleClick = (id, clicked) => {
        const imageArray = this.state.images;

        if (clicked) {
            imageArray.forEach((image, i) => {
                imageArray[i].clicked = false;
            });
            return this.setState({
                image: imageArray.sort(() => Math.random() - .5),
                score: 0,
                feedback: "You already clicked that one! Better luck next time old chap."
            })
        } else {
            imageArray.forEach((image, i) => {
                if (id === image.id) {
                    imageArray[i].clicked = true;
                }
            });

            //update state for the scores and check if it's a new high score 
            const { highScore, score } = this.state;
            const userScore = score + 1;
            const userHighScore = userScore > highScore ? userScore : highScore;

            return this.setState({
                image: imageArray.sort(() => Math.random() - .5),
                score: userScore,
                highScore: userHighScore,
                feedback: "Nicely done! Keep it going."
            });
            //end of else statement for correct guess
        }
    };

    //render and return!
    render() {
        return (
            <div>
                <div className="container game-container">
                    <Scoreboard
                        score={this.state.score}
                        highScore={this.state.highScore}
                        feedback={this.state.feedback}
                    />
                    <div className="gameboard container">
                        <div className="row">
                                {this.state.images.map(image => (
                                    <Images
                                        className= "three columns"
                                        key={image.id}
                                        id={image.id}
                                        name={image.name}
                                        image={image.image}
                                        clicked={image.clicked}
                                        handleClick={this.handleClick} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
};

export default Game;