Component({
    mixins: [],
    data: {
        tabList: [],
        currentIndex: 0
    },
    props: {
        activeKey: {// 默认激活tabs的key
            type: String,
            value: '',
            observer: 'changeCurrent'
        },
        placement: {// 标签位置，top/left/right/bottom
            type: String,
            value: 'top',
        },
        // animated: Boolean,// 是否使用奉还切换标签
        // swipeable: Boolean,// 是否支持滑动切换标签
        scrollable: Boolean,// 是否滚动标签栏
        hasLine: {// 设置是否显示标签下的装饰线
            type: Boolean,
            value: true
        },
        animatedForLine: Boolean,// 是否使用动画切换装饰线
        activeColor: {// 设置激活状态标签的文本和图标颜色
            type: String,
            value: '#333333'
        },
        inactiveColor: {// 设置未激活状态标签的文本和颜色
            type: String,
            value: '#bbbbbb'
        },
        equalWidth: {
            type: Boolean,
            value: true
        },
        even: {
            type: Boolean,
            value: true
        },
        width: Number,
        height: Number,
        itemHeight: Number,
        itemWidth: Number,
        onGetFromComponents: (e) => console.log('e:', e)

    },
    didMount() {
        this.initTabs();
        console.log('this.props:', this.props)
    },
    didUpdate() {
    },
    didUnmount() {
        this.initTabs();
    },
    methods: {
        even() {
            this.props.onGetFromComponents(this.data);
        },
        /***
         * 初始化Tabs
         * @param val
         */
        initTabs(val = this.data.activeKey) {
            // 获取segment-items
            let items = [];
            if (items.length > 0) {
                if (items.length === this.data.tabList.length) return;
                let activeKey = val,
                    currentIndex = this.data.currentIndex;
                const tab = items.map((item, index) => {
                        activeKey = !val && index == 0 ? item.data.key : activeKey;
                        currentIndex = item.data.key === activeKey ? index : currentIndex;
                        return {
                            ...item.data
                        }
                    }
                );
                this.setData({
                    tabList: tab,
                    activeKey,
                    currentIndex
                }, () => {
                    if (this.data.scrollable) {
                        this.queryMultipleNodes();
                    }
                });

            }
        },
        handleChange(e) {
            const activeKey = e.currentTarget.dataset.key;
            const currentIndex = e.currentTarget.dataset.index;
            this._setChangeData({
                activeKey,
                currentIndex
            });
        },

        /***
         *
         * @param activeKey 当前激活选项卡的key
         * @param currentIndex 当前激活选项卡的索引
         * @private
         */
        _setChangeData({
                           activeKey,
                           currentIndex
                       }) {
            this.setData({
                activeKey,
                currentIndex
            })
        }


    }
});
