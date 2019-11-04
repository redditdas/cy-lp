export function randomString(i) {
  return [...Array(i)].map(i => (~~(Math.random() * 36)).toString(36)).join('')
}


export function randomDate() {
  const date = new Date(+(new Date()) - Math.floor(Math.random() * 1000000000000))
  return date.toISOString().split('T')[0]
}


