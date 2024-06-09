export const dateFormatted = (date) => date.toLocaleString('ru-RU', { dateStyle: 'short', timeStyle: 'short' })

export const chatStartDate = (chatHistory) => {
  const date = dateFormatted(new Date())
  const regxToday = (date) => date.replace(/.*,/, 'Сегодня,')
  if (chatHistory.length) {
    const chatStarted = chatHistory[0].dateFull
    if (date === chatStarted) {
      return regxToday(date)
    }
    return chatStarted
  }
}


const assitantMsg = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam recusandae aut assumenda dolorum cumque odio sint saepe mollitia delectus maiores.'

export const getAssistantMsg = () => {
  const arr = assitantMsg.split(' ')
  const random = Math.floor((Math.random() * (19 - 5) + 5))

  return arr.slice(0, random).join(' ')
}
