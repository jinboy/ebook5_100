Page({
    data: {
        roots: [
            {
                id: 0,
                name: '一'
            }, {
                id: 1,
                name: '二'
            }
        ]
    },
    onLoad(query) {
        // 页面加载
        // console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    },
    onReady() {
        // 页面加载完成
    },
    onShow() {
        // 页面显示
    },

    onDataChange(event) {
        console.log('index page onDataChange data: ', event)
    },

    onSegmentData(data) {
        console.log('index page onSegmentData this:', data);
    },
});
