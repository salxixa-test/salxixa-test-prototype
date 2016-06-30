import React from "react";
import Header from "./common/Header";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {signOut} from "../actions/authActions";
import {Row, Col} from "react-flexbox-grid";
import {blue700} from "material-ui/styles/colors"

class Layout extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { auth, actions, user } = this.props;
        const headerStyle = {
            color: blue700,
            margin: "30px 0",
            textAlign: "center"
        };
        return (
            <Row around="xs">
                <Col xs={auth.isLogged ? 12 : 4}>
                    {!auth.isLogged ? <h1 style={headerStyle}>Salxixa Test</h1> : null}
                    {auth.isLogged ? <Header signOut={actions.signOut} auth={auth} user={user} /> : null}
                    {this.props.children}
                </Col>
            </Row>
        );
    }
}

Layout.propTypes = {
    children: React.PropTypes.object,
    actions: React.PropTypes.object.isRequired,
    auth: React.PropTypes.object.isRequired,
    user: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        auth: state.auth,
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ signOut }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
