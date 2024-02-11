function Product(name, price) {
    this.name = name;
    this.price = price;
    return this
  }
  
  function Food(name, price) {
    Product(this, name, price);
    this.category = 'food';
    return this
  }
  
  console.log(new Food('cheese', 5));
  console.log(new Food('chee', 6));