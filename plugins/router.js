// plugins/router.js
import { pageMapping } from "~/constant/page-json/index.js";

const pageList = Object.keys(pageMapping);
pageList.push("/error");
pageList.push("/demo-page");


export default defineNuxtPlugin(nuxtApp => {
    const router = useRouter();
    router.beforeEach(async (to, from, next) => {
        const routePath = to.fullPath.split("?")[0];
        if (!pageList.includes(routePath)) {
            return next({ path: "/error"})
        }
        next();
    });
});
