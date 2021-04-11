import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, changeTableStatus } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),

});

const mapDispatchToProps = (dispatch, props) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  changeStatus: (id, payload) => dispatch(changeTableStatus(id, payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);