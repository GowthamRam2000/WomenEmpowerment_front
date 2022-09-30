export class Ngo {
  username: string;
  password: string;
  ngoName: string;
  contact: string;

  constructor(user: string, pass: string, ngo: string, contact: string) {
    this.username = user;
    this.password = pass;
    this.ngoName = ngo;
    this.contact = contact;
  }
}
