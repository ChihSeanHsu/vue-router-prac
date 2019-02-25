import User from './components/user/User.vue';
import Home from './components/Home.vue';
import UserStart from './components/user/UserStart.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'

import Header from './components/Header.vue'

export const routes = [
    { path: '', name: 'Home',  components: {
        default: Home,
        'top': Header
    } },
    {
        path: '/user',
        components: {
            default: User,
            'bottom': Header
        },
        children: [
            { path: '', component: UserStart},
            { path: ':id', component: UserDetail},
            { path: ':id/edit', component: UserEdit, name: 'userEdit'},
        ]
    },

];