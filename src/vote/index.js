import { connect } from 'react-redux';
import actions from 'redux/actions';
import Component from './component'; 

const mapState = (state) => {
    return {counter: state.counter}
  }
  
  const mapDispatch = {
    add: (value)=> actions.increment(value),
    deduct: (value)=> actions.decrement(value)
  } 

  export default connect(mapState, mapDispatch)(Component);
