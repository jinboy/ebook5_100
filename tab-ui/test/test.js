Component({
    mixins: [],
    data: {counter: 0},
    props: {
        onCounterPlusOne: (data) => console.log(data),
        extra: 'default extra',
    },
    didMount() {
        const counter = this.data.counter + 1;
        this.setData({counter});
        this.props.onCounterPlusOne(counter);
    },
    didUpdate() {
    },
    didUnmount() {
    },
    methods: {
        plusOne(e) {
            console.log('plusOne:', e);
            const counter = this.data.counter + 1;
            this.setData({counter});
            this.props.onCounterPlusOne(counter);
        },
    },
});
