var React = require('react');
var Header= require('../component/Header.js')
var ProjectItem= require('../component/ProjectItem.js');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var path=require('path');

var Project = React.createClass({
    getInitialState:function(){
        console.log('1')
        return{
            project:[]
        }
    },
    componentWillMount:function(){
        $.ajax({
            url:'//linqiang.online/prd/php/project.php',            
        }).done(res=>{            
            this.setState({
                project:res
            })
            console.log('2请求ajax',this.state.project)
        })
    },
    render:function(){
        return (            
            <div className="main">
                <Header title="项目详情" left={false}/ >
                <div className="content">
                    <div className="container">
                        <ProjectItem project={this.state.project} key={2}></ProjectItem>
                    </div>
                </div>
            </div>
        )
    }
})

module.exports=Project;