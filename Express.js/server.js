import express from "express";

const app = express();

app.use(express.json());

// Product data
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000
  },
  {
    id: 2,
    name: "Mobile",
    price: 20000
  }
];


// 1. GET - Read all products
// GET http://localhost:4000/products

app.get("/products", (req, res) => {
  res.status(200).json({
    message: "All products fetched successfully",
    data: products
  });
});


// 2. GET - Read product by ID
// GET http://localhost:4000/products/1

app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);

  const product = products.find(
    (prod) => prod.id === productId
  );

  if (product) {
    res.status(200).json({
      message: "Product fetched successfully",
      data: product
    });
  } else {
    res.status(404).json({
      message: "Product not found"
    });
  }
});


// 3. POST - Create a new product
// POST http://localhost:4000/products

app.post("/products", (req, res) => {
  const newProduct = req.body;

  products.push(newProduct);

  res.status(201).json({
    message: "Product created successfully",
    data: newProduct
  });
});


// 4. PUT - Update product
// PUT http://localhost:4000/products/1

app.put("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);

  const productIndex = products.findIndex(
    (prod) => prod.id === productId
  );

  if (productIndex !== -1) {
    products[productIndex] = {
      ...products[productIndex],
      ...req.body,
      id: productId
    };

    res.status(200).json({
      message: "Product updated successfully",
      data: products[productIndex]
    });
  } else {
    res.status(404).json({
      message: "Product not found"
    });
  }
});


// 5. DELETE - Delete product
// DELETE http://localhost:4000/products/1

app.delete("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);

  const productIndex = products.findIndex(
    (prod) => prod.id === productId
  );

  if (productIndex !== -1) {
    const deletedProduct = products.splice(productIndex, 1);

    res.status(200).json({
      message: "Product deleted successfully",
      data: deletedProduct[0]
    });
  } else {
    res.status(404).json({
      message: "Product not found"
    });
  }
});


// Start server
app.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});