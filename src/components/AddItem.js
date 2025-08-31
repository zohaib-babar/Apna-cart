import React, { Component } from "react";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }
  render() {
    return (
      <form
        className="row mb-5"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addItem(this.state.productName, Number(this.state.productPrice));
        }}
      >
        <div className="form-group col-4">
          <label htmlFor="inputName">Name</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            placeholder="name"
            name="productName"
            onChange={(e) => {
              this.setState({ productName: e.currentTarget.value });
            }}
            value={this.state.productName}
          />
        </div>
        <div className="form-group col-4">
          <label htmlFor="inputPrice">Price</label>
          <input
            type="number"
            className="form-control"
            id="Price"
            placeholder="price"
            name="productPrice"
            onChange={(e) => {
              this.setState({ productPrice: Number(e.currentTarget.value) });
            }}
            value={this.state.productPrice}
          />
        </div>
        <button type="submit" className="btn btn-primary text-dark col-4">
          Add to cart
        </button>
      </form>
    );
  }
}

export default AddItem;
