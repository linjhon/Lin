var React = require('react');
var Link = require('react-router').Link;

var Intro = React.createClass({
    introInit:function(){
        var bullet = $("#position").find('li');
        var swipeid = document.getElementById('intro');
        Swipe(swipeid, {
            auto: false,
            continuous: true,
            disableScroll: false,
            callback: function(pos) {
                bullet.eq(pos).addClass('cur').siblings().removeClass('cur');
            }
        });
    },
    enter:function(){
        this.props.onEnter()
    },
    componentDidMount:function(){
        this.introInit();
    },
    render:function(){
        return (
            <div id="intro">
                <div className="swipe-wrap">
                    <div className="item">
                        第一个板块
                    </div>
                    <div className="item">
                        第二个板块
                    </div>
                    <div className="item text-center">
                        <Link to="/mineinfo" onClick={this.enter} className="btn btn-primary btn-enter">点击进入</Link>
                    </div>
                </div>
                <ul id="position">
                    <li className="cur"></li>
                    <li style={{marginLeft:-5+'px'}}></li>
                    <li style={{marginLeft:-5+'px'}}></li>
                </ul>
            </div>
        )
    }
})

module.exports= Intro;