export default {
  navTheme: "dark", // theme for nav menu
  primaryColor: "#1890ff", // '#F5222D', // primary color of ant design
  layout: "sidemenu", // nav menu position: `sidemenu` or `topmenu`
  contentWidth: "Fluid", // layout of content: `Fluid` or `Fixed`, only works when layout is topmenu
  fixedHeader: false, // sticky header
  fixSiderbar: false, // sticky siderbar
  colorWeak: false,
  menu: {
    locale: true,
  },
  title: "Robin",
  pwa: false,
  iconfontUrl: "",
  production: process.env.NODE_ENV === "production" && process.env.VUE_APP_PREVIEW !== "true",
};
