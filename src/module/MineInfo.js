var React = require('react');
var Header= require('../component/Header.js')
var Info= require('../component/Info.js')
var MineInfo = React.createClass({
    getInitialState:function(){
        console.log('1我初始化了信息页的状态');
        return {
            info:'',
            pic:require('../public/images/touxiang.jpg'),
            flower:' '
        }
    },
    componentWillMount:function(){
        $.ajax({
            url:'http://linqiang.online/prd/php/user.php'
        }).done(res=>{
            //var data=JSON.parse(res)
            console.log(res)
            this.setState({
                info:res,
                flower:res.flower
            })
        })
        console.log('2我请求了信息页')
        $.ajax({
            method:'post',
            url: 'http://linqiang.online/prd/php/getsign.php',
            data: {
                url: window.location.href
            },
            dataType: 'json'
        }).done(function (res) {
            console.log(res)
            wx.config({
                appId: res.appId,
                timestamp: res.timestamp,
                nonceStr: res.nonceStr,
                signature: res.signature,
                jsApiList: [
                    // 所有要调用的 API 都要加到这个列表中
                    // 'scanQRCode', 
                    'chooseImage'
                ]
            });
        })
    },
    photo:function(){
        var vm=this;      
        wx.ready(function () {
                // 在这里调用 API
                // this.refs.photo.onclick = function () {
                //     wx.scanQRCode({
                //         needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                //         scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                //         success: function (res) {
                //             var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                //         }
                //     });
                // }
                    wx.chooseImage({
                        count: 1, // 默认9
                        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                        success: function (res) {
                            var localIds = res.localIds; //返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                            alert(localIds[0])
                            vm.setState({
                                pic:localIds[0]  
                            })
                        }
                    });

            });
    },
    addFlower:function(){
        //添加之前请求数据库;
        $.ajax({
            url:'http://linqiang.online/prd/php/user.php'      
        }).done(res=>{
            //var data=JSON.parse(res)
            console.log(res)
            this.setState({
                flower:res.flower
            })
            //增加
            var flower=this.state.flower;
            flower++;
            this.setState({
                flower:flower
            },function(){
                //追加到数据库;
                $.ajax({
                    url: 'http://linqiang.online/prd/php/user.php',
                    data: {
                        flower:this.state.flower
                    }
                }).done(function(){
                    console.log('我执行了数据添加')
                })
            })
        })
        
        
        
    },
    componentWillUnmount:function(){
        
    },
    render:function(){
        console.log('3我渲染了信息页')
        var infoData=[]
        for(var key in this.state.info){
            if(key!="id" && key!="flower" ) {
                infoData.push(<li className="clearfix" key={key} style={{margin:5+'px',fontSize:14+'px'}}><p className="col-xs-4 row">{key}：</p><p className="col-xs-9">{this.state.info[key]}</p></li>)
            }
         }
        return (
            <div className="main">
                <Header title="我的信息">
                    <span href="" ref='photo' className="camera glyphicon glyphicon-camera" onClick={this.photo} ></span>
                </Header>
                <div className="content">
                    <div className="container">
                        <div className="widget-container widget-profile boxed">
                            <div className="inner clearfix">
                                <div className="avatar"><img src={this.state.pic} alt=""/></div>
                                <h5>林强</h5>
                                <span className="subtitle">前端应用开发工程师</span>
                                <div className="follow">
                                    <a className="btn btn-primary" onClick={this.addFlower} style={{outline:'none'}}><span>Follow</span></a>
                                    <div className="followers pull-right">
                                        <strong>{this.state.flower}</strong>
                                        <span>followers</span>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                        <div className="myinfo"></div>
                        <Info title="基本信息" subtitle="Basic Information">
                            <ul className="list-unstyled">                            
                                {infoData}                         
                            </ul>
                        </Info>
                    </div>
                </div>
            </div>
        )
    }
})

module.exports=MineInfo;