import { requestService } from "@/utils/request";

const api = {
  queryPermission: "/openplatform/developer_permission_query",
  applyPermission: "/openplatform/permission_post",
};

export function queryPermission() {
  return requestService({
    url: api.queryPermission,
    method: "post",
  });
}

export function applyPermission(parms) {
  return requestService({
    url: api.applyPermission,
    method: "post",
    data: parms,
  });
}
