import React from "react";
import { Space, Badge, Image, Typography } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";

export default function AppHeader() {
  return (
    <div className="AppHeader">
      <Image width={40} src=""></Image>
      <Typography.Title>Yatendra's Dashboard</Typography.Title>
      <Space>
        <Badge count={10} dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={20}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  );
}
