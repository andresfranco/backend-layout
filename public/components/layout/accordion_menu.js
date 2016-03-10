
var Child_Option= React.createClass({
  
  render: function() {
     return(
      <a href={this.props.link}>
      <li className="list-group-item"><span className={this.props.icon_class}></span>
       {this.props.name}
      </li>
      </a>
      )
    }

});

var Accordion_Option= React.createClass({
  getInitialState: function() {
    return {
      option_items:[]
     
     }
  },
  render: function() {
    var menu_options=[
    {id:1,div_options_name:"collapseOne",name:"Content",icon_class:"glyphicon glyphicon-folder-close",options:[{id:1,link:"#",name:"News",icon_class:"glyphicon glyphicon-flash"},
       {id:2,link:"#",name:"News2",icon_class:"glyphicon glyphicon-flash"}]
     }
   ,{id:2,div_options_name:"collapseTwo",name:"Reports",icon_class:"glyphicon glyphicon-file",options:[{id:1,link:"#",name:"News",icon_class:"glyphicon glyphicon-file"}]
   }
   ];

   var options_menu = menu_options.map(function(option_menu) {
    var child_menu_option = option_menu.options.map(function(item) {
    return(<Child_Option key={item.id} id={item.id} link={item.link} name={item.name} icon_class={item.icon_class}/>)});

            return(
         
        <div key={option_menu.id} className="panel panel-default">
        <a data-toggle="collapse" data-parent="#accordion" href={'#'+option_menu.div_options_name}>  
        <div className="panel-heading">
        <h4 className="panel-title">
        <span className={option_menu.icon_class}>
        </span>{' '+option_menu.name}
        </h4>
        </div>
        </a>
        <div id={option_menu.div_options_name} className="panel-collapse collapse">
          <ul className="list-group">
           
            {child_menu_option}
       
          </ul>
        </div>
        </div>
        )
         });  

    return (
      <div>{options_menu}</div>
    )
  }
});
  ReactDOM.render(
      <Accordion_Option/>,
      document.getElementById('accordion_menu')
      );
