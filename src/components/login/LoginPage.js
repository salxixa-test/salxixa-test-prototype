import React, {PropTypes} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {signInWithEmailAndPassword} from "../../actions/authActions";
import {Card, CardActions, CardTitle, CardText, TextField, FlatButton, RaisedButton, Divider} from "material-ui";
import {Row, Col} from "react-flexbox-grid";

export class RegistrationPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            user: {
                email: "",
                password: ""
            },
            saving: false
        };

        this.updateUserState = this.updateUserState.bind(this);
        this.login = this.login.bind(this);
    }

    updateUserState(event) {
        const field = event.target.name;
        let user = this.state.user;
        user[field] = event.target.value;
        return this.setState({ user: user });
    }

    login(event) {
        event.preventDefault();

        this.setState({ saving: true });

        this.props.actions.signInWithEmailAndPassword(this.state.user);
    }

    render() {
        const style = {
            backgroundColor: false
        };
        return (
            <form>
                <Card>
                    <CardTitle title="Login" />
                    <CardText>
                        <TextField
                            name="email"
                            hintText="E-mail"
                            fullWidth={true}
                            onChange={this.updateUserState}
                        />

                        <Divider style={style} />

                        <TextField
                            name="password"
                            hintText="Password"
                            type="password"
                            fullWidth={true}
                            onChange={this.updateUserState}
                        />
                    </CardText>
                    <CardActions>
                        <Row end="xs">
                            <Col>
                                <FlatButton
                                    label="Create account"
                                    containerElement={<Link to="/register" />}
                                    linkButton={true}
                                />
                            </Col>
                            <Col xs={3}>
                                <RaisedButton
                                    disabled={this.state.saving}
                                    label={this.state.saving ? "Logining in..." : "Login"}
                                    primary={true}
                                    onClick={this.login}
                                />
                            </Col>
                        </Row>
                    </CardActions>
                </Card>
            </form>
        );
    }
}

RegistrationPage.propTypes = {
    actions: PropTypes.object.isRequired
};

RegistrationPage.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ signInWithEmailAndPassword }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
