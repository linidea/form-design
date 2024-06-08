export default {
    // 该模块的所有 getter、action 和 mutation 都会自动根据模块注册的路径调整命名
    // 启用命名空间可以帮助你避免在大型项目中出现命名冲突,使用mutations时需要 `${moduleName}/${mutationName}`
    namespaced: true,
    state: {
        menu: 'myApp'
    },
    mutations: {
        // 左侧菜单
        setMenu(state, value) {
            state.menu = value;
        }
    },
    actions: {},
    getters: {}
}
