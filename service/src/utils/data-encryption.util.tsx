const alphabet = [
  'A',
  'B',
  'D',
  'G',
  'H',
  'I',
  'K',
  'L',
  'M',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'Z',
]
const MAX_ROT = alphabet.length

/**
 * Encrypt text  using spanish Cesar encryption
 */
const encrypt = (text: string | null, rot = 3) => {
  if (!text) return "";

  if (rot > MAX_ROT || rot < 0) {
    throw Error('rot can be only beetween 0 to 26')
  }

  const textArr = Array.from(text)

  const encryptedText = textArr.map((char) => {
    const isLower = char.toLowerCase() === char;
    const idx = alphabet.indexOf(char.toUpperCase())

    if (idx === -1) {
      return char
    }

    const encryptedIdx = (idx + rot) % MAX_ROT
    const encryptedChar = alphabet[encryptedIdx]

    return isLower ? encryptedChar.toLowerCase() : encryptedChar
  })

  return encryptedText.join('')
}

/**
 * Decrypt text using spanish Cesar encryption
 */
const decrypt = (text: string | null, rot = 3) => {
  if (!text) return "";
  if (rot > MAX_ROT || rot < 0) {
    throw Error('rot can be only beetween 0 to 26')
  }

  const textArr = Array.from(text)

  const decryptedText = textArr.map((char) => {
    const isLower = char.toLowerCase() === char;
    const idx = alphabet.indexOf(char.toUpperCase())

    if (idx === -1) {
      return char
    }

    let decryptedIdx = (idx - rot) % MAX_ROT

    decryptedIdx = decryptedIdx < 0 ? decryptedIdx + MAX_ROT : decryptedIdx

    const decryptedChar = alphabet[decryptedIdx]

    return isLower ? decryptedChar.toLowerCase() : decryptedChar
  })

  return decryptedText.join('')
}

export default {
  encrypt,
  decrypt
}