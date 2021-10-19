import React, { Component } from 'react'


var ary = ['one', 'two', 'three', 'four', 'five'];
const listItems = ary.map((item,key) =>{
    if (key % 2 === 0) {
        return <li>new {ary[key]}</li>
      }
}
);
class Search extends React.Component {

  render() {
      return(<div className="customtest">
          <p className="customtest">{listItems}</p>
          </div>
      )
  }
}

export default Search