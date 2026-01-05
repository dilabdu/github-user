const form = document.querySelector("form");
import { request } from "./request.js";
const avatarEl = document.querySelector("#avatar");
const nameEl = document.querySelector(".name");
const loginEl = document.querySelector(".login");
const cratedAtEl = document.querySelector(".created_at");
const bioEl = document.querySelector(".bio");
const publicReposEl = document.querySelector(".public_repos");
const fallowersEl = document.querySelector(".fallowers");
const fallowingEl = document.querySelector(".fallowing");
const locationEl = document.querySelector(".location");
const blogEl = document.querySelector(".blog");
const twitterUserNameEl = document.querySelector(".twitter_username");
const companyEl = document.querySelector(".company");
const darkBtn = document.querySelector(".dark_btn");
const lightBtn = document.querySelector(".light_btn");
const modeLocal = localStorage.getItem("mode");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = form.user_name.value.trim().toLowerCase();
  const url = `https://api.github.com/users/${userName}`;
  request(url).then((user) => {
    console.log(user);
    const {
      avatar_url,
      name,
      login,
      created_at,
      bio,
      public_repos,
      fallowers,
      fallowing,
      location,
      blog,
      twitter_username,
      company,
    } = user;

    avatarEl.src = avatar_url;
    nameEl.textContent = name;
    loginEl.textContent = login;
    cratedAtEl.textContent = created_at;
    bioEl.textContent = bio ? bio : "This profile has no bio";
    publicReposEl.textContent = public_repos;
    fallowersEl.textContent = fallowers;
    fallowingEl.textContent = fallowing;
    locationEl.textContent = location;
    blogEl.textContent = blog;
    twitterUserNameEl.textContent = twitter_username
      ? twitter_username
      : "Not Available";
    companyEl.textContent = company;

    darkBtn.addEventListener("click", () => {
      darkBtn.classList.add("hidden");
      lightBtn.classList.remove("hidden");
      localStorage.setItem("mode", "dark");
      document.body.classList.add("dark-theme");
    });

    lightBtn.addEventListener("click", () => {
      darkBtn.classList.remove("hidden");
      lightBtn.classList.add("hidden");
      localStorage.setItem("mode", "");
      document.body.classList.remove("dark-theme");
    });

    if (modeLocal) {
      document.body.classList.add("dark-theme");
      lightBtn.classList.remove("hidden");
      darkBtn.classList.add("hidden");
    }
    // avatar_url
    // name
    // login
    // created_at
    // bio
    // public_repos
    // followers
    // following
    // location
    // blog
    // twitter_username
    // company
  });
});
