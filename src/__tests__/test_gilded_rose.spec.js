var {expect} = require('chai');
var {Shop, Item} = require('../Model/gilded_rose');
describe("Gilded Rose", function() {

  // it("should foo", function() {
  //   const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].name).to.equal("fixme");
  // });
  it("general, sell-in > 0  ", function() {
    const gildedRose = new Shop([ new Item("foo", 25, 17) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(24);
    expect(items[0].quality).to.equal(16);

  });
  it("general, sell-in = 0  ", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 18) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(16);
  });
  it("general, sell-in < 0  ", function() {
    const gildedRose = new Shop([ new Item("foo", -3, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(-4);
    expect(items[0].quality).to.equal(18);

  });
  it("general, quality = 0  ", function() {
    const gildedRose = new Shop([ new Item("foo", 20, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(19);
    expect(items[0].quality).to.equal(0);

  });
  //Backstage passes to a TAFKAL80ETC concert
  it("Backstage passes to a TAFKAL80ETC concert, sell-in > 10  ", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 11, 17) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(10);
    expect(items[0].quality).to.equal(18);
  });
  it("Backstage passes to a TAFKAL80ETC concert, sell-in > 10, quality = 50  ", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 11, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(10);
    expect(items[0].quality).to.equal(50);
  });
  it("Backstage passes to a TAFKAL80ETC concert, sell-in = 10  ", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 17) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(9);
    expect(items[0].quality).to.equal(19);
  });
  it("Backstage passes to a TAFKAL80ETC concert, sell-in = 10, quality = 50  ", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(9);
    expect(items[0].quality).to.equal(50);
  });
  it("Backstage passes to a TAFKAL80ETC concert, sell-in between (6,10)  ", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 8, 17) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(7);
    expect(items[0].quality).to.equal(19);
  });
  it("Backstage passes to a TAFKAL80ETC concert, sell-in between (6,10), quality = 50  ", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 8, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(7);
    expect(items[0].quality).to.equal(50);
  });
  it("Backstage passes to a TAFKAL80ETC concert, sell-in = 5  ", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 17) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(4);
    expect(items[0].quality).to.equal(20);
  });
  it("Backstage passes to a TAFKAL80ETC concert, sell-in = 5, quality = 50  ", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(4);
    expect(items[0].quality).to.equal(50);
  });
  it("Backstage passes to a TAFKAL80ETC concert, sell-in < 5   ", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 4, 17) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(3);
    expect(items[0].quality).to.equal(20);
  });
  it("Backstage passes to a TAFKAL80ETC concert, sell-in < 5, qualuity = 50   ", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 4, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(3);
    expect(items[0].quality).to.equal(50);
  });
  it("Backstage passes to a TAFKAL80ETC concert, sell-in = 0  ", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 17) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(0);
  });
  it("Backstage passes to a TAFKAL80ETC concert, sell-in < 0   ", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", -1, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(-2);
    expect(items[0].quality).to.equal(0);
  });
  
  
  //Aged Brie
  it("Aged Brie, sell-in > 0, quality > 0 ", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 12,25 ) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(11);
    expect(items[0].quality).to.equal(26);
  });

  it("Aged Brie, sell-in > 0, quality = 50 ", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 12,50 ) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(11);
    expect(items[0].quality).to.equal(50);
  });

  it("Aged Brie, sell-in < 0, quality < 50 ", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", -1,25 ) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(-2);
    expect(items[0].quality).to.equal(26);
  });

  it("Aged Brie, sell-in < 0, quality = 50 ", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", -1,50 ) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(-2);
    expect(items[0].quality).to.equal(50);
  });

  // Sulfuras
  it("Sulfuras, sell-in < 0, quality = 80 ", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", -1,80 ) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(80);
  });
  it("Sulfuras, sell-in > 0, quality = 80 ", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 11,80 ) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).to.equal(11);
    expect(items[0].quality).to.equal(80);
  });

  //Conjured
  it("Conjured, sell-in > 0, quality > 0", function() {
    const gildedRose = new Shop([ new Item("Conjured", 11,45 ) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Conjured");
    expect(items[0].sellIn).to.equal(10);
    expect(items[0].quality).to.equal(43);
  });
  it("Conjured, sell-in < 0, quality > 0", function() {
    const gildedRose = new Shop([ new Item("Conjured", -1,45 ) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Conjured");
    expect(items[0].sellIn).to.equal(-2);
    expect(items[0].quality).to.equal(43);
  });
  it("Conjured, sell-in < 0, quality = 1", function() {
    const gildedRose = new Shop([ new Item("Conjured", -1,1 ) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Conjured");
    expect(items[0].sellIn).to.equal(-2);
    expect(items[0].quality).to.equal(0);
  });
  it("Conjured, sell-in < 0, quality = 0", function() {
    const gildedRose = new Shop([ new Item("Conjured", -1,0 ) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Conjured");
    expect(items[0].sellIn).to.equal(-2);
    expect(items[0].quality).to.equal(0);
  });

  

});
