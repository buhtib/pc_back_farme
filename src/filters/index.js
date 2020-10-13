import Vue from 'vue'
import dateFormat from './dateFormat'
import noContentFormat from './noContentFormat'

const filters = {
    dateFormat:dateFormat,
    noContentFormat:noContentFormat
};

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});


