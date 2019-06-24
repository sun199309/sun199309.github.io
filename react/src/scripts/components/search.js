import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
export default class Search extends Component{
	render(){
		return(
		<div>
		<SearchBar placeholder="Search" maxLength={8} />
		</div>
		)
		
	}
}