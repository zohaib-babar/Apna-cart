import React from "react";

export default function Product(props) {
  // function incrementQuantity(index) {

  // }

  return (
    <div className="row mt-3">
      <div className="col-5">
        <h2>
          {props.product.name}{" "}
          <span className="badge text-bg-secondary">₹{props.product.price}</span>{" "}
        </h2>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-2">
        {props.product.quantity * props.product.price}
      </div>
      <button className="col-2 btn btn-danger" onClick={() => {
        props.removeItem(props.index);
      }}>
        Remove
      </button>
    </div>
  );
}



// import React from "react";

// export default function Product({ product, index, incrementQuantity, decrementQuantity, removeItem }) {
//   return (
//     <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
//       <div className="card h-100">
//         <img
//           src={product.img || "https://via.placeholder.com/150"}
//           className="card-img-top img-fluid"
//           alt={product.name}
//         />
//         <div className="card-body d-flex flex-column">
//           <h5 className="card-title">{product.name}</h5>
//           <p className="card-text">₹{product.price}</p>
//           <div className="d-flex justify-content-between align-items-center mb-2">
//             <button
//               className="btn btn-outline-primary btn-sm"
//               onClick={() => incrementQuantity(index)}
//             >
//               +
//             </button>
//             <span>{product.quantity}</span>
//             <button
//               className="btn btn-outline-danger btn-sm"
//               onClick={() => decrementQuantity(index)}
//             >
//               -
//             </button>
//           </div>
//           <button
//             className="btn btn-outline-secondary btn-sm w-100 mt-auto"
//             onClick={() => removeItem(index)}
//           >
//             Remove
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
