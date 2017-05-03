var React = require('react');
var Card = React.createClass({
    render: function () {
        return (
            <div className="widget-container widget_avatar"  >
                <div className="avatar-image"><img src={this.props.item.bigimage} alt="" /></div>
                <div className="inner clearfix">
                    <div className="avatar"><img src={this.props.item.image} alt="" /></div>
                    <h5>{this.props.item.name}</h5>
                    <span className="subtitle">{this.props.item.project}</span>
                </div>
                <div className="post-meta-links">
                    <ul className="clearfix list-unstyled">
                        <li className="post-view first"><a href="#"  style={{outline:'none'}}><span><i className="glyphicon glyphicon-eye-open"></i> 172</span></a></li>
                        <li className="post-comm"><a href="#"  style={{outline:'none'}}><span><i className="glyphicon glyphicon-pencil"></i> 34</span></a></li>
                        <li className="post-like last"><a href="#"  style={{outline:'none'}}><span><i className="glyphicon glyphicon-heart"></i> 210</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
})

module.exports = Card;