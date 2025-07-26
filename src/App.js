// app.js
import React from "react";
import Chat, { Bubble, useMessages } from "@chatui/core";
import "@chatui/core/dist/index.css";
import ScheduleCard from "./cards/ScheduleCard";
import LinkCard from "./cards/LinkCard";

import { fetchFromFastGpt } from "./agents/fastgptAgent";

export default function App() {
  const { messages, appendMsg } = useMessages([]);

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

      const { type: type, content } = await fetchFromFastGpt(val);

      appendMsg({
        type: type,
        content,
      });
    }
  }

  function renderMessageContent(msg) {
    const { type, content } = msg;
    if (renderMap[type]) {
      return renderMap[type](content);
    }
    return <Bubble content={`[不支持的消息类型: ${cardType}]`} />;
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
