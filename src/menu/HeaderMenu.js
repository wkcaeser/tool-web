import React from 'react';
import { Menu } from 'antd';
import { SendOutlined} from '@ant-design/icons';

const { SubMenu } = Menu;

class HeaderMenu extends React.Component {
    state = {
        current: 'mail',
        defaultSelectedKeys: [],
        defaultOpenKeys: [],
        menuList: {}
    };

    constructor(props) {
        super(props);

        // eslint-disable-next-line no-undef
        const menu = toolItems.map((item) =>
            <Menu.Item key={item.key} icon={<SendOutlined />}>
                {item.desc}
            </Menu.Item>
        );

        let defaultMenuKey = props.defaultMenuKey;

        this.state = {
            current: defaultMenuKey,
            menuList: menu
        }
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {
        const { current, menuList } = this.state;
        return (
            <Menu onClick={this.handleClick}
                  selectedKeys={[current]}
                  mode="horizontal">

                {menuList}

            </Menu>
        );
    }
}

export default HeaderMenu;