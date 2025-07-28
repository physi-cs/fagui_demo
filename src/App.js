// app.js
import React, { useRef } from "react";
import Chat, { Bubble, useMessages } from "@chatui/core";
import "@chatui/core/dist/index.css";
import ScheduleCard from "./cards/ScheduleCard";
import LinkCard from "./cards/LinkCard";

import { generateChatId, fetchFromFastGpt } from "./agents/fastgptAgent";

export default function App() {
  const { messages, appendMsg } = useMessages([]);
  // 只生成一次 chatId
  const chatIdRef = useRef(generateChatId());

  const renderMap = {
    text: (content) => <Bubble content={content.text} />,
    "schedule-card": (content) => <ScheduleCard data={content} />,
    "link-card": (content) => <LinkCard data={content} />,
  };

  async function handleSend(type, val) {
    if (type === "text" && val.trim()) {
      appendMsg({
        type: "text",
        content: { text: val },
        position: "right",
      });

      // 使用同一个 chatId
      const { type: msgType, content } = await fetchFromFastGpt(val, chatIdRef.current);

      appendMsg({
        type: msgType,
        content,
      });
    }
  }

  function renderMessageContent(msg) {
    const { type, content } = msg;
    if (renderMap[type]) {
      return renderMap[type](content);
    }
    return <Bubble content={`[不支持的消息类型: ${type}]`} />;
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
