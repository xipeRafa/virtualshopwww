import { connect } from 'react-redux';
import Login from '../components/Login';
import { getUsers } from '../ducks/user';

const mapStateToProps = (state, props) => {
    return {
        user : getUsers(state, props)
    }
}

export default connect(mapStateToProps)(Login);
