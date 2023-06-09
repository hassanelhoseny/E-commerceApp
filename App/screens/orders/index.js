import React, { useEffect } from 'react';
import {View , FlatList , ActivityIndicator } from 'react-native';
import { Order} from "../../components/Order";
import { getOrders } from '../../redux/actions/AuthActions';
import { useSelector , useDispatch } from 'react-redux';
import { EmptyList } from '../../components/EmptyList';
import {showError} from '../../utils/helperFunctions';
import {useUpdateEffect} from '../../utils/useUpdateEffect';

import styles from './styles';


function renderOrder({item}) {
  
    return <Order order={item} />;
  }

function keyExtractor(order) {
    return order._id;
  }

function renderOrders(orders , isFetchingOrders, Empty){
    
    return(
        <FlatList
     contentContainerStyle={styles.list}
      data={orders}
      renderItem={renderOrder}
      ListEmptyComponent={Empty}
      keyExtractor={keyExtractor}
    />
    )
}


export function OrdersScreen(){

    const dispatch = useDispatch() ;

    const orders = useSelector(state => state.auth.orders);
    const isFetchingOrdersz = useSelector(state => state.auth.isFetchingOrders);
  

    console.log(isFetchingOrdersz)

    const Empty = React.useCallback(
        () => (!isFetchingOrdersz ? <EmptyList /> : null),
        [isFetchingOrdersz],
      );

    useEffect(()=>{
        dispatch(getOrders())
    } , [])



    return (
        <View style={styles.container}>
          {isFetchingOrdersz ? (
            <ActivityIndicator />
          ) : (
            renderOrders(orders, isFetchingOrdersz, Empty)
          )}
        </View>
      );
}    