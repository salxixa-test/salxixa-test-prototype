import React from "react";
import {AppBar, IconButton, IconMenu, MenuItem} from "material-ui";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import ActionExitToApp from "material-ui/svg-icons/action/exit-to-app";

const Header = ({ signOut, auth, user }) => {
    return <AppBar
        title="Salxixa Test"
        showMenuIconButton={false}
        iconElementRight={
            <IconMenu
                iconButtonElement={
                    <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
                <MenuItem
                    primaryText="Sign out"
                    leftIcon={<ActionExitToApp />}
                    onClick={signOut}/>
            </IconMenu>
        }
    />
};

Header.propTypes = {
    signOut: React.PropTypes.func.isRequired,
    auth: React.PropTypes.object.isRequired,
    user: React.PropTypes.object.isRequired
};

export default Header;
