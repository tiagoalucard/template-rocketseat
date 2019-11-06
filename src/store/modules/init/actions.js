export function addRequest(id) {
  return {
    type: '@example/ADD_REQUEST',
    id,
  };
}
export function addSuccess(id) {
  return {
    type: '@example/ADD_SUCESS',
    id,
  };
}
