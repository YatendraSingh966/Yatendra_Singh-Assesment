import React from "react";
import { Menu } from "antd";
import {
  AppstoreAddOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function SideMenu() {
  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        onClick={(items) => {
          //items.key
          navigate(items.key);
        }}
        items={[
          { label: "Dashboard", icon: <AppstoreAddOutlined />, key: "/" },
          { label: "Inventory", icon: <ShopOutlined />, key: "/inventory" },
          { label: "Orders", icon: <ShoppingCartOutlined />, key: "/orders" },
          { label: "Customers", icon: <UserOutlined />, key: "/customers" },
        ]}
      ></Menu>
    </div>
  );
}
