// ScheduleCard.js
import React from "react";
import { Card, CardTitle, CardText, CardActions, Button, Icon } from "@chatui/core";

export default function ScheduleCard({ data = {} }) {
  const {
    topic ,
    dateStr ,
    timeStr ,
    participants ,
    location ,
  } = data;

  return (
    <Card style={{ border: "1px solid #e0e0e0", borderRadius: 10 }}>
      <CardTitle style={{ fontWeight: 600, fontSize: 18 }}>新建日程</CardTitle>

      <CardText>
        {/* 主题 */}
        <div style={rowStyle}>
          <Icon type="bullhorn" style={iconStyle} />
          <span style={labelStyle}>主题</span>
        </div>
        <div style={boxStyle}>
          <input defaultValue={topic} style={inputStyle} />
        </div>

        {/* 时间 */}
        <div style={rowStyle}>
          <Icon type="clock" style={iconStyle} />
          <span style={labelStyle}>时间</span>
        </div>
        <div style={boxStyle}>
          <input defaultValue={`${dateStr} ${timeStr}`} style={inputStyle} />
          <Icon type="calendar" style={iconRightStyle} />
        </div>

        {/* 参与人员 */}
        <div style={rowStyle}>
          <Icon type="user" style={iconStyle} />
          <span style={labelStyle}>参与人员</span>
        </div>
        <div style={boxStyle}>
          <input defaultValue={participants.join("、")} style={inputStyle} />
        </div>

        {/* 地点 */}
        <div style={rowStyle}>
          <Icon type="environment" style={iconStyle} />
          <span style={labelStyle}>地点</span>
        </div>
        <div style={boxStyle}>
          <input defaultValue={location} style={inputStyle} />
        </div>
      </CardText>

      <CardActions direction="row">
        <Button >取消</Button>
        <Button color="primary">创建日程</Button>
      </CardActions>

      <div style={{ fontSize: 12, color: "#888", marginTop: 8, textAlign: "center" }}>
        内容由AI生成
      </div>
    </Card>
  );
}

const rowStyle = {
  display: "flex",
  alignItems: "center",
  marginTop: 16,
};

const iconStyle = {
  marginRight: 8,
};

const iconRightStyle = {
  float: "right",
  color: "#999",
};

const labelStyle = {
  fontWeight: 500,
};

const boxStyle = {
  background: "#f5f5f5",
  padding: 10,
  borderRadius: 8,
  marginTop: 4,
  position: "relative",
};

const inputStyle = {
  width: "100%",
  border: "none",
  background: "transparent",
  outline: "none",
  fontSize: 14,
};
