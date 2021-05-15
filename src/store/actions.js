import * as types from "./mutation_type";
const actions = {
    setLoginName({ commit }, data) {
        commit(types.SET_LOGIN_NAME, data);
    },
    setDataStock({ commit }, data) {
        commit(types.SET_DATA_STOCK, data);
    },
    setCheckMock({ commit }, data) {
        commit(types.SET_ADD_MOCK, data);
    },
}










export default actions;