var React = require('react');
var ReactDOM = require('react-dom');

// React-Router路由部分的引入
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;
var IndexRoute = require('react-router').IndexRoute;

var App = require('./module/App.js');
var Home = require('./module/Home.js');
var Project = require('./module/Project.js');
var ProjectDetail = require('./module/ProjectDetail.js');
var MineInfo = require('./module/MineInfo.js');
var Work = require('./module/Work.js');

var Index = React.createClass({
    componentWillMount:function(){
        
    },
    render:function(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute  component={Home}/>
                    <Route path="/project" component={Project} ></Route>
                    <Route path="/project/:id" component={ProjectDetail}></Route>
                    <Route path="/work" component={Work} ></Route>
                    <Route path="/mineinfo" component={MineInfo} ></Route>
                </Route>
            </Router>
        )
    }
})

ReactDOM.render(<Index/>,document.getElementById('app'));