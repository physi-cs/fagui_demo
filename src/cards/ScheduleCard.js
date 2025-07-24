// ScheduleCard.js
import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  Icon,
} from "@chatui/core";

const userColors = ["#e6f4ff", "#fce4ec"];

export default function ScheduleCard({ data }) {
  const {
    topic = "员工作业助手产品交流",
    dateStr = "07月16日 周三",
    timeStr = "09:30-10:30",
    participants = ["李四", "张三"],
    location = "江滨大厦",
  } = data;

  return (
    <Card style={{ border: "1px solid #e0e0e0", borderRadius: 10 }}>
      <CardTitle style={{ fontWeight: 600, fontSize: 18 }}>新建日程</CardTitle>

      <CardText>
        {/* 主题 */}
        <Section iconType="calendar" label="主题">
          <ContentBox>{topic}</ContentBox>
        </Section>

        {/* 时间 */}
        <Section iconType="clock" label="时间">
          <ContentBox>
            {dateStr} {timeStr}
            <Icon type="calendar" style={{ float: "right", color: "#999" }} />
          </ContentBox>
        </Section>

        {/* 参与人员 */}
        <Section iconType="user" label="参与人员">
          <ContentBox>
            {participants.map((name, idx) => (
              <span
                key={name}
                style={{
                  backgroundColor: userColors[idx % userColors.length],
                  padding: "4px 8px",
                  borderRadius: 6,
                  marginRight: 8,
                }}
              >
                {name}
              </span>
            ))}
            <Icon type="plus" style={{ float: "right", color: "#999" }} />
          </ContentBox>
        </Section>

        {/* 地点 */}
        <div style={{ display: "flex", alignItems: "center", marginTop: 16 }}>
          <Icon type="location" style={{ marginRight: 8 }} />
          <span style={{ fontWeight: 500 }}>{location}</span>
        </div>
      </CardText>

      {/* 操作按钮 */}
      <CardActions direction="row">
        <Button type="ghost">取消</Button>
        <Button type="primary">创建日程</Button>
      </CardActions>

      {/* 底部说明 */}
      <div
        style={{
          fontSize: 12,
          color: "#888",
          marginTop: 8,
          textAlign: "center",
        }}
      >
        内容由AI生成
      </div>
    </Card>
  );
}

// 内容容器样式组件
const ContentBox = ({ children }) => (
  <div
    style={{
      background: "#f5f5f5",
      padding: 10,
      borderRadius: 8,
      marginTop: 4,
    }}
  >
    {children}
  </div>
);

// 公共结构段落组件
const Section = ({ iconType, label, children }) => (
  <div style={{ marginTop: 16 }}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <Icon type={iconType} style={{ marginRight: 8 }} />
      <span style={{ fontWeight: 500 }}>{label}</span>
    </div>
    {children}
  </div>
);
