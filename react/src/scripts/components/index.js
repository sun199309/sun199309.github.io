import { Flex, WhiteSpace } from 'antd-mobile';
import Lbt from "./lbt";
import List from "./list";
import Search from "./search";
const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}><a href="/category/male" className="guide-nav-a" data-eid="mqd_A11"><i className="icon icon-sort"></i><h4 className="guide-nav-h">分类</h4></a></div>
);
export default class Index extends Component{
	render(){
		return(
		<div>
		<Lbt/>
		<Search/>
		<Flex>
		<Flex.Item><PlaceHolder /></Flex.Item>
		<Flex.Item><PlaceHolder /></Flex.Item>
		<Flex.Item><PlaceHolder /></Flex.Item>
		<Flex.Item><PlaceHolder /></Flex.Item>
		</Flex>
		<List/>
		</div>
		)
	}
}