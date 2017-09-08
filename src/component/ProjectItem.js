var React = require('react');
var ProjectItem = React.createClass({
    render: function () {
        var projectContent=[];
        for(var i=0;i<this.props.project.length;i++){
            projectContent.push(
                <li className="comment first last" key={i} >
                    <div className="comment-body boxed  clearfix">
                        <div className="comment-arrow"></div>
                        <div className="comment-avatar">
                            <div className="avatar"><img src={LIN_API+this.props.project[i].image} alt=""/></div>
                        </div>
                        <div className="comment-text">
                            <div className="comment-author clearfix">
                                <a href={'#/project/'+this.props.project[i].id} className="link-author" style={{outline:'none'}}>{this.props.project[i].name}</a>
                            </div>
                            <div className="comment-entry">
                                {this.props.project[i].description}
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                </li>
            )
        }
        return (
            <div className="comment-list styled clearfix">
                <ol className="list-unstyled" >
                    {projectContent}
                </ol>
            </div>
        )
    }
})

module.exports = ProjectItem;