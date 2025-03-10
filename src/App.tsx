import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Order from "./pages/Order";
import Customers from "./pages/Customers";
import Marketing from "./pages/Marketing";
import Content from "./pages/Content";
import Analytics from "./pages/Analytics";
import Discounts from "./pages/Discounts";
import Home from "./pages/Home";
import Themes from "./pages/Themes";
import BlogPosts from "./pages/BlogPosts";
import Pages from "./pages/Pages";
import Navigation from "./pages/Navigation";
import Preferences from "./pages/Preferences";
import ManageAccount from "./pages/ManageAccount";
import AllStores from "./pages/AllStores";
import Collection from "./pages/products/Collections";
import Inventory from "./pages/products/Inventory";
import PurchaseOrders from "./pages/products/PurchaseOrders";
import Transfers from "./pages/products/Transfers";
import GiftCards from "./pages/products/GiftCards";
import Catalog from "./pages/products/Catalog";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Order />} />
          <Route path="customers" element={<Customers />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="content" element={<Content />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="discounts" element={<Discounts />} />
          <Route path="/dashboard/onlinestore/themes" element={<Themes />} />
          <Route path="/dashboard/onlinestore/blog-posts" element={<BlogPosts />} />
          <Route path="/dashboard/onlinestore/pages" element={<Pages />} />
          <Route path="/dashboard/onlinestore/navigation" element={<Navigation />} />
          <Route path="/dashboard/onlinestore/preferences" element={<Preferences />} />
          <Route path="/dashboard/manage-account" element={<ManageAccount />} />
          <Route path="/dashboard/all-stores" element={<AllStores />}/>  
          <Route path="/dashboard/products/colection" element={<Collection />} />
          <Route path="/dashboard/products/inventory" element={<Inventory />} />
          <Route path="/dashboard/products/purchase-orders" element={<PurchaseOrders />} />
          <Route path="/dashboard/products/transfers" element={<Transfers />} />
          <Route path="/dashboard/products/gift-cards" element={<GiftCards />} />
          <Route path="/dashboard/products/catalog" element={<Catalog />} />
          


        </Route>
      </Routes>
    </Router>
  );
};

export default App;
