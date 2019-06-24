import { Icon, Grid } from 'antd-mobile';

const list = [
  'check-circle', 'check', 'check-circle-o',
  'cross-circle', 'cross', 'cross-circle-o',
  'up', 'down', 'left',
  'right', 'ellipsis',
  'loading',
];

 const Fl = () => {
  const data = list.map(item => ({
    icon: (<Icon type={item} style={{color:'red'}}/>),
    text: item,
  }));
  return (
    <Grid data={data} columnNum={3} hasLine={false} activeStyle={false} />
  );
};

export default Fl