import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartsDeleteActions, cartsMinusActions, cartsPlusActions } from '../../redux/actions/cartActions'

function Cart() {
  const items = useSelector(state => state.CartReducers)
  const dispatch = useDispatch()
  // console.log(items);

  const handlePlusCart = (item) => {
    // console.log(item)
    dispatch(cartsPlusActions(item))
  }
  const handleMinusCart = (item) => {
    dispatch(cartsMinusActions(item))
  }
  const handleDeleteCart = (item) => {
    // console.log("del", item)
    dispatch(cartsDeleteActions(item))
  }

  return (
    <div className="container mt-2">
      {
        items.cartsNumb === 0 ?
          <>
            <p className="font-weight-bolder" style={{ margin: "10% 0%" }}>Carts Still Empty!!!</p>
          </>
          :
          <div className="row justify-content-around">
            <div className="col-sm-6 col-lg-6 p-0 mb-5">
              <div className="">
                <h5 className="font-weight-bold m-0 pt-5">My Cart</h5>
                <hr className="mt-0"/>
                {
                  // console.log(items.carts)
                  items.carts.map((product) => {
                    // console.log(product)
                    return (
                      <div className="col" key={product.id}>

                        <div className="m-1 font-weight-bold">{product.nama}</div>
                        <div className="row justify-content-between mx-1">
                          <div className="col p-0">
                            <img src={product.gambar} className="card-img-top " alt={product.kategori} />
                          </div>
                          <div className="col-6 align-content-between pl-2">
                            <div>
                              <p className="text-left m-0">Rp.{product.harga}</p>
                              <div className="input-group input-group-sm">
                                <div className="input-group-prepend">
                                  <span className="input-group-text" id="inputGroup-sizing-sm">Jumlah :</span>
                                </div>
                                <input type="text" className="form-control p-0 text-center" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" readOnly value={product.countItem} />
                              </div>
                              <p className="text-left m-0">Subtotal:</p>
                              <p className="m-0 font-weight-bold">Rp.{product.countPrice}</p>
                            </div>
                            <div className="btn-group btn-group-sm my-2" role="group" aria-label="Basic example">
                              <button type="button" className="btn btn-primary" onClick={() => handleMinusCart(product)}>-</button>
                              <button type="button" className="btn btn-primary" onClick={() => handlePlusCart(product)}>+</button>
                            </div>
                          </div>
                        </div>
                        <button type="button" className="btn btn-danger btn-sm m-2" onClick={() => handleDeleteCart(product)}>Delete Item</button>
                        <hr />
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="col-sm col-lg-5">
              <h5 className="font-weight-bold m-0 pt-5">Carts Totals</h5>
              <hr className="mt-0"/>
              <div className="row justify-content-lg-between">
                <div className="col text-left">sub total</div>
                <div className="col text-right">Rp. {items.cartsPrice}</div>
              </div>
              <hr />
              {/* <div className="row justify-content-lg-between font-weight-bold">
                <div className="col text-left">total</div>
                <div className="col text-right">Rp. 300000</div>
              </div> */}
              <button type="button" className="btn btn-outline-success btn-sm my-3">Check Out</button>
            </div>
          </div>
      }
    </div>
  )
}

export default Cart
