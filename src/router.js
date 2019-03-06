import Vue from 'vue';
import Router from 'vue-router';
import store from './store';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/profile',
      // name: 'profile',
      component: () => import('./views/Profile.vue'),
      children: [
        {
          path: '',
          redirect: 'repositories',
        },
        {
          path: 'repositories',
          component: () => import('./components/repositories/Repositories.vue'),
        },
        // {
        //   path: 'organizations',
        //   component: () => import('./components/organizations/Organizations.vue'),
        // },
        // {
        //   path: 'stars',
        //   component: () => import('./components/starreds/Stargazers.vue'),
        // },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (from.path === '/' && to.path === '/') {
    next();
  }

  const user = localStorage.getItem('@GithubExplorer:user');
  const username = localStorage.getItem('@GithubExplorer:username');

  const storedUser = store.getters.getUser;
  const storedUsername = store.getters.getUsername;

  if (!storedUser && user) {
    store.dispatch('setUser', JSON.parse(user));
  }

  if (!storedUsername && username) {
    store.dispatch('setUsername', username);
  }

  if ((!user || !username) && from.path !== '/' && to.path !== '/') {
    router.push('/');
    next();
  }

  next();
});

export default router;
