


console.log("这是 react  js 部分 ");



import React  from "react";
import ReactDOM from "react-dom";

// api 
// 1. 创建组件 
// 2. 渲染组件 成 真实 DOM 
import TodoList3 from "./components/todoList_3"
import {Form} from 'antd';
import Demo from "./components/demo.js";
import Navbar from "./components/navbar.js";
import Css from "./components/css.js";
import DrawerForm from "./components/demo1.js";
import NormalLoginForm from "./components/login.js";
import NormalLoginForm1 from "./components/reg.js";
import Fl from "./components/fl.js";
import Index from "./components/index.js";
import Footer from "./components/foot.js";
import {HashRouter as Router,BrowserRouter,Switch ,Route , Link, Redirect } from "react-router-dom";
const App1 = Form.create()(DrawerForm);
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
const WrappedNormalLoginForm1 = Form.create({ name: 'normal_login1' })(NormalLoginForm1);
const txt = "67856";
class App extends React.Component{

	
    render(){
		
		
        return (
            <div>	
				<Navbar></Navbar>
                <div>
				<Link to="/" >首页</Link>
				<Link to="/reg1" >登录</Link>
				<Link to="/reg" >评论</Link>
				</div>
				
	


				<Switch>
				<Route path="/" component={Index} exact/>
				<Route path="/login" component={WrappedNormalLoginForm} exact/>
				<Route path="/reg" component={Demo} exact/>
				<Route path="/reg1" component={WrappedNormalLoginForm1} exact/>
				<Route path="/fl" component={Fl} exact/>
				</Switch>
				<Footer></Footer>
            </div>
        )
    }
}

class Head extends React.Component {
   render(){
       return (
           <div>
               <TodoList3></TodoList3>
           </div>
       )
   }
}
class Foot extends React.Component{
    render(){
        return (
            <footer>
                foot-foot-foot
            </footer>
        )
    }
}
import store from "../store";
import {Provider} from "react-redux";
ReactDOM.render(
<Provider store={store}>
	<Router basename="/">
	<App></App>
	</Router>
	</Provider>
	
	,
    document.getElementById("app")
)




// 构造函数
class Person {
    constructor(){

    }
}

// ES6 继承 
class Student extends Person{
    constructor(){
        super();  // 继承父类 
    }
}


function User(){

}
