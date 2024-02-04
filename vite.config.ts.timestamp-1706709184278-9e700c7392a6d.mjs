// vite.config.ts
import { defineConfig, loadEnv } from "file:///C:/Users/zy/Desktop/project/video/node_modules/.pnpm/vite@4.5.1_@types+node@20.11.3_sass@1.69.7/node_modules/vite/dist/node/index.js";
import { createHtmlPlugin } from "file:///C:/Users/zy/Desktop/project/video/node_modules/.pnpm/vite-plugin-html@3.2.1_vite@4.5.1/node_modules/vite-plugin-html/dist/index.mjs";
import vue from "file:///C:/Users/zy/Desktop/project/video/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@4.5.1_vue@3.4.14/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { createSvgIconsPlugin } from "file:///C:/Users/zy/Desktop/project/video/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@4.5.1/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import { resolve } from "path";
var __vite_injected_original_dirname = "C:\\Users\\zy\\Desktop\\project\\video";
var getTarget = (mode, target) => {
  return loadEnv(mode, process.cwd())[target];
};
var vite_config_default = ({ mode }) => defineConfig({
  base: "/web-video",
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [resolve("./src/icons")],
      // 指定symbolId格式（这里的配置与6.2步骤中的引入svg组件的name配置项写法有关）
      symbolId: "icon-[dir]-[name]"
    }),
    createHtmlPlugin({
      inject: {
        data: {
          //获取标题变量
          title: getTarget(mode, "VITE_APP_TITLE")
        }
      }
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "src")
      // 路径别名
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".scss"]
    // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
  server: {
    // Listening on all local IPs
    host: true,
    port: 82
    // 设置代理
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx6eVxcXFxEZXNrdG9wXFxcXHByb2plY3RcXFxcdmlkZW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHp5XFxcXERlc2t0b3BcXFxccHJvamVjdFxcXFx2aWRlb1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvenkvRGVza3RvcC9wcm9qZWN0L3ZpZGVvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IGNyZWF0ZUh0bWxQbHVnaW4gfSBmcm9tIFwidml0ZS1wbHVnaW4taHRtbFwiO1xuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XG5cbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSBcInZpdGUtcGx1Z2luLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5cbmNvbnN0IGdldFRhcmdldCA9IChtb2RlOiBzdHJpbmcsIHRhcmdldDogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCkpW3RhcmdldF07XG59O1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgKHsgbW9kZSB9KSA9PlxuICBkZWZpbmVDb25maWcoe1xuICAgIGJhc2U6IFwiL3dlYi12aWRlb1wiLFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIHZ1ZSgpLFxuICAgICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xuICAgICAgICBpY29uRGlyczogW3Jlc29sdmUoXCIuL3NyYy9pY29uc1wiKV0sXG4gICAgICAgIC8vIFx1NjMwN1x1NUI5QXN5bWJvbElkXHU2ODNDXHU1RjBGXHVGRjA4XHU4RkQ5XHU5MUNDXHU3Njg0XHU5MTREXHU3RjZFXHU0RTBFNi4yXHU2QjY1XHU5QUE0XHU0RTJEXHU3Njg0XHU1RjE1XHU1MTY1c3ZnXHU3RUM0XHU0RUY2XHU3Njg0bmFtZVx1OTE0RFx1N0Y2RVx1OTg3OVx1NTE5OVx1NkNENVx1NjcwOVx1NTE3M1x1RkYwOVxuICAgICAgICBzeW1ib2xJZDogXCJpY29uLVtkaXJdLVtuYW1lXVwiLFxuICAgICAgfSksXG4gICAgICBjcmVhdGVIdG1sUGx1Z2luKHtcbiAgICAgICAgaW5qZWN0OiB7XG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgLy9cdTgzQjdcdTUzRDZcdTY4MDdcdTk4OThcdTUzRDhcdTkxQ0ZcbiAgICAgICAgICAgIHRpdGxlOiBnZXRUYXJnZXQobW9kZSwgXCJWSVRFX0FQUF9USVRMRVwiKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgXSxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICBcIkBcIjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpLCAvLyBcdThERUZcdTVGODRcdTUyMkJcdTU0MERcbiAgICAgIH0sXG4gICAgICBleHRlbnNpb25zOiBbXCIubWpzXCIsIFwiLmpzXCIsIFwiLnRzXCIsIFwiLmpzeFwiLCBcIi50c3hcIiwgXCIuanNvblwiLCBcIi5zY3NzXCJdLCAvLyBcdTRGN0ZcdTc1MjhcdThERUZcdTVGODRcdTUyMkJcdTU0MERcdTY1RjZcdTYwRjNcdTg5ODFcdTc3MDFcdTc1NjVcdTc2ODRcdTU0MEVcdTdGMDBcdTU0MERcdUZGMENcdTUzRUZcdTRFRTVcdTgxRUFcdTVERjEgXHU1ODlFXHU1MUNGXG4gICAgfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIC8vIExpc3RlbmluZyBvbiBhbGwgbG9jYWwgSVBzXG4gICAgICBob3N0OiB0cnVlLFxuICAgICAgcG9ydDogODIsXG4gICAgICAvLyBcdThCQkVcdTdGNkVcdTRFRTNcdTc0MDZcbiAgICB9LFxuICB9KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVMsU0FBUyxjQUFjLGVBQWU7QUFDdlUsU0FBUyx3QkFBd0I7QUFDakMsT0FBTyxTQUFTO0FBRWhCLFNBQVMsNEJBQTRCO0FBQ3JDLFNBQVMsZUFBZTtBQUx4QixJQUFNLG1DQUFtQztBQU96QyxJQUFNLFlBQVksQ0FBQyxNQUFjLFdBQW1CO0FBQ2xELFNBQU8sUUFBUSxNQUFNLFFBQVEsSUFBSSxDQUFDLEVBQUUsTUFBTTtBQUM1QztBQUdBLElBQU8sc0JBQVEsQ0FBQyxFQUFFLEtBQUssTUFDckIsYUFBYTtBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0oscUJBQXFCO0FBQUEsTUFDbkIsVUFBVSxDQUFDLFFBQVEsYUFBYSxDQUFDO0FBQUE7QUFBQSxNQUVqQyxVQUFVO0FBQUEsSUFDWixDQUFDO0FBQUEsSUFDRCxpQkFBaUI7QUFBQSxNQUNmLFFBQVE7QUFBQSxRQUNOLE1BQU07QUFBQTtBQUFBLFVBRUosT0FBTyxVQUFVLE1BQU0sZ0JBQWdCO0FBQUEsUUFDekM7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQTtBQUFBLElBQy9CO0FBQUEsSUFDQSxZQUFZLENBQUMsUUFBUSxPQUFPLE9BQU8sUUFBUSxRQUFRLFNBQVMsT0FBTztBQUFBO0FBQUEsRUFDckU7QUFBQSxFQUNBLFFBQVE7QUFBQTtBQUFBLElBRU4sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsRUFFUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
