import { faker } from "@faker-js/faker";

export function messageGenerator(count = 1) {
  const messages = [];

  do {
    messages.push({
      id: faker.string.uuid(),
      type: faker.datatype.boolean() ? "sender" : "receiver",
      textMessage: faker.lorem.sentence(),
      time: faker.date.anytime().toLocaleTimeString(),
    });
    count--;
  } while (count);

  return messages;
}
