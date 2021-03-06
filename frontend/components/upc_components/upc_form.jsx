import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import {allUpcs} from '../../util/upc_api_util.js';
import { receiveUpc, receiveUpcs, createUpc, deleteUpc, fetchUpc,  fetchUpcs } from '../../actions/upcs_actions';

const mapStateToProps = (state, ownProps) => {
  return {
  upcErrors: state.upc.upcErrors,
  upcs: allUpcs(state.upc.upcs),
  upc: state.upc.upc
}};

const mapDispatchToProps = dispatch => ({
  receiveUpc: upc => dispatch(receiveUpc(upc)),
  createUpc: upc => dispatch(createUpc(upc)),
  fetchUpc: id => dispatch(fetchUpc(id)),
  fetchUpcs: () => dispatch(fetchUpcs()),
  receiveUpcs: upcs => dispatch(receiveUpcs(upcs)),
  deleteUpc: id => dispatch(deleteUpc(id))
});


class UpcForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: "",
      upc: ""
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._deleteUpc = this._deleteUpc.bind(this);
  }

  componentDidMount() {
    this.props.fetchUpcs();
  }

  _handleSubmit(e) {
    e.preventDefault();
    const upc = this.state;
    this.props.createUpc(upc);
  }

  _deleteUpc(id) {
    this.props.deleteUpc(id);
  }

  update(name) {
      return (e) => this.setState({ [name]: e.target.value})
  }

  render() {
    return(
      <div>
        <div>
          <ul id="errors_ul">
          {this.props.upcErrors.map((err) => (
            <li key={err}>
              {err}
            </li>
          )) }
          </ul>
        </div>
        <form className="form" onSubmit={this._handleSubmit}>
          <label>Product Name
            <input type="text" className="input" value={this.state.product_name} onChange={this.update("product_name")}/>
          </label>
        <label>UPC code
            <input type="text" className="input" value={this.state.upc} onChange={this.update("upc")}/>
        </label>
        <input type="submit" className="input" value="Add UPC" />
        </form>
        <div id="total_upc">
              Total {this.props.upcs.length} UPCs
        </div>
        <div>
          <ul id="upcs_ul">
          {this.props.upcs.map((upc, index) => (
            <li id="upcs_li" key={upc.upc}>
              <div> {index + 1} </div>
              <div> {upc.product_name} </div>
              <div> {upc.upc}
                <button onClick={() => this._deleteUpc(upc.id)} id="delete_button">Delete</button>
              </div>

            </li>
          )) }
          </ul>
        </div>
      </div>
    );
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UpcForm));
