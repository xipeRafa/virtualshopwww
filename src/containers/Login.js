import { connect } from 'react-redux';
import Login from '../components/Login';
import { getUsers } from '../ducks/user';
import { getRoles } from '../ducks/role_grants';

const mapStateToProps = (state, props) => {
    return {
        user : getUsers(state, props),
        role_grants : getRoles(state, props)
    }
}

export default connect(mapStateToProps)(Login);
