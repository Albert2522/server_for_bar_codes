import * as APIUtil from '../util/upc_api_util';

export const RECEIVE_UPCS = "RECEIVE_UPCS";
export const RECEIVE_UPC = "RECEIVE_UPC";
export const RECEIVE_UPC_ERRORS = "RECEIVE_UPC_ERRORS";
export const REMOVE_UPC = "REMOVE_UPC";

export const receiveUpcs = upcs => ({
  type: RECEIVE_UPCS,
  upcs
});

export const receiveUpc = upc => ({
  type: RECEIVE_UPC,
  upc
});

export const receiveUpcErrors = upcErrors => ({
  type: RECEIVE_UPC_ERRORS,
  upcErrors
});

export const removeUpc = upc => ({
  type: REMOVE_UPC,
  upc
});


export const fetchUpcs = () => dispatch => (
  APIUtil.fetchUpcs().then(data => dispatch(receiveUpcs(data)))
);

export const fetchUpc = (id) => dispatch => (
  APIUtil.fetchUpc(id).then(data => dispatch(receiveUpc(data)))
);

export const createUpc = (upc) => dispatch => (
  APIUtil.createUpc(upc).then(data => dispatch(receiveUpc(data)), err => dispatch(receiveUpcErrors(err.responseJSON)))
);

export const deleteUpc = (id) => dispatch => (
  APIUtil.deleteUpc(id).then(data => dispatch(removeUpc(data)), err => dispatch(receiveUpcErrors(err.responseJSON)))
);
