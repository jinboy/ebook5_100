import scrollCenter from "../mixins/scrollCenter";

Component({
    mixins: [scrollCenter],
    data: {
        tabList: [],
        currentIndex: 0,
        transformX: 0,
        transformY: 0,
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
        animated: Boolean,// 是否使用奉还切换标签
        swipeable: Boolean,// 是否支持滑动切换标签
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
        }
    },
    didMount() {
    },
    didUpdate() {
    },
    didUnmount() {
    },
    methods: {},
});
