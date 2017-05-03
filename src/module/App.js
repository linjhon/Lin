var React = require('react');
var IndexLink = require('react-router').IndexLink;
var Link = require('react-router').Link;
var Intro = require('../component/Intro')
var Header = require('../component/Header');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


require('../sass/style.scss')
var App = React.createClass({
    getInitialState:function(){
        return {
            enter:true
        }
    },
    enter:function(){
        this.setState({
            enter:false
        })
    },
    render:function(){
        var introView=this.state.nter==true?<Intro onEnter={this.enter} />:'';
        console.log(this.props.location)
        console.log(this.state.pathname)
        return (
            <section id="section">
                {introView}
                <ReactCSSTransitionGroup className="animation" component="div" transitionName="project" transitionEnterTimeout={700} transitionLeaveTimeout={700} >
                    {React.cloneElement(this.props.children, {key: this.props.location.pathname})}       
                </ReactCSSTransitionGroup>
                <ul id="tab" className="nav nav-pills   text-center" role="tablist">
                    <li role="presentation">
                        <IndexLink to="/"  activeClassName="active"><span className="glyphicon glyphicon-book col" ></span> <span>技能</span></IndexLink>
                    </li>
                    <li  role="presentation">
                        <Link to="/project"  activeClassName="active"><span className="glyphicon glyphicon-list-alt" ></span> <span>项目详情</span></Link>
                    </li>
                    <li  role="presentation">
                        <Link to="/work"  activeClassName="active"><span className="glyphicon glyphicon-briefcase" ></span> <span>工作经历</span></Link>
                    </li>
                    <li  role="presentation">
                        <Link to="/mineinfo"  activeClassName="active"><span className="glyphicon glyphicon-user" ></span> <span>我的信息</span></Link>
                    </li>
                </ul>
            </section>
        )
    }
})

module.exports = App;