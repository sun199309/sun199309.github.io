export default class CssDemo extends React.Component{
	render(){
		
		return(
		<div>
		
		<h2 style={{color:'red'}} onTouchStart={(e)=>{this.js.touch(e)}}>{this.props.txt}</h2>
		</div>
		)
	}
}

CssDemo.prototype.js = {
    touch(e){
        console.log(e);
        console.log(e.touches[0].clientX);
    }
}