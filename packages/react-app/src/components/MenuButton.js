import React, { Component } from 'react'
import { Button, Menu } from 'antd'
import { ApiFilled, AppleOutlined, AndroidOutlined, MessageTwoToned, MenuOutlined, CodeOutlined, HddOutlined, CalculatorOutlined,
  AreaChartOutlined, DotChartOutlined, PieChartFilled, BarcodeOutlined, HourglassOutlined, PictureOutlined, SolutionOutlined, SelectOutlined,
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  CompassOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

//"💭" : "⛓"

const { SubMenu } = Menu;

class MenuButton extends React.Component {

  state = {
      collapsed: true,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
	  return (
		<div className="menu-posture" style={{ width: 256 }}>
	        <Button type="secondary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
	          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
	        </Button>
	        <Menu
	          defaultSelectedKeys={['1']}
	          defaultOpenKeys={[]}
	          theme="light"
	          inlineCollapsed={this.state.collapsed}
	        >
	          <Menu.Item key="1" icon={<CompassOutlined />} title="Atlas">
	            <CompassOutlined /> <span> ATLAS </span>
	          </Menu.Item>
	          <Menu.Item key="2" icon={<BarcodeOutlined />} title="Notes">
	            <SelectOutlined /> <span> NOTES </span>
	          </Menu.Item>
	          <SubMenu key="sub1" icon={<PieChartOutlined />} title={<PieChartOutlined />}>
	            <Menu.Item key="3">Bitcoin</Menu.Item>
	            <Menu.Item key="4">Ether</Menu.Item>
	            <SubMenu key="sub2" title="Filecoin">
	              <Menu.Item key="5">IPFS</Menu.Item>
	              <Menu.Item key="6">P2P</Menu.Item>
	            </SubMenu>
	          </SubMenu>	          
	          <SubMenu key="sub3" icon={<MailOutlined />} title={<MailOutlined />}>
	            <Menu.Item key="7">TimeSwap</Menu.Item>
	            <Menu.Item key="8">ZeFi Chat</Menu.Item>
	          </SubMenu>	
	          <SubMenu key="sub4" icon={<AreaChartOutlined/>} title={<AreaChartOutlined/>}>
	            <Menu.Item key="9">Assets</Menu.Item>
	            <Menu.Item key="10">Yield (%)</Menu.Item>
	          </SubMenu>	  	                              	  
	          <Menu.Item key="11" icon={<DotChartOutlined />} title="Pool">
	            <DotChartOutlined /> <span> POOL </span>
	          </Menu.Item>	
	          <Menu.Item key="12" icon={<ContainerOutlined />} title="Mine">
	            <ContainerOutlined /> <span> UTXO </span>
	          </Menu.Item>		                            	      	                   
	        </Menu>
	    </div>
	  );
	}
}

export default MenuButton



