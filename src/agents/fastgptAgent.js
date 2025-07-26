const GPT_API_URL = "https://cloud.fastgpt.cn/api/v1/chat/completions";
const GPT_API_KEY = "fastgpt-i9XM0NzBsO3lWULpq8QckHC8wDFkZwEVA6vNifePub9tlMFUgmZPCecbVr0C1Ty"; 

export async function fetchFromFastGpt(inputText) {
  const requestBody = {
    chatId: "my_chatId",
    stream: false,
    detail: false,
    responseChatItemId: "my_responseChatItemId",
    messages: [
      {
        role: "user",
        content: inputText,
      },
    ],
  };

  try {
    const response = await fetch(GPT_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GPT_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const resJson = await response.json();
    const content = resJson?.choices?.[0]?.message?.content;

    console.log("fastGPT agent 返回内容:", content);

    if (!content) {
      throw new Error("未返回有效内容");
    }

    const parsed = safeJsonParse(content);

    

    if (!parsed || !parsed.type || !parsed.content) {
      throw new Error("返回内容格式不合法");
    }

    return parsed; // 返回格式固定：{ type, content }

  } catch (err) {
    console.error("fastGPT agent 请求或解析失败:", err);
    return {
      type: "text",
      content: {
        text: err.message,
      },
    };
  }
}

// 安全 JSON 解析
function safeJsonParse(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    console.error("JSON 解析失败:", e);
    return null;
  }
}
