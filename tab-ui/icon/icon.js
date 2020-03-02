Component({
    mixins: [],
    data: {
        default: {
            size: 40,
            color: '#455268'
        }
    },
    props: {
        name: String,
        color: String,
        size: String
    },
    didMount() {
      if (!this.data.name) {
      console.error('请传入Icon组件的name属性');
      }
    },
    didUpdate() {
    },
    didUnmount() {
    },
    methods: {},
});
