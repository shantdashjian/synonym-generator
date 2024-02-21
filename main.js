import OpenAI from "openai";

const sourceTextArea = document.getElementById('source-text-area')
const synonymTextArea = document.getElementById('synonym-text-area')
const getSynonymsBtn = document.getElementById('get-synonyms-btn')
const clearBtn = document.getElementById('clear-btn')

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

getSynonymsBtn.addEventListener('click', async () => {
  const sourceText = sourceTextArea.value

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        "role": "system",
        "content": "You are a linguist. "
      },
      {
        "role": "user",
        "content": "Give me 3 synonyms for this word: " + sourceText
      }
    ],
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  synonymTextArea.value = response.choices[0].message.content
})

clearBtn.addEventListener('click' , () => {
  sourceTextArea.value = ''
  synonymTextArea.value = ''
})