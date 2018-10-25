import React from 'react';
import { List, Avatar, Icon } from 'antd';


const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Myrecipes = (props) => {
  console.log(props);
    return (
        
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={props.data}
    renderItem={item => (
      <List.Item
        key={item.username}
        // actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
        // extra={<img width={272} alt="" src="" />}
      >
        <List.Item.Meta
          username={<Avatar src={item.username} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.descrip}
        />
        {item.content}
      </List.Item>
    )}
  />
    )
}

export default Myrecipes;