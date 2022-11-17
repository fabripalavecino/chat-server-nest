import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  messages: Message[] = [{ name: 'Fabricio', text: 'this is a message' }];
  clientToUser = {};

  create(createMessageDto: CreateMessageDto) {
    return this.messages.push(createMessageDto);
  }

  findAll() {
    return `This action returns all messages`;
  }

  identify(name: string, clientId: string) {
    this.clientToUser[clientId] = name;

    return Object.values(this.clientToUser);
  }

  getClientName(clientId: string) {
    return this.clientToUser[clientId];
  }
}
