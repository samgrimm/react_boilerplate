var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Sam'sReact Boiler Plate</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>HOME</IndexLink>
            </li>
            <li>
              <Link to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>another link</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref="search" placeholder="Search "/>
              </li>
              <li>
                <input type="submit" className="button" value="Search"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
