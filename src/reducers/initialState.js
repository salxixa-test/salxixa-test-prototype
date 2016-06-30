export default {
    routesPermissions: {
        requireAuth: [
            '/'
        ]
    },
    routing: {},
    user: {
        isAdmin: undefined
    },
    auth: {
        isLogged: false,
        currentUserUID: null,
        initialized: false
    }
};
