import { connect } from "react-redux";
import { loadContent, pageAction } from "../actions/actionFuncs";
import PaginationExample from "../components/PaginationExample";

const mapStateToProps = (state) => ({
  currentPage: state
});

const mapDispatchToProps = (dispatch) => ({
  changePage: (pageNumber) => dispatch(pageAction(pageNumber)),
  loadContent: (data) => dispatch(loadContent(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(PaginationExample);
