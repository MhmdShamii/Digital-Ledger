import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Products from "./components/ProductsPage/Products";
import Users from "./components/usersPage/Users";
import { useState } from "react";

export const users = [
  {
    id: 1,
    name: "Omar Khalil",
    email: "omar@example.com",
    phone: "70123456",
    credit: 0,
    totalOwed: 22.5,
    history: [
      { productId: 1, qty: 1, date: "2025-11-01" }, // Chips
      { productId: 2, qty: 1, date: "2025-11-01" }, // Soda
      { productId: 5, qty: 1, date: "2025-11-02" }, // 3 Gaming Hours
    ],
  },
  {
    id: 2,
    name: "Ali Hassan",
    email: "ali@example.com",
    phone: "76112233",
    credit: 20,
    totalOwed: 0,
    history: [], // prepaid user, no items yet
  },
  {
    id: 3,
    name: "Mariam Fawaz",
    email: "mariam@example.com",
    phone: "81005544",
    credit: 50,
    totalOwed: 0,
    history: [],
  },
  {
    id: 4,
    name: "Hassan Dib",
    email: "hassan@example.com",
    phone: "78990012",
    credit: 0,
    totalOwed: 35,
    history: [
      { productId: 4, qty: 1, date: "2025-11-04" }, // Hubbly
      { productId: 6, qty: 1, date: "2025-11-04" }, // 5 Gaming Hours
    ],
  },
  {
    id: 5,
    name: "Rami Saad",
    email: "rami@example.com",
    phone: "70998877",
    credit: 10,
    totalOwed: 0,
    history: [],
  },
];

export const products = [
  {
    id: 1,
    name: "Chips",
    price: 5,
    type: "snacks",
    img: "https://images.unsplash.com/photo-1585238341988-52a97f1901f0?w=400",
  },
  {
    id: 2,
    name: "Soda",
    price: 3.5,
    type: "snacks",
    img: "https://images.unsplash.com/photo-1581579185169-947f2ef01f3b?w=400",
  },
  {
    id: 3,
    name: "Chocolate Bar",
    price: 4,
    type: "snacks",
    img: "https://images.unsplash.com/photo-1588167101361-04a94f50c4c7?w=400",
  },
  {
    id: 4,
    name: "Hubbly Bubbly",
    price: 15,
    type: "hubbly",
    img: "https://images.unsplash.com/photo-1598550476439-6f3d03438e2b?w=400",
  },
  {
    id: 5,
    name: "3 Gaming Hours",
    price: 14,
    type: "play",
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400",
  },
  {
    id: 6,
    name: "5 Gaming Hours",
    price: 20,
    type: "play",
    img: "https://images.unsplash.com/photo-1607082349983-cd62bc82f333?w=400",
  },
];

function App() {
  const [userArr, setUserArr] = useState(users);
  const [productsArr, setProductsArr] = useState(products);

  function addUser(user) {
    setUserArr((prev) => [...prev, user]);
  }
  function updateUser(updated) {
    setUserArr((prev) => prev.map((u) => (u.id === updated.id ? updated : u)));
  }

  function updateProduct(updated) {
    setProductsArr((prev) =>
      prev.map((p) => (p.id === updated.id ? updated : p))
    );
  }

  function addProduct(product) {
    setProductsArr((prev) => [...prev, product]);
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-gray-200 flex flex-col items-center p-4 box-border">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/users"
            element={
              <Users
                users={userArr}
                products={products}
                addUser={addUser}
                updateUser={updateUser}
              />
            }
          />
          <Route
            path="/products"
            element={
              <Products
                products={productsArr}
                updateProduct={updateProduct}
                addProduct={addProduct}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
