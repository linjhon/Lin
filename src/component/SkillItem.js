var React = require('react');
var SkillItem = React.createClass({
    componentDidMount:function(){
        $('.'+this.name).radialIndicator({
            barColor: this.props.color,
            barWidth: 10,
            initValue:this.props.percent,
            roundCorner : true,
            percentage: true,
            displayNumber: false
        });
        // $('.'+this.name).data('radialIndicator').animate(this.props.percent);
    },
    render:function(){        
        this.name=this.props.name.replace(/\s/g,'');
        return (
            <div className="col-xs-6 col-md-3 skill-item text-center">
                <div className={this.name+' center-block'}>                    
                    <h5>{this.props.name}</h5>
                </div>
            </div>
        )
    }
})

module.exports=SkillItem;