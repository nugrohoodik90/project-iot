export function cartsActions(payload) {
    return (dispatch, getState) => {
        const store = getState().CartReducers.carts
        const newList = store;

        let itemExist = false;
        store.forEach(itemCart => {
            if (itemCart.id === payload.id) {
                itemExist = true;
                itemCart.countItem++;
                itemCart.countPrice += parseInt(itemCart.harga);
            }
        });
        if (!itemExist) {
            newList.push({
                ...payload,
                countItem: 1,
                countPrice: parseInt(payload.harga)
            })
        }
        let Total = 0
        for (let i of newList) {
            Total += i.countPrice
        }
        dispatch({
            type: "ADDCART",
            payload: newList,
            grandTotal: Total
        })
    }
}

export function cartsPlusActions(payload) {
    return (dispatch, getState) => {
        const store = getState().CartReducers.carts
        const newList = store;

        store.forEach(itemCart => {
            if (itemCart.id === payload.id) {
                itemCart.countItem++;
                itemCart.countPrice += parseInt(itemCart.harga);
            }
        });
        let Total = 0
        for (let i of newList) {
            Total += i.countPrice
        }
        dispatch({
            type: "INCREMENT",
            payload: newList,
            grandTotal: Total
        })
    }
}

export function cartsMinusActions(payload) {
    if (payload.countItem > 1) {
        return (dispatch, getState) => {
            const store = getState().CartReducers.carts
            const newList = store;

            store.forEach(itemCart => {
                if (itemCart.id === payload.id && payload.countItem > 1) {
                    itemCart.countItem--;
                    itemCart.countPrice -= parseInt(itemCart.harga);
                }
            });
            let Total = 0
            for (let i of newList) {
                Total += i.countPrice
            }
            dispatch({
                type: "INCREMENT",
                payload: newList,
                grandTotal: Total
            })
        }
    } else {
        console.log("delete item")
        return (dispatch, getState) => {
            const store = getState().CartReducers.carts

            const newList = store.filter(itemCart => itemCart.id !== payload.id)
            let Total = 0
            for (let i of newList) {
                Total += i.countPrice
            }
            dispatch({
                type: "DELETE",
                payload: newList,
                grandTotal: Total
            })
        }
    }
}

export function cartsDeleteActions(payload) {
    return (dispatch, getState) => {
        const store = getState().CartReducers.carts
        // const newList = store

        const newList = store.filter(itemCart => itemCart.id !== payload.id)
        let Total = 0
        for (let i of newList) {
            Total += i.countPrice
        }
        dispatch({
            type: "DELETE",
            payload: newList,
            grandTotal: Total
        })
    }
}