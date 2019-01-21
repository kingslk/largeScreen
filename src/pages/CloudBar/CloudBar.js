import {
    Layout, Menu, Icon,
} from 'antd';
import * as React from "react";
import './CloudBar.css';
import {Link, Route, Redirect, Switch} from 'react-router-dom';
import One from '../../components/One/One';
import Two from '../../components/Two/Two';

const {
    Header, Content, Footer, Sider
} = Layout;
const SubMenu = Menu.SubMenu;

class CloudBar extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render() {
        const {match} = this.props;
        const {url} = match;
        return (
            <Layout className="CloudBar" style={{minHeight: '100vh'}}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo"/>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Link to='/index/One'><Icon type="pie-chart"/><span style={{marginBottom:"-10px" }}>服务区</span></Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop"/><span style={{marginBottom:"-10px" }}>待开发模块</span>
                            <Link to='/index/Two'></Link>
                        </Menu.Item>
                        <Menu.Item key="9">
                            <Icon type="file"/>
                            <span style={{marginBottom:"-10px" }}>File</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0, margin: '10px 0'}}>
                        <div className="cloud-name">贵州告诉公路服务区管理云平台</div>
                    </Header>

                    <Content style={{margin: '0 10px'}}>
                        <Switch>
                            <Route path={`${url}/One`} component={One}/>
                            <Route path={`${url}/Two`} component={Two}/>
                        </Switch>

                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default CloudBar