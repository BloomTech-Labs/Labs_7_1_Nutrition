import React from 'react';
import { List, Table, Card } from 'antd';
import Column from 'antd/lib/table/Column';
import ColumnGroup from 'antd/lib/table/ColumnGroup';


const Myrecipes = (props) => {
  //console.log("My Recipie :",props.data);
  const data = props.data.map(v => { return v.CookingMethod});
  //console.log("My recipe row:  ",data);
  const columns = [ {
    title: 'Suitable For Diet',
    dataIndex: 'SuitableForDiet',
  }, {
    title: 'Recipe Category',
    dataIndex: 'RecipeCategory',
  }, {
    title: 'Recipe Cuisine',
    dataIndex: 'RecipeCuisine',
  }, {
    title: 'Cooking Time',
    dataIndex: 'CookTime'
   }, {
    title: 'Recipe Yield',
    dataIndex: 'RecipeYield',
  }, {
    title: 'Recipe Ingredients',
    dataIndex: 'RecipeIngredients',
  }, {
    title: 'Recipe Instructions',
    dataIndex: 'RecipeInstructions',
  }]
    return (
        
  // <List
  //   itemLayout="vertical"
  //   size="large"
  //   pagination={{
  //     onChange: (page) => {
  //       console.log(page);
  //     },
  //     // pageSize: 3,
  //   }}
  //   dataSource={items}
  //   renderItem={item => (
  //     <List.Item>{item}</List.Item>
  //     // <List.Item
  //     //   // key={item.RecipeID}
  //     //   // actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
  //     //   // extra={<img width={272} alt="" src="" />}
  //     // >
  //     //   <List.Item.Meta
  //     //     abc="I am here"
  //     //     cooktime={<a href={item.href}>{item.CookTime}</a>}
  //     //     cookingmethod={<a href={item.href}>{item.CookingMethod}</a>}
  //     //   />
  //     // </List.Item>
  //   )}
  // />
  <div>
  {/* <List
  dataSource={data}
    renderItem={item => (
      <List.Item>{item}</List.Item>
    )}
  /> */}
  
  <Table
  itemLayout="vertical"
  size="large"
  pagination={{
        onChange: (page) => {
          console.log(page);
        },
         pageSize: 3,
      }}
  dataSource={props.data}
  columns={columns}
  />
  </div>
    // <Card
    //   title="Card title"
    //   extra={<a href="#">More</a>}
    //   style={{ width: 300 }}
    // >
    //   <p>Card content</p>
    //   <p>Card content</p>
    //   <p>Card content</p>
    // </Card>
 )
}

export default Myrecipes;