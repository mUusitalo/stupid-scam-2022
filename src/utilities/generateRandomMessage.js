import faker from '@faker-js/faker'

const alku = [
    'Hi!',
    'Dear network user,', 
    'Dear customer,',
    'Response required',
    'My lovely friend,',
]

function generateBodyText() {
  const name = faker.name.findName()
  
  const keski = [
    `I am ${name} from Nigeria. Very rich and prince. I need your help.`,
    'This email is meant to inform you that all your data will be lost if you don’t act.',
  ]

  faker.helpers.arrayElement(keski)
}

const loppu = [
  'I can fix everything if you do like I suggest.',
  'You, your family and data will be safe again soon.',
  'This situation is very unlucky, but I can still make it better.',
  'I am not a scammer, I do not ask for money. We are helping each other out of this trouble.', 
]

function getRandomMessage() {
  const introduction = faker.helpers.arrayElement(alku)
  const bodyText = generateBodyText()
  const signOff = faker.helpers.arrayElement(loppu)
  return { introduction, bodyText, signOff }
}

export default getRandomMessage