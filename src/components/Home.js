import React from "react";
import { Button, Jumbotron,Container } from "reactstrap";

const Home = () => {
    return (
        <div>
            <Jumbotron className="text-center bg-primary">
                <h1 className="display-3">Learncodewith Durgesh</h1>
                <p>
                 This is developed by Learncodewith Durgesh for learning purpose backed is on spring boot and frontend on react js
                </p>
                <Container>
                    <Button color="success" outline>Start Using</Button>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Home;