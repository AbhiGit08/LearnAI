import React from "react";

const Home = () => {
  const API_KEY = "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";
  async function fetchdata() {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: "hello, how are you today?",
        max_token: 7,
      }),
    });
    const data = await response.json();
    console.log({ data });
  }

  return (
    <div>
      <div>home</div>
      <button onClick={fetchdata}>Test</button>
    </div>
  );
};

export default Home;
