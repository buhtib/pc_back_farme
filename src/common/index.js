import utils from "@/utils/util";
import axios from "@/api";
import numeral from "@/utils/numeral";
import { uploadImgUrl } from '@/api/url'

import headerTool from "./header-tool";
import filterContentBar from "./filter-content-bar";
import tip from "./tip";
import fullScreen from "./full-screen";
import loadingImage from "./loading-image";
import zDatePicker from "./z-date-picker";
import zDateRange from "./z-date-range";
import loadingIcon from "./loading-icon";
import uploadImage from './upload-image'
import uploadImageList from './upload-image-list'

const componentsMap = {
    headerTool,
    filterContentBar,
    tip,
    fullScreen,
    loadingImage,
    zDatePicker,
    zDateRange,
    loadingIcon,
    uploadImage,
    uploadImageList,
};

/**
 * 存放公共组件位置
 */

export default {
    install(Vue) {
        Vue.prototype.$utils = utils;
        Vue.prototype.$axios = axios;
        Vue.prototype.$uploadImgUrl = uploadImgUrl;

        Object.keys(numeral).forEach(key => {
            Vue.prototype[`$${key}`] = numeral[key];
        });

        Object.keys(componentsMap).forEach(key => {
            Vue.component(key, componentsMap[key]);
        });
    }
};
