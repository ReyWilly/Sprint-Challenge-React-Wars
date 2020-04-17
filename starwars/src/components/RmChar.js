import React from "react";
import {Card, CardText, CardBody, CardTitle} from "reactstrap";

export default function RmChar (props) {

    let {name, status, species, type} = props;

    return(
        <div className="RickMortyCard">
            <Card>
                <CardTitle><strong>{name}</strong></CardTitle>

                <CardBody>
                    <CardText>Status: {status}</CardText>
                    <CardText>Species: {species}</CardText>
                    <CardText>Type: {type}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}