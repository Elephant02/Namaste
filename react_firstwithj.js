/* 
  <div id ="parent">
    <div id ="child">
      <h1> I'm h1 tag </h1> //  ab yaha mereko pochega ke ek aur children bana do then how i will do ?
    </div>
  </div> 
 here is Q is agar asia structure banana hoga toh kasie banayuga ?
 */
//-> jab mereko childern create karna hoga toh mai array bana duga //
const parent = React.createElement(
  "div",
  {id : "parent"},
  React.createElement("div",
  {id :"child"},
  [React.createElement("h1",{},"I am cool boy"),React.createElement("h1",{},"I am 2nd cool boy")]
  ) 
  );

  console.log(parent);



// const heading = React.createElement("h1",
// {id :"heading",xyz:"abc"},
// "Hello world from React"
// );
  // here createElement  is the obeject
  // the third the thing "hello world from React" -> is the children of h1 and they comes under props(see in console)
  // attributes({}) -> it is also a props . 
const root =  ReactDOM.createRoot(document.getElementById("root"));
   
  root.render(parent);// yeh render the mere root ko html page mei la rha hai 
      // {}->give the attributes 