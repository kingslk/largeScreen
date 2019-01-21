import React, { Component } from 'react';

import './NavigationBar.css';
import CloudBar from '../CloudBar/CloudBar';

import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Row,
  Col,
  Dropdown,
  message,
  Button,
  Drawer,
  Card,
  Avatar,
  Progress,
  Collapse,
  Modal
} from 'antd';
import Slider from 'react-slick';
import Data from '../data/nav';
import moment from 'moment';
import ReactEcharts from 'echarts-for-react';

const { Header, Content, Sider } = Layout;

const Panel = Collapse.Panel;
const {
  serverName,
  serverWeatherName,
  serverTem,
  serverYear,
  serverSaveWork,
  pieOption
} = Data;
const { northRest, sorthRest, northFlow, sorthFlow } = Data.carRest;

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '',
      day: '',
      model: '',
      visible1: false,
      visible: false,
      childrenDrawer: false
    };
  }

  componentWillMount() {
    this.tick = setInterval(() => {
      this.setState({ time: moment().format('YYYY-MM-DD HH:mm:ss') });
    }, 1000);
    this.day = setInterval(() => {
      this.setState({ day: moment().format('d') });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tick);
    clearInterval(this.day);
  }

  /*抽屉传参展示
    通过switch case实现
     */
  showDrawer = model => {
    this.setState({
      visible: true,
      model: model
    });
  };
  /* 
  显示model
  */
  showModal = () => {
    this.setState({
      visible1: true
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible1: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible1: false
    });
  };
  /* 抽屉 */
  firstdraw = () => {
    switch (this.state.model) {
      case 'mainMessage':
        return 'this is mainMessage';
      case 'Car':
        return 'this is car';
      case 'WC':
        return 'this is wc';
    }
  };
  /*
   * this place may need a axios
   * */
  onClose = () => {
    this.setState({
      visible: false
    });
  };

  onCloseChild = () => {
    this.setState({
      childrenDrawer: false
    });
  };
  /* 编辑抽屉的权限 */
  showChildrenDrawer = (role, roles) => {
    if (role === roles) {
      this.setState({
        childrenDrawer: true
      });
    } else {
      message.info('你没有这个权限');
    }
  };

  onChildrenDrawerClose = () => {
    this.setState({
      childrenDrawer: false
    });
  };

  render() {
    const { time, day } = this.state;
    const { role, userInfo, match } = this.props;

    // swipe
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true
      /*
       * 变化前的请求和变化后的请求
       * */

      // beforeChange: function (currentSlide, nextSlide) {
      //     console.log("before change", currentSlide, nextSlide);
      // },
      // afterChange: function (currentSlide) {
      //     console.log("after change", currentSlide);
      // }
    };
    // menu卷展
    const menu = (
      <Menu onClick={handleMenuClick}>
        {/*
                    you should set a parameter to this,showDrawer
                */}
        <Menu.Item key="1" onClick={() => this.showDrawer('mainMessage')}>
          1st menu item
        </Menu.Item>
        <Menu.Item key="2" onClick={() => this.showDrawer('Car')}>
          2nd menu item
        </Menu.Item>
        <Menu.Item key="3" onClick={() => this.showDrawer('WC')}>
          3rd menu item
        </Menu.Item>
      </Menu>
    );

    function handleMenuClick(e) {
      console.log('click', e);
    }

    switch (role) {
      case '00':
        return (
          <Layout className="Navigation">
            <Header className="ant-layout-header">
              <div className="logo" />
              <div className="server_message">
                <span className="server_cloud">
                  贵州告诉公路智慧服务区管理云平台
                </span>
                <span className="server_name">{serverName}</span>
                <span className="server_weather_name">{serverWeatherName}</span>
                <span className="server_temperature">{serverTem}</span>
                <span className="server_work_message">
                  <label className="server_work_year">
                    {serverYear}安全运行天数
                  </label>
                  <br />
                  <label className="server_work_days">{serverSaveWork}天</label>
                </span>
                <span className="server_time">
                  <label className="server_now_time">{time}</label>
                  <br />
                  <label className="server_now_day">星期{day}</label>
                </span>
              </div>
            </Header>

            <Content>
              <Row>
                <Col
                  span={3}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 350,
                    justifyContent: 'space-around'
                  }}
                >
                  <div
                    style={{
                      borderTop: '2px solid #ff0000',
                      background: '#b2b2b2',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <div
                      style={{
                        background: 'rgb(255, 145, 145)',
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingBottom: 16,
                        paddingTop: 16
                      }}
                    >
                      <Icon type="car" />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <span>南区今日车流</span>
                      <span>4096</span>
                    </div>
                  </div>
                  <div
                    style={{
                      borderTop: '2px solid #ff0000',
                      background: '#b2b2b2',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <div
                      style={{
                        background: 'rgb(255, 145, 145)',
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingBottom: 16,
                        paddingTop: 16
                      }}
                    >
                      <Icon type="car" />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <span>南区今日车流</span>
                      <span>4096</span>
                    </div>
                  </div>
                  <div
                    style={{
                      borderTop: '2px solid #ff0000',
                      background: '#b2b2b2',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <div
                      style={{
                        background: 'rgb(255, 145, 145)',
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingBottom: 16,
                        paddingTop: 16
                      }}
                    >
                      <Icon type="car" />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <span>南区今日车流</span>
                      <span>4096</span>
                    </div>
                  </div>
                  <div
                    style={{
                      borderTop: '2px solid #ff0000',
                      background: '#b2b2b2',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <div
                      style={{
                        background: 'rgb(255, 145, 145)',
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingBottom: 16,
                        paddingTop: 16
                      }}
                    >
                      <Icon type="car" />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <span>南区今日车流</span>
                      <span>4096</span>
                    </div>
                  </div>
                </Col>
                <Col span={10} style={{ padding: 16 }}>
                  <Row>
                    <Col
                      span={8}
                      style={{
                        height: 130,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <span
                          style={{
                            paddingTop: 8,
                            paddingBottom: 8
                          }}
                        >
                          车位占用数量
                        </span>
                        <span>
                          <Progress type="dashboard" percent={75} />
                        </span>
                      </div>
                    </Col>
                    <Col
                      span={8}
                      style={{
                        height: 130,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <span
                          style={{
                            paddingTop: 8,
                            paddingBottom: 8
                          }}
                        >
                          车位占用数量
                        </span>
                        <span>
                          <Progress type="dashboard" percent={75} />
                        </span>
                      </div>
                    </Col>
                    <Col span={8}>
                      <ReactEcharts
                        style={{
                          height: 160
                        }}
                        theme="light"
                        option={pieOption}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Row
                      type="flex"
                      justify="space-around"
                      style={{ marginBottom: 16 }}
                    >
                      <Col
                        span={10}
                        style={{
                          height: 56,
                          display: 'flex',
                          alignItems: 'center',
                          background: '#a1a1a1'
                        }}
                      >
                        <div
                          style={{
                            paddingLeft: 24,
                            paddingRight: 24,
                            backgroundColor: '#010',
                            paddingTop: 16,
                            paddingBottom: 16
                          }}
                        >
                          <Icon type="car" />
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                          }}
                        >
                          <span>小车数</span>
                          <span>10</span>
                        </div>
                      </Col>
                      <Col
                        span={10}
                        style={{
                          height: 56,
                          display: 'flex',
                          alignItems: 'center',
                          background: '#a1a1a1'
                        }}
                      >
                        <div
                          style={{
                            paddingLeft: 24,
                            paddingRight: 24,
                            backgroundColor: '#010',
                            paddingTop: 16,
                            paddingBottom: 16
                          }}
                        >
                          <Icon type="car" />
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                          }}
                        >
                          <span>小车数</span>
                          <span>10</span>
                        </div>
                      </Col>
                    </Row>
                    <Row
                      type="flex"
                      justify="space-around"
                      style={{ marginBottom: 16 }}
                    >
                      <Col
                        span={10}
                        style={{
                          height: 56,
                          display: 'flex',
                          alignItems: 'center',
                          background: '#a1a1a1'
                        }}
                      >
                        <div
                          style={{
                            paddingLeft: 24,
                            paddingRight: 24,
                            backgroundColor: '#010',
                            paddingTop: 16,
                            paddingBottom: 16
                          }}
                        >
                          <Icon type="car" />
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                          }}
                        >
                          <span>小车数</span>
                          <span>10</span>
                        </div>
                      </Col>
                      <Col
                        span={10}
                        style={{
                          height: 56,
                          display: 'flex',
                          alignItems: 'center',
                          background: '#a1a1a1'
                        }}
                      >
                        <div
                          style={{
                            paddingLeft: 24,
                            paddingRight: 24,
                            backgroundColor: '#010',
                            paddingTop: 16,
                            paddingBottom: 16
                          }}
                        >
                          <Icon type="car" />
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                          }}
                        >
                          <span>小车数</span>
                          <span>10</span>
                        </div>
                      </Col>
                    </Row>
                  </Row>
                  <Row
                    style={{
                      paddingLeft: 28,
                      paddingRight: 28
                    }}
                  >
                    <Row>
                      <Col
                        span={6}
                        style={{ textAlign: 'center', border: '1px solid' }}
                      >
                        小车车位
                      </Col>
                      <Col
                        span={6}
                        style={{ textAlign: 'center', border: '1px solid' }}
                      >
                        小车车位
                      </Col>
                      <Col
                        span={6}
                        style={{ textAlign: 'center', border: '1px solid' }}
                      >
                        小车车位
                      </Col>
                      <Col
                        span={6}
                        style={{ textAlign: 'center', border: '1px solid' }}
                      >
                        小车车位
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        span={6}
                        style={{
                          height: 56,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          border: '1px solid'
                        }}
                      >
                        小车车位
                      </Col>

                      <Col
                        span={6}
                        style={{
                          height: 56,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          border: '1px solid'
                        }}
                      >
                        小车车位
                      </Col>
                      <Col
                        span={6}
                        style={{
                          height: 56,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          border: '1px solid'
                        }}
                      >
                        小车车位
                      </Col>
                      <Col
                        span={6}
                        style={{
                          height: 56,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          border: '1px solid'
                        }}
                      >
                        小车车位
                      </Col>
                    </Row>
                  </Row>
                </Col>
                <Col span={5}>服务区平面图</Col>
                <Col span={6} style={{ padding: 12 }}>
                  <Drawer
                    title="Multi-level drawer"
                    width={520}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                  >
                    {/*
                                        you should set style
                                        this place set firstDraw
                                        */}
                    <div>{this.firstdraw()}</div>
                    <Button
                      type="primary"
                      onClick={() => this.showChildrenDrawer(role, '00')}
                    >
                      编辑
                    </Button>
                    <Drawer
                      title="Two-level Drawer"
                      width={320}
                      closable={false}
                      onClose={this.onChildrenDrawerClose}
                      visible={this.state.childrenDrawer}
                    >
                      {/*
                                            you should set style
                                            */}
                      components
                      <div
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          width: '100%',
                          borderTop: '1px solid #e8e8e8',
                          padding: '10px 16px',
                          textAlign: 'right',
                          left: 0,
                          background: '#fff',
                          borderRadius: '0 0 4px 4px'
                        }}
                      >
                        <Button
                          style={{
                            marginRight: 8
                          }}
                          onClick={this.onCloseChild}
                        >
                          Cancel
                        </Button>
                        <Button onClick={this.onCloseChild} type="primary">
                          Submit
                        </Button>
                      </div>
                    </Drawer>
                  </Drawer>
                  <Row>
                    <a onClick={() => this.showDrawer()}>Hover me</a>
                    <span style={{ paddingLeft: 8, paddingRight: 8 }}>|</span>
                    <a onClick={() => this.showDrawer()}>Hover me</a>
                    <span style={{ paddingLeft: 8, paddingRight: 8 }}>|</span>
                    <a onClick={() => this.showDrawer()}>Hover me</a>
                    <span style={{ paddingLeft: 8, paddingRight: 8 }}>|</span>
                    <a onClick={() => this.showDrawer()}>Hover me</a>
                    <span style={{ paddingLeft: 8, paddingRight: 8 }}>|</span>
                    <Dropdown overlay={menu}>
                      <a>
                        <Icon type="menu" />
                      </a>
                    </Dropdown>
                  </Row>
                  <Row
                    style={{
                      marginTop: 16,
                      marginBottom: 16,
                      textAlign: 'center',
                      backgroundColor: '#0000ff',
                      borderTop: '2px solid #00ff00',
                      color: '#ffffff',
                      fontSize: 18,
                      fontWeight: 'bold'
                    }}
                  >
                    this is a message title
                  </Row>
                  <div style={{ textAlign: 'center' }}>
                    <tr style={{ width: '100%', display: 'block' }}>
                      <td style={{ width: '30%', display: 'inline-block' }}>
                        姓名
                      </td>
                      <td style={{ width: '30%', display: 'inline-block' }}>
                        岗位
                      </td>
                      <td style={{ width: '40%', display: 'inline-block' }}>
                        联系电话
                      </td>
                    </tr>
                    <Slider
                      {...settings}
                      autoplay={true}
                      autoplaySpeed
                      arrows={false}
                      dots={false}
                    >
                      <div>
                        <tr style={{ width: '100%', display: 'block' }}>
                          <td style={{ width: '30%', display: 'inline-block' }}>
                            1
                          </td>
                          <td style={{ width: '30%', display: 'inline-block' }}>
                            2
                          </td>
                          <td style={{ width: '40%', display: 'inline-block' }}>
                            3
                          </td>
                        </tr>
                      </div>
                      <div>
                        <tr style={{ width: '100%', display: 'block' }}>
                          <td style={{ width: '30%', display: 'inline-block' }}>
                            1
                          </td>
                          <td style={{ width: '30%', display: 'inline-block' }}>
                            2
                          </td>
                          <td style={{ width: '40%', display: 'inline-block' }}>
                            3
                          </td>
                        </tr>
                      </div>
                      <div>
                        <tr style={{ width: '100%', display: 'block' }}>
                          <td style={{ width: '30%', display: 'inline-block' }}>
                            1
                          </td>
                          <td style={{ width: '30%', display: 'inline-block' }}>
                            2
                          </td>
                          <td style={{ width: '40%', display: 'inline-block' }}>
                            3
                          </td>
                        </tr>
                      </div>
                      <div>
                        <tr style={{ width: '100%', display: 'block' }}>
                          <td style={{ width: '30%', display: 'inline-block' }}>
                            1
                          </td>
                          <td style={{ width: '30%', display: 'inline-block' }}>
                            2
                          </td>
                          <td style={{ width: '40%', display: 'inline-block' }}>
                            3
                          </td>
                        </tr>
                      </div>
                      <div>
                        <tr style={{ width: '100%', display: 'block' }}>
                          <td style={{ width: '30%', display: 'inline-block' }}>
                            1
                          </td>
                          <td style={{ width: '30%', display: 'inline-block' }}>
                            2
                          </td>
                          <td style={{ width: '40%', display: 'inline-block' }}>
                            3
                          </td>
                        </tr>
                      </div>
                      <div>
                        <tr style={{ width: '100%', display: 'block' }}>
                          <td style={{ width: '30%', display: 'inline-block' }}>
                            1
                          </td>
                          <td style={{ width: '30%', display: 'inline-block' }}>
                            2
                          </td>
                          <td style={{ width: '40%', display: 'inline-block' }}>
                            3
                          </td>
                        </tr>
                      </div>
                    </Slider>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={7}>
                  <Row
                    style={{
                      marginTop: 8,
                      marginBottom: 8,
                      marginLeft: 16,
                      marginRight: 16,
                      textAlign: 'center',
                      backgroundColor: '#0000ff',
                      borderTop: '2px solid #00ff00',
                      color: '#ffffff',
                      fontSize: 18,
                      fontWeight: 'bold'
                    }}
                  >
                    this is a message title
                  </Row>
                  <div style={{ textAlign: 'center' }}>
                    <tr style={{ width: '100%', display: 'block' }}>
                      <td style={{ width: '25%', display: 'inline-block' }}>
                        1
                      </td>
                      <td style={{ width: '25%', display: 'inline-block' }}>
                        2
                      </td>
                      <td style={{ width: '25%', display: 'inline-block' }}>
                        3
                      </td>
                      <td style={{ width: '25%', display: 'inline-block' }}>
                        4
                      </td>
                    </tr>
                    <Slider
                      {...settings}
                      autoplay={true}
                      autoplaySpeed
                      dots={false}
                    >
                      <div>
                        <tr style={{ width: '100%', display: 'block' }}>
                          <td style={{ width: '25%', display: 'inline-block' }}>
                            1
                          </td>
                          <td style={{ width: '25%', display: 'inline-block' }}>
                            2
                          </td>
                          <td style={{ width: '25%', display: 'inline-block' }}>
                            3
                          </td>
                          <td style={{ width: '25%', display: 'inline-block' }}>
                            4
                          </td>
                        </tr>
                      </div>
                      <div>
                        <tr style={{ width: '100%', display: 'block' }}>
                          <td style={{ width: '25%', display: 'inline-block' }}>
                            1
                          </td>
                          <td style={{ width: '25%', display: 'inline-block' }}>
                            2
                          </td>
                          <td style={{ width: '25%', display: 'inline-block' }}>
                            3
                          </td>
                          <td style={{ width: '25%', display: 'inline-block' }}>
                            4
                          </td>
                        </tr>
                      </div>
                      <div>
                        <tr style={{ width: '100%', display: 'block' }}>
                          <td style={{ width: '25%', display: 'inline-block' }}>
                            1
                          </td>
                          <td style={{ width: '25%', display: 'inline-block' }}>
                            2
                          </td>
                          <td style={{ width: '25%', display: 'inline-block' }}>
                            3
                          </td>
                          <td style={{ width: '25%', display: 'inline-block' }}>
                            4
                          </td>
                        </tr>
                      </div>
                      <div>
                        <tr style={{ width: '100%', display: 'block' }}>
                          <td style={{ width: '25%', display: 'inline-block' }}>
                            1
                          </td>
                          <td style={{ width: '25%', display: 'inline-block' }}>
                            2
                          </td>
                          <td style={{ width: '25%', display: 'inline-block' }}>
                            3
                          </td>
                          <td style={{ width: '25%', display: 'inline-block' }}>
                            4
                          </td>
                        </tr>
                      </div>
                      <div>
                        <tr style={{ width: '100%', display: 'block' }}>
                          <td style={{ width: '25%', display: 'inline-block' }}>
                            1
                          </td>
                          <td style={{ width: '25%', display: 'inline-block' }}>
                            2
                          </td>
                          <td style={{ width: '25%', display: 'inline-block' }}>
                            3
                          </td>
                          <td style={{ width: '25%', display: 'inline-block' }}>
                            4
                          </td>
                        </tr>
                      </div>
                      <div>
                        <tr style={{ width: '100%', display: 'block' }}>
                          <td style={{ width: '25%', display: 'inline-block' }}>
                            1
                          </td>
                          <td style={{ width: '25%', display: 'inline-block' }}>
                            2
                          </td>
                          <td style={{ width: '25%', display: 'inline-block' }}>
                            3
                          </td>
                          <td style={{ width: '25%', display: 'inline-block' }}>
                            4
                          </td>
                        </tr>
                      </div>
                    </Slider>
                  </div>
                </Col>
                <Col span={3}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: 164,
                      justifyContent: 'space-around'
                    }}
                  >
                    <div>重点车辆警告</div>
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'end',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <span>当前</span>
                        <span>30</span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'end',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginTop: 8,
                          marginBottom: 8
                        }}
                      >
                        <span>待处理</span>
                        <span>10</span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'end',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <span>当前</span>
                        <span>30</span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'end',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <span>待处理</span>
                        <span>10</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={3}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: 168,
                      justifyContent: 'space-around',
                      paddingLeft: 16,
                      paddingRight: 16
                    }}
                  >
                    <div>充电桩使用情况</div>
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'end',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <span>南区</span>
                        <span>
                          <div>
                            <Icon type="car" />
                            <Icon type="car" />
                            <Icon type="car" />
                            <Icon type="car" />
                          </div>
                          <div>
                            <Icon type="car" />
                            <Icon type="car" />
                            <Icon type="car" />
                            <Icon type="car" />
                          </div>
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'end',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <span>北区</span>
                      <span>
                        <div>
                          <Icon type="car" />
                          <Icon type="car" />
                          <Icon type="car" />
                          <Icon type="car" />
                        </div>
                        <div>
                          <Icon type="car" />
                          <Icon type="car" />
                          <Icon type="car" />
                          <Icon type="car" />
                        </div>
                      </span>
                    </div>
                  </div>
                </Col>
                <Col span={7}>WC</Col>
                <Col span={4}>
                  <Collapse bordered={false}>
                    <Panel header="监控列表1" key="1">
                      <div>
                        <Icon type="video-camera" />
                        <a type="primary" onClick={this.showModal}>
                          这是一个摄像头
                        </a>
                        <Modal
                          footer={null}
                          title="Basic Modal"
                          visible={this.state.visible1}
                          onOk={this.handleOk}
                          onCancel={this.handleCancel}
                        >
                          <p>this is maybe a url</p>
                        </Modal>
                      </div>
                      <div>
                        <Icon type="video-camera" />
                        <a type="primary" onClick={this.showModal}>
                          这是一个摄像头
                        </a>
                        <Modal
                          footer={null}
                          title="Basic Modal"
                          visible={this.state.visible1}
                          onOk={this.handleOk}
                          onCancel={this.handleCancel}
                        >
                          <p>this is maybe a url</p>
                        </Modal>
                      </div>
                      <div>
                        <Icon type="video-camera" />
                        <a type="primary" onClick={this.showModal}>
                          这是一个摄像头
                        </a>
                        <Modal
                          footer={null}
                          title="Basic Modal"
                          visible={this.state.visible1}
                          onOk={this.handleOk}
                          onCancel={this.handleCancel}
                        >
                          <p>this is maybe a url</p>
                        </Modal>
                      </div>
                    </Panel>
                    <Panel header="监控列表2" key="2">
                      <div>
                        <Icon type="video-camera" />
                        <a type="primary" onClick={this.showModal}>
                          这是一个摄像头
                        </a>
                        <Modal
                          footer={null}
                          title="Basic Modal"
                          visible={this.state.visible1}
                          onOk={this.handleOk}
                          onCancel={this.handleCancel}
                        >
                          <p>this is maybe a url</p>
                        </Modal>
                      </div>
                      <div>
                        <Icon type="video-camera" />
                        <a type="primary" onClick={this.showModal}>
                          这是一个摄像头
                        </a>
                        <Modal
                          footer={null}
                          title="Basic Modal"
                          visible={this.state.visible1}
                          onOk={this.handleOk}
                          onCancel={this.handleCancel}
                        >
                          <p>this is maybe a url</p>
                        </Modal>
                      </div>
                      <div>
                        <Icon type="video-camera" />
                        <a type="primary" onClick={this.showModal}>
                          这是一个摄像头
                        </a>
                        <Modal
                          footer={null}
                          title="Basic Modal"
                          visible={this.state.visible1}
                          onOk={this.handleOk}
                          onCancel={this.handleCancel}
                        >
                          <p>this is maybe a url</p>
                        </Modal>
                      </div>
                    </Panel>
                  </Collapse>
                  ,
                </Col>
              </Row>
            </Content>
          </Layout>
        );
      default:
        return <CloudBar match={match} />;
    }
  }
}

export default NavigationBar;
