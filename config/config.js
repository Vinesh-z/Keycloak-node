const adminResource = 'Admin-role';
const adminPermission = adminResource;
// const userResource = 'User-role';
// const userPermission = userResource;

var config = {
    mongoUrl: 'mongodb://localhost:27017/keycloak',
    appPort: 8000,
    appUrl: "http://localhost:",
    adminPermission: adminPermission,
    // userPermission: userPermission,
}

module.exports = config;