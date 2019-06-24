



import {Button,WhiteSpace,NoticeBar,InputItem,List} from "antd-mobile"
// import React  from "react";

const Item = List.Item;
const Brief = Item.Brief;
export default class Demo extends React.Component{
	state={
		commont:[
			{title:"aaa",content:"bbb"},
			{title:"bbb",content:"bbbbbb"}
		]
	}
	addContent=()=>{
			console.log(this.labelTitle.state.value);
			console.log(this.labelContent.state.value);
			this.state.commont.push({title:this.labelTitle.state.value,content:this.labelContent.state.value});
			this.setState({
				commont:this.state.commont
			})
		}
	
    render(){
		
        return (
            <div>
			 <List renderHeader={() => ''} className="my-list" ><Commont commont={this.state.commont}></Commont></List>
			
				<List renderHeader={() => 'Click label to focus input'}>
          <InputItem
            placeholder="click label to focus input"
            ref={el => this.labelTitle = el}
          ><div onClick={() => this.labelFocusInst.focus()}>title</div></InputItem>
		  <InputItem
		    placeholder="click label to focus input"
		    ref={el => this.labelContent = el}
		  ><div onClick={() => this.labelFocusInst.focus()}>content</div></InputItem>
        </List>

               <Button type="primary" onClick={this.addContent}>提交评论</Button><WhiteSpace />
			   <div style={{width: '100%',height: '380px',margin: '0px auto'}}>
			           <iframe width="100%" height="380px" src="http://player.youku.com/embed/XNTk1NDM1MTA4
			   " frameBorder='0' allowFullScreen></iframe>
			       </div> 
            </div>
        )
    }
}


class Commont extends Component{
	
	state={
		commont:this.props.commont
	}
	render(){
		return(
		this.state.commont.map((item,i)=>{
		return(
		
		<Item extra={item.content} key={i}>{item.title}:</Item>	
		
		)}))
	}
}