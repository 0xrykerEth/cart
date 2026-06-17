import { useEffect } from 'react';
import React from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector ,useDispatch} from 'react-redux';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

let initial = true

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)
  const dispatch = useDispatch();


  useEffect(()=>{
    const cardData = async() => {
      if(initial){
        initial = false
        return
      }
      dispatch(uiActions.showNotification({
        status : 'pending',
        title : 'Sending...',
        message : 'Sending Cart data...'
      }))
      try{
      const response = await fetch('https://login-signup-c5f9f-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',{
      method : 'PUT',
      body : JSON.stringify(cart),
    })
  

      if(!response.ok){
        dispatch(uiActions.showNotification({
        status : 'failed',
        title : 'Something went wrong',
        message : 'Sending Cart data failed'
      }))
      return
      }

      

      dispatch(uiActions.showNotification({
        status : 'success',
        title : 'Success Operation',
        message : 'Saved Data on API'
      }))

      }catch(err){
        dispatch(uiActions.showNotification({
        status : 'failed',
        title : 'Something went wrong',
        message : 'Sending Cart data failed'
      }))
      }
    }

    cardData();
  },[cart,dispatch])

  return (
    
    <React.Fragment>
      {notification  && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
