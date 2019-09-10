import Register from '../pages/register'
import UserAgreement from '../pages/agreement';
import OneDetail from '../pages/oneDetail';

const route_config = [
    {
        path: "/TokenClass/register",
        component: Register
    },
    {
        path: "/TokenClass/userAgreement",
        component: UserAgreement
    },
    {
        path: "/TokenClass/oneDetail",
        component: OneDetail
    }
];

export default route_config;