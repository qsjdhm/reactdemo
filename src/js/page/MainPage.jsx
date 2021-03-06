/**
 * Created by a1 on 2016/5/5.
 */




import { Menu, Breadcrumb, Icon } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router'

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
	        <div className="ant-layout-aside">
		        <aside className="ant-layout-sider">
			        <div className="ant-layout-logo"></div>
			        <Menu mode="inline" theme="dark"
			              defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
				        <Menu.SubMenu key="sub1" title={<span><Icon type="user" />导航一</span>}>
					        <Menu.Item key="1"><Link to="/del">About</Link></Menu.Item>
					        <Menu.Item key="2"><Link to="/edit">About</Link></Menu.Item>
					        <Menu.Item key="3">选项3</Menu.Item>
					        <Menu.Item key="4">选项4</Menu.Item>
				        </Menu.SubMenu>
				        <Menu.SubMenu key="sub2" title={<span><Icon type="laptop" />导航二</span>}>
					        <Menu.Item key="5">选项5</Menu.Item>
					        <Menu.Item key="6">选项6</Menu.Item>
					        <Menu.Item key="7">选项7</Menu.Item>
					        <Menu.Item key="8">选项8</Menu.Item>
				        </Menu.SubMenu>
				        <Menu.SubMenu key="sub3" title={<span><Icon type="notification" />导航三</span>}>
					        <Menu.Item key="9">选项9</Menu.Item>
					        <Menu.Item key="10">选项10</Menu.Item>
					        <Menu.Item key="11">选项11</Menu.Item>
					        <Menu.Item key="12">选项12</Menu.Item>
				        </Menu.SubMenu>
			        </Menu>
		        </aside>
		        <div className="ant-layout-main">
			        <div className="ant-layout-header"></div>
			        <div className="ant-layout-breadcrumb">
				        <Breadcrumb>
					        <Breadcrumb.Item>首页</Breadcrumb.Item>
					        <Breadcrumb.Item>应用列表</Breadcrumb.Item>
					        <Breadcrumb.Item>某应用</Breadcrumb.Item>
				        </Breadcrumb>
			        </div>
			        <div className="ant-layout-container">
				        <div className="ant-layout-content">
					        <div style={{ height: 590 }}>
						        <div>
							        {/* 渲染子组件 */}
							        {this.props.children}
						        </div>
					        </div>
				        </div>
			        </div>
			        <div className="ant-layout-footer">
				        Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
			        </div>
		        </div>
	        </div>
        );
    }
};





