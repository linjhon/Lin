var React = require('react');
var Header= require('../component/Header.js');
var Card= require('../component/Card.js');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Work = React.createClass({    
    getInitialState:function(){
        console.log('1')
        return{
            work:'为什么会这样'
        }
    },
    componentWillMount:function(){
        $.ajax({
            url:'http://linqiang.online/prd/php/work.php', 
        }).done(res=>{            
            this.setState({
                work:res
            })
            console.log('2请求ajax',this.state.work.length)
        })
    },
    render:function(){
        console.log('3渲染页面',this.state.work)
        var workContent=[];
        for(var i=0;i<this.state.work.length;i++){
            workContent.push(<Card className="bullet" item={this.state.work[i]} key={i}/>);
        }
        console.log(workContent)
        return (
            <div className="main">
                <Header title="工作经历" left={false}/>
                <div className="content">
                    <div className="container">    
                        {workContent}                    
                    </div>
                </div>
            </div>
        )
    }
})

module.exports=Work;