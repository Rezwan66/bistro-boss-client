import { Helmet } from 'react-helmet-async';
import orderCover from '../../../assets/shop/order.jpg';
import Cover from '../../Shared/Cover/Cover';
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderPanel from '../OrderPanel/OrderPanel';
import { useParams } from 'react-router-dom';
import './Order.css';

const Order = () => {
  const categories = ['salads', 'pizza', 'soups', 'desserts', 'drinks'];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //   console.log(category);
  const dessert = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const drinks = menu.filter(item => item.category === 'drinks');
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover
        img={orderCover}
        title="order now"
        subTitle="order you favorite dishes right now."
      ></Cover>
      <div className="mt-12">
        <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
          <TabList className="text-center">
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderPanel items={salad}></OrderPanel>
          </TabPanel>
          <TabPanel>
            <OrderPanel items={pizza}></OrderPanel>
          </TabPanel>
          <TabPanel>
            <OrderPanel items={soup}></OrderPanel>
          </TabPanel>
          <TabPanel>
            <OrderPanel items={dessert}></OrderPanel>
          </TabPanel>
          <TabPanel>
            <OrderPanel items={drinks}></OrderPanel>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};
export default Order;
