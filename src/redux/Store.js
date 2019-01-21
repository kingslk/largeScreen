// 生成Store对象，作为Redux注入的基础
import { createStore } from 'redux';
import reducers from './Reducers';

// 创建store对象并暴露出去
const store = createStore(reducers);
export default store;
