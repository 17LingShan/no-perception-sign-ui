import router, { resetRouter } from "@/router";
import storage from "store";
import { toRaw } from "vue";
import { userStore } from "@/store/user";
import { permissionStore } from "@/store/permission";
import { TOKEN } from "@/store/types";

const accessiblePath = ["/user/login", "/user/register"];

router.beforeEach((to, from, next) => {
  const piniaUser = userStore();
  const piniaPermission = permissionStore();

  piniaPermission.nowPage = to.path.replace("/", "");
  if (storage.get(TOKEN)) {
    if (accessiblePath.includes(to.path)) {
      next();
    } else {
      if (!piniaUser.userId || !piniaUser.username || !piniaUser.userType) {
        piniaUser.GetInfo().then(async () => {
          resetRouter();
          await piniaPermission.GenerateRoutes(piniaUser.userType).then(() => {
            toRaw(piniaPermission.addRouters).forEach((item) => {
              router.addRoute(item);
            });
            next({ ...to, replace: true });
          });
        });
      } else {
        next();
      }
    }
  } else {
    if (accessiblePath.includes(to.path)) {
      next();
    } else {
      next({ path: accessiblePath[0] });
    }
  }
});
