var React = require('react');

var Header = React.createClass({
    render:function(){
        return (
            <header className="header text-center bg-primary">
                <h4  className="title">{this.props.title}</h4>
                {this.props.children}
            </header>
        )
    }
})




module.exports=Header;
