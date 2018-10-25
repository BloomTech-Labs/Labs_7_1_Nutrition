import React from 'react';
import { List } from 'antd';


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
        key={item.RecipeID}
        // actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
        // extra={<img width={272} alt="" src="" />}
      >
        <List.Item.Meta
          CookTime={<a href={item.href}>{item.CookTime}</a>}
          CookingMethod={<a href={item.href}>{item.CookingMethod}</a>}
        />
      </List.Item>
    )}
  />
    )
}

export default Myrecipes;