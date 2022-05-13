import faker from '@faker-js/faker'

const otsikko = [
  'Important: You Password will expire in 1 day(s)',
  'ATTENTION your account will be deleted soon',
  'You got a new message in our service',
  'I need your help soon',
  'Urgent message to my dear cousin',
]

const alku = [
    'Hi!',
    'Dear network user,', 
    'Dear customer,',
    'Response required',
    'My lovely friend,',
    'Hello there,',
    `Hello dear ${faker.name.suffix()},`,
]

function generateBodyText(name) {
  const country = faker.address.country()
  const number = faker.datatype.number(100000)
  const animal = faker.animal.type()
  const keski = [
    `I am ${name} from Nigeria. Very rich and prince and have nice car and ${animal}. I need your help. You are pretty.`,
    `This email is meant to inform you that I have lost all your data and it is going to be deleted if you don’t act in 24 hours.`,
    `I am a prosperous startup CEO from ${country} and I ask for a little favour.`,
    `I am ${name} from ${country}. I did a DNA test and you were my only relative alive. Therefore I contacted you.`,
    `I have too much money. I want to give to good purpose. You have promising career, maybe in ${country}. If you follow my advise and my instagram account: @ ${name}.`,
    `You have won ${number} euros!! Lucky you! This is a once in a lifetime chance. Maybe you could buy a ${animal}. `,
    `I have discovered a long forgotten Bitcoin wallet account of my late grand-grandmother. The address is as follows. ${faker.finance.bitcoinAddress()}. I need your help in recovering the key to this wallet containing perhaps MILLIONS of $$$ worth in BITCOIN. Please help me.`,
    `You have inherited my pet, a ${animal}. You are my lost child. I miss you. But this is confidental case. I'll send my pet to you from ${country}. Take good care of it :) `,
  ]

  return faker.helpers.arrayElement(keski)
}

const loppu = [
  'I can fix everything if you do like I suggest.',
  'You, your family and data will be safe again soon.',
  'This situation is very unlucky, but I can still make it better.',
  'I am not a scammer, I do not ask for money. We are helping each other out of this trouble.', 
  'You will regret if you do not click the button below. I will not give you a second chance. But do not worry my friend. Just do as I say, and follow my facebook.',
]

function generateRandomMessage({email, service}) {
  const name = faker.name.findName()
  const title = faker.helpers.arrayElement(otsikko)
  const introduction = faker.helpers.arrayElement(alku)
  const bodyText = generateBodyText(name)
  const signOff = faker.helpers.arrayElement(loppu)
  const ending = `Please follow the link below to give your contact information and password to ${service}. Thank you, your friend ${name}, ${faker.name.suffix()}`
  return { introduction, bodyText, signOff, ending, title }
}

export default generateRandomMessage