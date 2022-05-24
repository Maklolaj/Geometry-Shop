import { Injectable } from '@nestjs/common';
import { Message, User, Authenticate } from '@geometry-shop/api-interfaces';
const db = require('./db.json');
const fs = require('fs');

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  readUsers(): User[] {
    const dbRaw = fs.readFileSync(
      `C:\\Users\\mzele\\Documents\\Projects\\GeometryStore\\geometry-shop\\apps\\api\\src\\app\\db.json`
    );
    const users: User[] = JSON.parse(dbRaw).users;
    return users;
  }

  login(req: Authenticate): User {
    return this.readUsers().find((user) => user.username === req.username);
  }
}
