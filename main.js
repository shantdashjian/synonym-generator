const sourceTextArea = document.getElementById('source-text-area')
const synonymTextArea = document.getElementById('synonym-text-area')
const getSynonymsBtn = document.getElementById('get-synonyms-btn')
const clearBtn = document.getElementById('clear-btn')

const apiEndpoint = import.meta.env.PROD ? 
  'https://synonym-generator-backend.onrender.com/api/synonym' 
  : "http://localhost:3000/api/synonym"

getSynonymsBtn.addEventListener('click', async () => {
  const sourceText = sourceTextArea.value
  const options = {
    method: 'POST',
    body: JSON.stringify({
      "sourceText": sourceText
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const result = await fetch(apiEndpoint, options)
  const response = await result.json()
  synonymTextArea.value = response.synonymsText
})

clearBtn.addEventListener('click' , () => {
  sourceTextArea.value = ''
  synonymTextArea.value = ''
})