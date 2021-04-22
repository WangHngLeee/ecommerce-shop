import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@1.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Hongli W',
    email: 'hongli@1.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Daniel W',
    email: 'daniel@1.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
