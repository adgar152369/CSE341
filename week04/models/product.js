const getDb = require('../util/database').getDb;

class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title,
    this. price = price,
    this. description = description,
    this.imageUrl = imageUrl
  }

  save () {
    // connect to database
    const db = getDb();
    // connect to a products collection
    return db.collection('product')
      .insertOne(this)
        .then(result => {
          console.log(result);
        })
        .catch(err => console.log(err));
  }

  static fetchAll() {
    const db = getDb();
    return db.collection('product').find().toArray()
      .then(products => {
        console.log(products);
        return products;
      })
      .catch(err => console.log(err));
  }
}



module.exports = Product;
