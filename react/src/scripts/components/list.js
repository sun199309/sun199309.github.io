import { Flex, WhiteSpace } from 'antd-mobile';
import axios from "@/utils/axios.js";
const PlaceHolder = ({ className = '', ...restProps }) => (

  <div className={`${className} placeholder`} {...restProps}>Block</div>
);

class List extends Component{
	state={
		movie:[]
	}
	componentWillMount(){
		axios.get("react/movie")
		.then(res=>{
		this.setState({movie:res.data.result})
		console.log(this.state.movie)
	}
		
		)
	};
	render(){
		return(
		<div className="flex-container">
		  
		
		
		  
		  <Flex wrap="wrap">
		    {this.state.movie.map((val, index) => (
		      <div key={index} style={{width:"31%",margin:"1%" }}>
			  <img src={val.img} style={{width:"100%",height:"2.7rem"}} />
			  <h2 style={{frontSize:"large",margin:"1% 0",textOverflow:'ellipsis',overflow: 'hidden',whiteSpace: 'nowrap'}}><b>{val.title}</b></h2>
			  <p style={{textOverflow:'ellipsis',overflow: 'hidden',whiteSpace: 'nowrap',color:"pray"}}>{val.movieAbstract}</p>
			  </div>	
		    ))}
		  </Flex>
		  
		
		  
		</div>
		)
	}
}
  


export default List;