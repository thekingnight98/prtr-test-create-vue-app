import * as types from "./mutation_type";

const mutations ={
    [types.SET_LOGIN_NAME](state, data) {
        state.loginName = data;
    },
    [types.SET_DATA_STOCK](state, data) {
        state.stockData = data;
    },
    [types.SET_ADD_MOCK](state, data) {
        state.checkAddMock = data;
    },
}













export default mutations;