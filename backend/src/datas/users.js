import bcrypt from "bcrypt";
const users = [
    {
        token: "11d40156893b11eda36d8b51443f2256",
        name: "name",
        password: await bcrypt.hash("password", Number(process.env.SALT_ROUNDS)),
        contributions: [],
        favotites: []
    }
]

export default users;