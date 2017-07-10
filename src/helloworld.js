var HelloWorld = React.createClass({
render:function(){
return <div>
<h1>hello world</h1>
<p>this is some text</p>
</div>
}
});
		
React.render(<HelloWorld />,document.body);