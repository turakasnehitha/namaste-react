const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World from React Index by app.js");

console.log(heading); //object
   
const root = ReactDOM.createRoot(document.getElementById("root"));
   
root.render(heading);


