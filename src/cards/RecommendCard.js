import React from "react";
import { Card, CardTitle, CardText, CardActions, Button } from "@chatui/core";

export default function RecommendCard({ data }) {
  const { title, recommends = [] } = data;

  return (
    <Card fluid>
      <CardTitle>{title}</CardTitle>
      <CardText>
        <ul style={{ paddingLeft: 16, margin: 0 }}>
          {recommends.map((item) => (
            <li key={item.knowledgeId} style={{ marginBottom: 8 }}>
              {item.title}
            </li>
          ))}
        </ul>
      </CardText>
      <CardActions direction="row">
        <Button color="primary">查看更多</Button>
      </CardActions>
    </Card>
  );
}
