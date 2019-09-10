import Register from '../pages/register'
import UserAgreement from '../pages/agreement';
import OneDetail from '../pages/oneDetail';

const route_config = [
    {
        path: "/register",
        component: Register
    },
    {
        path: "/userAgreement",
        component: UserAgreement
    },
    {
        path: "/oneDetail",
        component: OneDetail
    }
];

export default route_config;