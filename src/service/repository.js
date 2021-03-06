export const parseName = text => {
  if (text === '')
    return { error: 'empty' }

  const parts = text.split('/')
  if (parts.length != 2) return { error: 'invalid format' }

  const [owner, name] = parts
  if (owner === '') return { error: 'empty owner' }
  if (name === '') return { error: 'empty name' }

  return { owner, name }
}
