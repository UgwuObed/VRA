import { createRouter, createWebHistory } from 'vue-router';
import Snaps from './components/SnapsRec.vue';
import MyRecordings from './components/MyRecordings.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Snaps },

        {
            path: '/my-recordings',
            name: 'MyRecordings',
            component: MyRecordings,
          },
    ]
});

export default router;  



