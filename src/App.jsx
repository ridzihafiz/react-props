import React from 'react';
import MyButton from './components/MyButton';
import ProductCard from './components/ProductCard';

export default function App() {
  return (
    <div>
      <h1>Hi Rid</h1>
      <MyButton
        content={'login'}
        bgColor={'red'}
        color={'white'}
        onClick={() => {
          console.info('Login Clicked');
        }}
      />

      <MyButton
        content={'register'}
        bgColor={'blue'}
        color={'white'}
        onClick={() => {
          console.info('Register Clicked');
        }}
      />

      <MyButton
        content={'logout'}
        bgColor={'green'}
        color={'white'}
        onClick={() => {
          console.info('Logout Clicked');
        }}
      />

      <MyButton
        content={'home'}
        bgColor={'pink'}
        color={'white'}
        onClick={() => {
          console.info('Home Clicked');
        }}
      />

      <ProductCard
        image={
          'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=300'
        }
        name={'Tas Kulit'}
        price={'1.000.0000'}
      />

      <ProductCard
        image={
          'https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=300'
        }
        name={'Sepatu'}
        price={'500.0000'}
      />
    </div>
  );
}
