import React from "react";
import { Card,CardBody,CardTitle,CardSubtitle,CardText,CardFooter,Button,Container } from "reactstrap";

const Course=()=>{
    return (
        <Card>
            <CardBody>
                <CardSubtitle style={{color:"red"}}>Java Course</CardSubtitle>
                <CardText>It is a java course for beginers</CardText>
                <Container className="text-center">
                    <Button color="danger">Delete</Button>
                    <Button color="warning m-3">Update</Button>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Course;