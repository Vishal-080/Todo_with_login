import React, { useState } from 'react'
import { GoogleGenAI } from "@google/genai";

const Todo = () => {

  const [todo, setTodo] = useState("");
  

const ai = new GoogleGenAI({});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how to learn everything about AI, i'm frontend developer with 6month of experience",
  });
  console.log(response.text);
}

await main();

  return (
    <div><input type="text" placeholder="Type here" className="input" />
    <button type="submit">Add</button>
    </div>
  )
}

export default Todo;