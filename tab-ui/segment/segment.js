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
        onDataChange: (e) => console.log('onDataChange:', e),
        onSegmentData: (e) => console.log('onSegmentData', e),
    },
    didMount() {
        this.initTabs();
        this._setChangeData();
    },
    didUpdate() {
        this.initTabs();
        this._setChangeData();
    },
    didUnmount() {
        this.initTabs();
    },
    methods: {
        /***
         * 初始化Tabs
         * @param val
         */
        initTabs(val = this.data.activeKey) {
            // 获取segment-items
            // let items = [
            //     {
            //         id: 0,
            //         key: 0,
            //         name: '一'
            //     },
            //     {
            //         id: 1,
            //         key: 1,
            //         name: '二'
            //     }
            // ];// items是segment-items数组，这边每个item是一个组件
            // if (items.length > 0) {
            //     if (items.length === this.data.tabList.length) return;
            //     let activeKey = val,
            //         currentIndex = this.data.currentIndex;
            //     // 拼装新数组tab
            //     const tab = items.map((item, index) => {
            //             activeKey = !val && index == 0 ? item.data.key : activeKey;
            //             currentIndex = item.data.key === activeKey ? index : currentIndex;
            //             return {
            //                 ...item.data
            //             }
            //         }
            //     );
            //     this.setData({
            //         tabList: tab,
            //         activeKey,
            //         currentIndex
            //     }, () => {
            //         if (this.data.scrollable) {
            //             this.queryMultipleNodes();
            //         }
            //     });
            //
            // }
        },

        /***
         * 处理变化
         * @param e
         */
        handleChange(e) {
            const activeKey = e.currentTarget.dataset.key;
            const currentIndex = e.currentTarget.dataset.index;
            this._setLocalData(activeKey, currentIndex);
            this._setChangeData();
        },

        /**
         * 刷新局部数据
         * @param activeKey
         * @param currentIndex
         * @private
         */
        _setLocalData(activeKey, currentIndex) {
            // local data
            this.setData({
                activeKey,
                currentIndex
            });
        },
        /***
         * 子组件传值给父组件
         * @param activeKey 当前激活选项卡的key
         * @param currentIndex 当前激活选项卡的索引
         * @private
         */
        _setChangeData() {
            const activeKey = !this.data.activeKey ? '' : this.data.activeKey;
            const currentIndex = !this.data.currentIndex ? 0 : this.data.currentIndex;
            const data = this.data;
            const props = this.props;
            // sub 2 parent
            this.props.onDataChange({
                activeKey,
                currentIndex,
                data,
                props
            });
            this.props.onSegmentData({
                data,
                props
            });
        },
    },
});
