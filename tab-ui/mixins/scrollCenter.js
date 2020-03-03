/**
 * Created by Tabjin 2020-03-02
 * @descrition
 * @author Tabjin
 * @date 2020/3/2 11:40
 */
// eslint-disable-next-line no-undef
export default Behavior({
    methods: {
        getRect(selector, all = false) {
            return new Promise((resolve, reject) => {
                const query = wx.createSelectorQuery().in(this);
                const type = all ? query.selectAll(selector) : query.select(selector);
                type.boundingClientRect((res) => {
                    if (!res) return reject('找不到元素');
                    resolve(res);
                }).exec();
            });
        },
        /***
         *
         * @param res
         * @param currentIndex
         * @param type
         */
        queryScrollNode(res, currentIndex, type = 'width') {
            const currentRect = res[currentIndex];

            this.getRect('.t-tabsscroll').then(_ => {
                const scrollWidth = _[type];

                let transformDistance = res
                    .slice(0, currentIndex)
                    .reduce((prev, curr) => prev + curr[type], 0);

                transformDistance += (currentRect[type] - scrollWidth) / 2;

                if (type === 'width') {
                    this.setData({
                        transformX: transformDistance,
                        transformY: 0
                    });
                } else {
                    this.setData({
                        transformX: 0,
                        transformY: transformDistance
                    });
                }
            });
        },
        /***
         *
         */
        queryMultipleNodes() {
            const {
                placement,
                currentIndex
            } = this.data;
            this.getRect('.t-tabs-item', true)
                .then((res) => {
                    if (['top', 'bottom'].indexOf(placement) !== -1) {
                        this.queryScrollNode(res, currentIndex);
                    } else {
                        this.queryScrollNode(res, currentIndex, 'height');
                    }
                });
        }
    }
});
