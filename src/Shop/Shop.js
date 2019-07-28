import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ItemCard from "../Item/Item";
import { Item, Shop } from "../Model/gilded_rose";
export default class shop extends Component {
  state = {
    items: [
      new Item("Meteor Shard", 12, 30),
      new Item("Goblin's Hat", 13, 40),
      new Item("Aged Brie", 15, 25),
      new Item("Backstage passes to a TAFKAL80ETC concert", 12, 15),
      new Item("Sulfuras, Hand of Ragnaros", 20, 80),
      new Item("Conjured", 20, 5)
    ]
  };

  UpdateItems() {
    var shop = new Shop(this.state.items);
    this.setState({
      items: shop.updateQuality()
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 style={{ marginTop: 20, fontFamily: "Montserrat" }}>
              Gilded Rose{" "}
            </h1>
          </Col>
          <Col>
            <Button
              style={{ float: "right", marginTop: 20 }}
              variant="primary"
              title="Travel 1 day into the future"
              onClick={() => {
                this.UpdateItems();
              }}
            >
              Time Machine
            </Button>
          </Col>
        </Row>
        <hr />
        <Row>
          {this.state.items.map(item => (
            <Col>
              <ItemCard
                name={item.name}
                quality={item.quality}
                sellInValue={item.sellIn}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
