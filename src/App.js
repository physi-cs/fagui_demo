import React from "react";
import Chat, { Bubble, useMessages } from "@chatui/core";
import "@chatui/core/dist/index.css";
import RecommendCard from "./cards/RecommendCard";
import ScheduleCard from "./cards/ScheduleCard";

export default function App() {
  const { messages, appendMsg } = useMessages([]);

  function handleSend(type, val) {
    if (type === "text" && val.trim()) {
      appendMsg({
        type: "text",
        content: { text: val },
        position: "right",
      });

      // 模拟从服务端返回推荐卡片消息
      //   setTimeout(() => {
      //     appendMsg({
      //       type: "recommend-card", // 自定义的卡片类型
      //       content: {
      //         title: "猜你想问",
      //         recommends: [
      //           { knowledgeId: "1", title: "模拟推荐问题的标题，一" },
      //           { knowledgeId: "2", title: "模拟推荐问题的标题，一二" },
      //           { knowledgeId: "3", title: "模拟推荐问题的标题，一二三" },
      //           { knowledgeId: "4", title: "模拟推荐问题的标题，一二三四" },
      //         ],
      //       },
      //     });
      //   }, 1000);

      // 模拟从服务端返回推荐卡片消息
      setTimeout(() => {
        appendMsg({
          type: "schedule-card", // 自定义的卡片类型
          content: {
            topic: "员工作业助手产品交流",
            dateStr: "07月16日 周三",
            timeStr: "09:30-10:30",
            participants: ["李四", "张三"],
            location: "江滨大厦"
          },
        });
      }, 1000);
    }
  }

  function renderMessageContent(msg) {
    const { type, content } = msg;

    switch (type) {
      case "text":
        return <Bubble content={content.text} />;

      case "recommend-card":
        return <RecommendCard data={content} />;

      // 可继续添加更多类型：如 travel-card、schedule-card 等

      case "schedule-card":
        return <ScheduleCard data={content} />;

      default:
        return <Bubble content={`[不支持的消息类型: ${type}]`} />;
    }
  }

  return (
    <Chat
      navbar={{ title: "智能助理" }}
      messages={messages}
      renderMessageContent={renderMessageContent}
      onSend={handleSend}
    />
  );
}
