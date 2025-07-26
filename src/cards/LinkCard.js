// cards/LinkCard.js
import React from "react";
import { Card, CardTitle, CardText, CardActions, Button } from "@chatui/core";

export default function LinkCard({ data = {} }) {
  const {
    title = "跳转卡片",
    description = "点击按钮跳转",
    url = "#",
  } = data;

  return (
    <Card style={{ border: "1px solid #e0e0e0", borderRadius: 10 }}>
      <CardTitle style={{ fontWeight: 600 }}>{title}</CardTitle>
      <CardText>{description}</CardText>
      <CardActions>
        <Button
          color="primary"
          onClick={() => window.open(url, "_blank")}
        >
          立即前往
        </Button>
      </CardActions>
    </Card>
  );
}
