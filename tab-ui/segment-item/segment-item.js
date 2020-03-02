Component({
    mixins: [],
    data: {},
    props: {
        tab: String,// 选项卡显示文字
        key: String,// 对应active-key，必填
        icon: String,// 设置选项卡图标类型
        iconSize: {// 设置选项卡图标的大小
            type: String,
            value: '20'
        },
        image: Object,// 设置选项卡图片资源
        picPlacement: {// 设置图片、图标的相对于文字的位置
            type: String,
            value: 'top'
        },
        dotBadge: Boolean,// 显示圆点徽标
        badgeCount: {// 徽标的数值
            type: Number,
        },
        badgeMaxCount: {// 徽标数字最大值，超过最大值显示
            type: Number,
            value: 99
        },
        badgeCountType: {
            type: String,
            value: 'overflow'
        },
    },
    didMount() {
    },
    didUpdate() {
        // function (filed) {
        //
        // }
    },
    didUnmount() {
    },
    methods: {
        updateData(filed) {
            let parent;
            if (!parent) return;
            const tabList = parent.data.tabList;
            if (!(tabList && tabList.length > 0)) return;
            const index = tabList.findIndex(tab => tab.key === this.data.key);
            tabList[index] = filed;
            paerent.setData({
                tabList: tabList

            }, () => {
                if (parent.data.scrollable) {
                    parent.queryMultipleNodes();
                }
            })
        }
    }
});
