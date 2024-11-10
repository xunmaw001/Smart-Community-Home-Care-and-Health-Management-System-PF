const base = {
    get() {
        return {
            url : "http://localhost:8080/zhihuishequjujiayanglaojiankang/",
            name: "zhihuishequjujiayanglaojiankang",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/zhihuishequjujiayanglaojiankang/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "智慧社区居家养老健康管理系统"
        } 
    }
}
export default base
