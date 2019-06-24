import { Carousel, WingBlank } from 'antd-mobile';
import axios from "@/utils/axios.js";
export default class Lbt extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
		movie:[]
  }
	componentWillMount(){
		axios.get("react/movie",{params:{limit:3}})
		.then(res=>{
		this.setState({movie:res.data.result})
		console.log(this.state.movie)
	}
		
		)
	};
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        movie: this.state.movie,
      });
    }, 100);
  }
  render() {
    return (
      <WingBlank>
        <Carousel className="space-carousel"
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.8}
          autoplay
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => this.setState({ slideIndex: index })}
        >
          {this.state.movie.map((val, index) => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{
                display: 'block',
                position: 'relative',
                top: this.state.slideIndex === index ? -10 : 0,
                height: this.state.imgHeight,
                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
              }}
            >
              <img
                src={`${val.img}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top',height:'100%' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  // this.setState({ imgHeight: '100%' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}