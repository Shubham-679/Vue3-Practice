import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";
import Home from "../components/Home.vue";
import Albums from "../components/Albums.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/user/:id/album",
    name: "Albums",
    component: Albums,
    props: true,
  },
];
const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
