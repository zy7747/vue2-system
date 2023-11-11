import SvgIcon from "./SvgIcon/index.vue";
import VideoPlayer from "./VideoPlayer/index.vue";
import VideoPage from "./VideoPage/index.vue";
import VideoList from "./VideoList/index.vue";
import VideoBox from "./VideoBox/index.vue";
import VideoViewPage from "./VideoViewPage/index.vue";
import Episode from "./Episode/index.vue";
import Pagination from "./Pagination/index.vue";
import Carousel from "./Carousel/index.vue";
import TermsFilter from "./TermsFilter/index.vue";
import Search from "./Search/index.vue";

function setupComponents(app: any) {
  app.component("SvgIcon", SvgIcon);
  app.component("Carousel", Carousel);
  app.component("VideoPlayer", VideoPlayer);
  app.component("VideoPage", VideoPage);
  app.component("VideoList", VideoList);
  app.component("VideoBox", VideoBox);
  app.component("Episode", Episode);
  app.component("TermsFilter", TermsFilter);
  app.component("Pagination", Pagination);
  app.component("VideoViewPage", VideoViewPage);
  app.component("SearchInput", Search);

  return app;
}

export default setupComponents;
