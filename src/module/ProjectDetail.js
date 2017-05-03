var React = require('react');
var Header= require('../component/Header.js');
var hashHistory = require('react-router').hashHistory;
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var ProjectDetail=React.createClass({
    componentWillMount:function(){
        $.ajax({

        })
    },
    render:function(){
        return (            
            <div className="main">
                <Header title={this.props.params.id}>
                    <span ref='photo' className="icon-left glyphicon glyphicon-menu-left" onClick={()=>{hashHistory.goBack()}} ></span>
                </Header>
                <div className="content">
                    <div className="container">
                        <h3>1</h3>
                    </div>
                </div>
            </div>
        )
    }
})


module.exports=ProjectDetail;