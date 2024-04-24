// tsc --init, tsc --watch
// Automatically recompile any changes made in a typescript file

// const userName = "Jeff";

// console.log(userName);

const buttonEl = document.querySelector("btn")!;

function clickHandler(message: string) {
    console.log("Clicked" + message);
}

if (buttonEl) {
    buttonEl.addEventListener(
        "click",
        clickHandler.bind(null, "You're welcome!")
    );
}
