export const fetchUpcs = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/upcs'
  })
}

export const fetchUpc = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/upc/${id}`
  })
}

export const createUpc = (upc) => {
  return $.ajax({
    method: 'POST',
    url: 'api/upcs',
    dataType: 'json',
    data: {upc}
  })
}


export const deleteUpc = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/upcs/${id}`
  });
}

export const allUpcs = (upcs) => {
  let arr = [ ];
  let keys = Object.keys(upcs);
  keys.forEach( (key) => arr.push(upcs[key]));
  return arr;
}
