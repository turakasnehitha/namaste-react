/**
 * nested element
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm an h1 tag</h1>
 *          <h2>I'm an h2 tag</h2>
 *       </div>
 * </div>
 * 
 */

const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, 
    [React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2 tag")]));

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("header"));
   
root.render(parent);
