import jwt from "jsonwebtoken";

const genToken = async (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwtmsg", token, {
    maxAge: 1000 * 60 * 60 * 24 * 15,
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });
};
export default genToken;
