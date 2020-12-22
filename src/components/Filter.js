import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">{this.props.count} Ürün</div>
        <div className="filter-sort">
          Sırala{" "}
          <select value={this.props.sort} onChange={this.props.sortProducts}>
            <option>Tümü</option>
            <option value="lowest">En Yüksek</option>
            <option value="highest">En Düşük</option>
          </select>
        </div>
        <div className="filter-size">
          Filtre{" "}
          <select value={this.props.size} onChange={this.props.filterProducts}>
            <option value="">Hepsi</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>
    );
  }
}
