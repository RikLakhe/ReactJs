var HelloWorld = React.createClass({displayName: "HelloWorld",
render:function(){
return React.createElement("div", null, 
React.createElement("h1", null, "hello world"), 
React.createElement("p", null, "this is some text")
)
}
});
		
React.render(React.createElement(HelloWorld, null),document.body);