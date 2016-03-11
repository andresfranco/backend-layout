/*import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'*/

var routes = (
  <Route handler={App} path="/">
       <Route name="visitors" handler={Visitors}>
            <Route name="visitors-table" path="table" handler={VisitorsTable}/>
            <Route name="visitors-chart" path="chart" handler={VisitorsChart}/>
       </Route>
       <Route name="pages" handler={Pages}>
            <Route name="pages-table" path="table" handler={PagesTable}/>
            <Route name="pages-chart" path="chart" handler={PagesChart}/>
       </Route>
       {/* ... resto de rutas */}
  </Route>
);
 
class Index extends React.Component {
  render() {
    return (
      <div>
        <h2>Index!</h2>
      </div>
    )
  }
}

class Users extends React.Component {
  render() {
    return (
      <div>
        <h2>Users</h2>
        {this.props.children}
      </div>
    )
  }
}

class UsersIndex extends React.Component {
  render() {
    return (
      <div>
        <h3>UsersIndex</h3>
      </div>
    )
  }
}

class User extends React.Component {
  render() {
    return (
      <div>
        <h3>User {this.props.params.id}</h3>
      </div>
    )
  }
}

var About= React.createClass({
  
  render: function() {
    return (
      
     <div>
        <h2>About</h2>
      </div>  
      
    );
  }

});


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/test" component={App}>
      <IndexRoute component={Index}/>
      <Route path="/about" component={About}/>
      <Route path="users" component={Users}>
        <IndexRoute component={UsersIndex}/>
        <Route path=":id" component={User}/>
      </Route>
    </Route>
  </Router>,
  document.getElementById('example')
);
