import { loader } from "./loader.js";
const overlay = document.getElementById("overlay");

export const request = async (url) => {
  try {
    loader(true);
    const req = await fetch(url);
    if (!req.ok) {
      throw new Error("Something went wrong");
    }
    const data = await req.json();
    return data;
  } catch (err) {
    console.log(err.message);
  } finally {
    loader(false);
  }
};
