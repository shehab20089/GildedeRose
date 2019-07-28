import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class ItemCard extends Component {
  render() {
    return (
      <Card style={{ width: "18rem", marginBottom: 12 }}>
        <Card.Body>
          <Card.Title> {this.props.name}</Card.Title>
          <Card.Text>
            Quality:
            <span style={{ fontWeight: "bold" }}>
              {" " + this.props.quality}
            </span>
          </Card.Text>
          {this.props.name != "Sulfuras, Hand of Ragnaros" ? (
            <Card.Text>
              Sell In Value:
              <span style={{ fontWeight: "bold" }}>
                {" " + this.props.sellInValue + " Days"}
              </span>
            </Card.Text>
          ) : (
            <Card.Text>
              Sell In Value:
              <span style={{ fontWeight: "bold" }}>{" " + "Not for sale"}</span>
            </Card.Text>
          )}
          {this.props.name == "Sulfuras, Hand of Ragnaros" ? (
            <Button variant="outline-danger" size="lg" block disabled>
              Buy
            </Button>
          ) : (
            <Button variant="outline-danger" size="lg" block>
              Buy
            </Button>
          )}
        </Card.Body>
      </Card>
    );
  }
}
