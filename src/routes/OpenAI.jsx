import { Configuration, OpenAIApi } from 'openai'
import React from 'react'
import { Link } from 'react-router-dom'

const apiKey = import.meta.env.VITE_OPENAI_API_KEY

const configuration = new Configuration({ apiKey })

const openai = new OpenAIApi(configuration)

const model = 'gpt-3.5-turbo'
const messages = [
  {
    role: 'user',
    content: 'Como iterar sobre un array en javascript?'
  }
]

const completion = await openai.createChatCompletion({
  model,
  messages
})

console.log(completion.data.choices[0].message)

export const OpenAI = () => {
  return (
    <>
      <div className='bg-white dark:bg-black'>
        <h1 className='dark:text-white'>Esta es la pagina de chat</h1>
        <Link to='/' className='dark:text-white'>
          Go to home
        </Link>
      </div>
      <div className='text-black dark:text-white'>
        <h1>OpenAI</h1>
        {completion && <p>{completion.data.choices[0].message.content}</p>}
      </div>
    </>
  )
}
