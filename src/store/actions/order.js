import * as actions from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actions.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData,
    };
};

export const purchaseBurgerFailed = (error) => {
    return {
        type: actions.PURCHASE_BURGER_FAILED,
        error: error,
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actions.PURCHASE_BURGER_START
    };
};

export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json', orderData)
        .then(response => {
            console.log(response.data);
            dispatch(purchaseBurgerSuccess(response.data.name, orderData));
        })
        .catch(error => {
            dispatch(purchaseBurgerFailed(error));
        });
    }
}

export const purchaseInit = () => {
    return {
        type: actions.PURCHASE_INIT
    }
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actions.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrdersFail = (error) => {
    return {
        type: actions.FETCH_ORDERS_FAIL,
        error: error
    }
}

export const fetchOrdersStart = () => {
    return {
        type: actions.FETCH_ORDERS_START
    };
}

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrdersStart());
    axios.get('/orders.json')
        .then(res => {
            const fetchedOrders = [];
            for (let key in res.data) {
                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                });
            }
            dispatch(fetchOrdersSuccess(fetchedOrders));
            console.log(fetchedOrders);
        })
        .catch(error => {
            // this.setState({error: true});
            dispatch(fetchOrdersFail(error));
        });
    }
}