import React, {PropTypes} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {createUserWithEmailAndPassword} from "../../actions/authActions";
import {Card, CardActions, CardTitle, CardText, TextField, FlatButton, RaisedButton, Divider} from "material-ui";
import {Row, Col} from "react-flexbox-grid";

export class RegistrationPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            user: {
                name: "",
                email: "",
                password: ""
            },
            saving: false
        };

        this.updateUserState = this.updateUserState.bind(this);
        this.createUser = this.createUser.bind(this);
    }

    updateUserState(event) {
        const field = event.target.name;
        let user = this.state.user;
        user[field] = event.target.value;
        return this.setState({ user: user });
    }

    createUser(event) {
        event.preventDefault();

        this.setState({ saving: true });

        this.props.actions.createUserWithEmailAndPassword(this.state.user);
    }

    render() {
        const style = {
            backgroundColor: false
        };
        return (
            <form>
                <Card>
                    <CardTitle title="Create account" />
                    <CardText>
                        <TextField
                            name="name"
                            hintText="Name"
                            fullWidth={true}
                            onChange={this.updateUserState}
                        />

                        <Divider style={style} />

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
                        <Row between="xs">
                            <Col xs={3}>
                                <FlatButton
                                    label="Back"
                                    containerElement={<Link to="/login" />}
                                    linkButton={true}
                                />
                            </Col>
                            <Col>
                                <RaisedButton
                                    disabled={this.state.saving}
                                    label={this.state.saving ? 'Signing up...' : 'Sign Up'}
                                    primary={true}
                                    onClick={this.createUser}
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
        actions: bindActionCreators({ createUserWithEmailAndPassword }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
