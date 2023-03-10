import { requestService } from "@/utils/request";

const api = {
  currentApplication: "/openplatform/postsave_query",
  agreeApplication: "/openplatform/permission_agree",
  refuseApplication: "/openplatform/permission_refuse",
  allApplication: "/openplatform/admin_permission_query",
  deleteApplication: "/openplatform/permission_delete",
};

export function queryCurrentApp(parms) {
  return requestService({
    url: api.currentApplication,
    method: "post",
    data: parms,
  });
}

export function agreeApp(parms) {
  return requestService({
    url: api.agreeApplication,
    method: "post",
    data: parms,
  });
}

export function refuseApp(parms) {
  return requestService({
    url: api.refuseApplication,
    method: "post",
    data: parms,
  });
}

export function queryAllApp(parms) {
  return requestService({
    url: api.allApplication,
    method: "post",
    data: parms,
  });
}

export function delApp(parms) {
  return requestService({
    url: api.deleteApplication,
    method: "post",
    data: parms,
  });
}
