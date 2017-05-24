var React = require('react');
var Header= require('../component/Header.js')
var SkillItem= require('../component/SkillItem.js')
require('../plugin/radialIndicator.min')

var Home = React.createClass({
    getInitialState:function(){
        return {
            info:null
        }
    },
    componentWillMount:function(){
        var vm=this;
        $.ajax({
            url:'./prd/data/info.json',   
        }).done(function(res){
            vm.setState({
                info:res.skill
            })
        },function(){
                console.log(vm.state.info)
            })
    },
    render:function(){
        var info=this.state.info;
        var content=[];
        for(var value in info ){
            //var str='';
            content.push(<div className="page-header col-xs-12" key={value} style={{background: '#fff',margin:'15px 0'}} ><h3 className="text-center"  >{value}</h3></div>);
            for(var i=0;i<info[value].length;i++){
                content.push(<SkillItem name={info[value][i].name} percent={info[value][i].percent} color={info[value][i].color} key={value+i} />);
            }
        }
       
        
        return (
            <div className="main">
                <Header title="首页" left={false}/>
                <div className="content">
                    <div className="container">
                        {content}
                    </div>
                </div>
            </div>
        )
    }
})

module.exports=Home;