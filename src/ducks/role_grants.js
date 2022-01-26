export default function role_grants(state = []) {
      return state; // nothing to do here, but we need products node in redux store
  }


export function getRoles(state, props) {
      return state.role_grants;
}