import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'


class BookList extends Component {
  renderList = () => {
      return this.props.books.map(book => {
          return (
              <li
                  key={book.title}
                  onClick={() => this.props.selectBook(book)}
                  className="list-group-item"
                  >
                  {book.title}
              </li>
          )
      })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
          { this.renderList() }
      </ul>
    );
  }
}

function mapStateToProps(state) {
    // whatever is returned here, will show up as props in BookList
    return {
        books: state.books,
    }
}

function mapDispatchToProps(dispatch){
    // when selectBook is called, the result should be passed to all our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// this binds the state together with the BookList
// -> this transforms booklist into a "container"
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
