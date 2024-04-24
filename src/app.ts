// tsc --init, tsc --watch
// Automatically recompile any changes made in a typescript file

// const userName = "Jeff";

// console.log(userName);

const buttonEl = document.querySelector("btn")!;

buttonEl.addEventListener("click", () => {
    console.log("clicked");
});
