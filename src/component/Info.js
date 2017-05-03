var React = require('react');
var Info = React.createClass({
    render:function(){
        return (
            <div className="info">
                <div className="page-header text-center">
                    <h4 style={{fontWeight:600,padding:'0 40px'}}>{this.props.title} <small className="text-nowrap">{this.props.subtitle}</small></h4>
                </div>
                {this.props.children}
            </div>
        )
    }
})

module.exports=Info;