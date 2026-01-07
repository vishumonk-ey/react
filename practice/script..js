let isToggled = false;
document.querySelector("button").addEventListener(
  "click",
  () => {
    // console.log("running")
    if (isToggled) {
      document
        .querySelector("img")
        .setAttribute(
          "src",
          "https://media.istockphoto.com/id/1195664269/photo/christmas-in-city.jpg?s=2048x2048&w=is&k=20&c=bUWn3aiRZ9hHD3UOdzQwidMclbNW4Q03vPNl1koRa0U="
        );
        isToggled=false
    } else {
      document
        .querySelector("img")
        .setAttribute(
          "src",
          "https://images.unsplash.com/photo-1764867147368-9f162d149840?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        );
        isToggled = true
    }
  },
  true
);
