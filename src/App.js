import React from 'react';
import {Layout} from 'antd';
import './App.css';
import HeaderMenu from "./menu/HeaderMenu";

const {Footer, Sider, Content} = Layout;

// eslint-disable-next-line no-undef
class App extends  React.Component {

    state = {
        routeMenu: ''
    }

    constructor(props) {
        super(props);

        console.log(props)

        // eslint-disable-next-line no-undef
        let routeMenuKey = toolItems[0].key;

        this.setState( {
            routeMenu: routeMenuKey
        })
    }

    componentDidMount() {
        console.log(this.props)
        if (this.props.location !== undefined && this.props.location.menuKey) {
            this.setState({
                routeMenu: this.props.location.menuKey
            })
        }

    }

    render() {
        const { routeMenu } = this.state;

        return <Layout style={{height: '100%'}}>
            <Sider>Sider</Sider>
            <Layout style={{height: '100%' , background: '#CCC'}}>

                    <HeaderMenu defaultMenuKey={routeMenu}/>

                <Content>Content</Content>

                <Footer style={{height: '10%', background: '#FFF'}}>Footer</Footer>
            </Layout>
            <Sider>Sider</Sider>
        </Layout>;
    }
}

export default App;
