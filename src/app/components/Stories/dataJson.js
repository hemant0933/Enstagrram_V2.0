'use client'
import { faker } from '@faker-js/faker';

function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.person.firstName(),
    fullname: faker.person.firstName(),
    avatar: faker.image.urlPicsumPhotos( {format: 'webp',width:'600',height:'600'}),
    password: faker.internet.password(),
    emoji: faker.internet.emoji(),
    registeredAt: faker.date.past(),
  };
}

export const USERS = (length) =>{
    const users = [];

    Array.from({length:length}).forEach(() => {
        users.push(createRandomUser());
    })

    return users;
}
