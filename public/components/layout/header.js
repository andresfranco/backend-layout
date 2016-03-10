
var Header_icon_bar_button= React.createClass({

  render: function() {
    return (
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      </button>
    );
  }
});
var Brand = React.createClass({
  render: function() {
    return (
      <a className="navbar-brand" href={this.props.brand_data.url}>
      <i className={this.props.brand_data.icon_class}></i>{' '+this.props.brand_data.name}
      </a>
    );
  }
}); 
var User_Info= React.createClass({
  render: function() {
    return (
     <ul className="nav navbar-nav navbar-right">
      <li className="dropdown">
      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
      <img src={this.props.user_info_data.user_image_path} width="16px" height="16px"></img> 
     {' '+this.props.user_info_data.logged_user_name}
      <span className="caret"></span>
      </a>
      <ul className="dropdown-menu">
      <li><a href="#">{this.props.user_info_data.Logout_caption}</a></li>
      </ul>
      </li>
      </ul>
    );
  }
}); 

var Languages_List= React.createClass({
  
  render: function() {
    var languages = this.props.languages_data.map(function(language) {
      return (
          <li key={language.id}><a href={language.url}><img src={language.image_path}></img>{' '+language.name}</a></li>
      );
    });
    return (
     <ul className="nav navbar-nav navbar-right">
     <li className="dropdown">
      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img src="images/es.png"></img> Spanish <span className="caret"></span></a>
      <ul className="dropdown-menu">
      {languages}
      </ul>
      </li>
      </ul>
    );
  }
}); 

 var Header_nav_bar= React.createClass({
  getInitialState: function() {
    return {
      brand_data:
      {
        url:"#",
        icon_class:"fa fa-certificate",
        name:"BRAND NAME"
      },
      user_info_data:
      {
      logged_user_name:"administrator",
      user_image_path:"images/avatar.png",
      logout_link:"#",
      Logout_caption:"Logout"
      },
      languages_data:[{id:"es",name:"Spanish",image_path:"images/es.png",url:"#"}
      ,{id:"en",name:"English",image_path:"images/us.png",url:"#"}]
     };
  },
  render: function() {
    return (
      <nav className="navbar navbar-default">
    <div className="container-fluid">
   
      <div className="navbar-header">
       <Header_icon_bar_button/>
       <Brand brand_data={this.state.brand_data}/>
      </div>
     
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
       <Languages_List languages_data ={this.state.languages_data}/>
       <User_Info user_info_data ={this.state.user_info_data}/>
      </div>
    </div>
  </nav>
    );
  }
}); 

  ReactDOM.render(
      <Header_nav_bar/>,
      document.getElementById('header_navbar_components')
      );