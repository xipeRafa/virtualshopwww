export default function users(state = []) {
      return state; // nothing to do here, but we need products node in redux store
  }


export function getUsers(state, props) {
      return state.user;
}