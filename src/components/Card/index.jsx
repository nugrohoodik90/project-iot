import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { cartsActions } from '../../redux/actions/cartActions';
import productsActions from '../../redux/actions/productActions';

function Card(){
  const products = useSelector((state) => state.ProductsReducers)
  const dispatch = useDispatch()

  const [model, setModel] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    dispatch(productsActions());
  }, [dispatch])

  const handleAddCart = (item) => {
    // console.log(item);
    dispatch(cartsActions(item))
  }

  const handleModal = (item) => {
    // console.log(item)
    setData(item)

    return setModel(true)
  }



  return (
    <>
      <div className="my-2">
        <div className="col">
          <div className="d-flex justify-content-around flex-wrap mb-3">
            {
              products.Products.map((item, index) => {
                return (
                  <div className="p-1 my-2" key={index}>
                    <div className="card mx-auto" style={{ width: "140px" }}>
                      <img src={item.gambar} className="card-img-top " alt={item.nama} />
                      <div className="card-body p-1">
                        <p className="m-0 ">{item.nama}</p>
                        <p className="m-0 font-weight-bold">Rp. {item.harga}</p>
                        <button type="button" className="btn btn-primary btn-sm" onClick={() => handleModal(item)}>
                          Detail
                        </button>
                        <button type="button" className="btn btn-info btn-sm m-1" onClick={() => handleAddCart(item)}><FaShoppingCart />+</button>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      {
        model === true ? <Modal item={data} hide={() => setModel(false)} /> : ''
      }

    </>
  )
}
export default Card

// modal untuk product
export function Modal(props) {
  let modelStyle = {
    display: 'block',
    backgroundColor: 'rgba(0,0,0,0.8)'
  }
  // console.log(props)
  const dispatch = useDispatch()
  const handleAddCart = (item) => {
    // console.log(item);
    dispatch(cartsActions(item))
  }
  return (
    <div>
      <div className="modal show fade" style={modelStyle}>
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">{props.item.kategori}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.hide}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img src={props.item.gambar} className="card-img-top" alt={props.item.nama} />
              <p className="m-0 ">{props.item.nama}</p>
              <p className="m-0 ">{props.item.warna}</p>
              <p className="m-0 font-weight-bold">Rp. {props.item.harga}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary btn-sm" onClick={props.hide}>Close</button>
              <button type="button" className="btn btn-primary btn-sm" onClick={() => handleAddCart(props.item)}><FaShoppingCart />+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}