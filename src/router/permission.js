import router from "@/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({
   showSpinner: false
});


router.beforeEach(async (to, from, next) => {
   NProgress.start();

   const title = to.meta && to.meta.title;
   if (title) {
      document.title = title;
   }
   next();

     // const hasToken = getToken()

   // if (hasToken) {
   //     if (to.path === '/login') {
   //         // if is logged in, redirect to the home page
   //         next({
   //             path: '/'
   //         })
   //         NProgress.done()
   //     } else {
   //         const hasGetUserInfo = store.getters.name
   //         if (hasGetUserInfo) {
   //             next()
   //         } else {
   //             try {
   //                 // get user info
   //                 await store.dispatch('user/getInfo')

   //                 next()
   //             } catch (error) {
   //                 // remove token and go to login page to re-login
   //                 await store.dispatch('user/resetToken')
   //                 Message.error(error || 'Has Error')
   //                 next(`/login?redirect=${to.path}`)
   //                 NProgress.done()
   //             }
   //         }
   //     }
   // } else {
   //     /* has no token*/

   //     if (whiteList.indexOf(to.path) !== -1) {
   //         // in the free login whitelist, go directly
   //         next()
   //     } else {
   //         // other pages that do not have permission to access are redirected to the login page.
   //         next(`/login?redirect=${to.path}`)
   //         NProgress.done()
   //     }
   // }
});

router.afterEach(() => {
   NProgress.done();
});