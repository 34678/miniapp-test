import Taro, { Component } from '@tarojs/taro'
import { View, Button ,ScrollView,Swiper, SwiperItem ,Icon,Progress,RichText,Checkbox,Text,Label,Form,Switch,RadioGroup, Radio,Picker, PickerView, PickerViewColumn,Slider,Video,Map ,Canvas} from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  constructor(){
    const date = new Date()
    const years = []
    const months = []
    const days = []
    for (let i = 1990; i <= date.getFullYear(); i++) {
      years.push(i)
    }
    for (let i = 1; i <= 12; i++) {
      months.push(i)
    }
    for (let i = 1; i <= 31; i++) {
      days.push(i)
    }
    this.config = {
      navigationBarTitleText: '首页'
    }
    this.state={
      list: [
        {
          value: '美国',
          text: '美国',
          checked: false
        },
        {
          value: '中国',
          text: '中国',
          checked: true
        },
        {
          value: '巴西',
          text: '巴西',
          checked: false
        },
        {
          value: '日本',
          text: '日本',
          checked: false
        },
        {
          value: '英国',
          text: '英国',
          checked: false
        },
        {
          value: '法国',
          text: '法国',
          checked: false
        }
      ],
      years: years,
      year: date.getFullYear(),
      months: months,
      month: 2,
      days: days,
      day: 2,
      value: [9999, 1, 1],
      selector: ['美国', '中国', '巴西', '日本'],
      selectorChecked: '美国',
      timeSel: '12:01',
      dateSel: '2018-04-22',
      strings: '<div style="text-align:center;"><img src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png"/></div>',
      btn: [
        {
          text: '页面主操作 Normal',
          size: 'default',
          type: 'primary'
        },
        {
          text: '页面主操作 Loading',
          size: 'default',
          type: 'primary',
          loading: true,
        },
        {
          text: '页面主操作 Disabled',
          size: 'default',
          type: 'primary',
          disabled: true,
        },
        {
          text: '页面次要操作 Normal',
          size: 'default',
          type: 'default'
        },
        {
          text: '页面次要操作 Disabled',
          size: 'default',
          type: 'default',
          disabled: true,
        },
        {
          text: '警告类操作 Normal',
          size: 'default',
          type: 'warn'
        },
        {
          text: '警告类操作 Disabled',
          size: 'default',
          type: 'warn',
          disabled: true,
        }
      ],
      list: [
        {
          value: '美国',
          text: '美国',
          checked: false
        },
        {
          value: '中国',
          text: '中国',
          checked: true
        },
        {
          value: '巴西',
          text: '巴西',
          checked: false
        },
        {
          value: '日本',
          text: '日本',
          checked: false
        },
        {
          value: '英国',
          text: '英国',
          checked: false
        },
        {
          value: '法国',
          text: '法国',
          checked: false
        }
      ],

    }
  }
  componentWillMount () {
    setTimeout(() => {
      this.percent = 60;
    }, 300);
   }
   onChange = e => {
    const val = e.detail.value
    this.setState({
      year: this.state.years[val[0]],
      month: this.state.months[val[1]],
      day: this.state.days[val[2]],
      value: val
    })
  }
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  onScrollToUpper(e){
    console.log(e.detail)
  }

  onScroll(e){
    console.log(e.detail)
  }
  formSubmit = e => {
    console.log(e)
  }

  formReset = e => {
    console.log(e)
  }
  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }

  onTimeChange = e => {
    this.setState({
      timeSel: e.detail.value
    })
  }
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }
  takePhoto() {
    // const ctx = wx.createCameraContext()

    // ctx.takePhoto({
    // quality: 'high',
    // success: (res) => {
    //   debugger;
    //       this.src= res.tempImagePath

    // }
    // })
  }
  error(e) {
    console.log(e.detail)
  }
  onTap (e) {
    console.log(e);
  }
  render () {
    const percent = 20
    const scrollStyle = {
      height: '150px'
    }
    const scrollTop = 0
    const Threshold = 20
    const vStyleA = {
      height: '150px',
      'background-color': 'rgb(26, 173, 25)'
    }
    const vStyleB = {
       height: '150px',
      'background-color': 'rgb(39,130,215)'
    }
    const vStyleC = {
      height: '150px',
      'background-color': 'rgb(241,241,241)',
      color: '#333'
    }
    return (
      <View>
         <Canvas style='width: 300px; height: 200px;' canvasId='canvas'  style='background-color:red'/>
        <Map onClick={this.onTap} />
        <View className='components-page'>
          <Video
            src='http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
            controls
            autoplay='true'
            poster='http://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
            initialTime='0'
            id='video'
            loop={false}
            muted={false}
          />
      </View>
        <camera device-position='back' flash='off' binderror={this.error} style='width: 100%; height: 300px;'></camera>
        <Button type='primary' onClick={this.takePhoto}>拍照</Button>
         <View className='components-page'>
        <Text>输入区域高度自适应，不会出现滚动条</Text>
        <Textarea style='background:#fff;width:100%;min-height:80px;padding:0 30rpx;' autoHeight />
        <Text>这是一个可以自动聚焦的 textarea</Text>
        <Textarea style='background:#fff;width:100%;height:80px;padding:0 30rpx;' autoFocus />
      </View>
             <View className='components-page'>
        <Text>默认样式</Text>
        <Switch checked color='#FFCC33' style='transform:scale(0.7)' />
        <Switch />
        <Text>推荐展示样式</Text>
        <Switch checked />
        <Switch />
      </View>
      <View className='components-page'>
        <Text>设置 step</Text>
        <Slider step={1} value={50} />
        <Text>显示当前 value</Text>
        <Slider step={1} value={50} showValue />
        <Text>设置最小/最大值</Text>
        <Slider step={1} value={100} showValue min={50} max={200} />
      </View>
      <View className='container'>
        <Head title='Radio' />
        <View className='page-body'>
          <View className='page-section'>
            <Text>默认样式</Text>
            <Radio value='选中' checked>选中</Radio>
            <Radio style='margin-left: 20rpx' value='未选中'>未选中</Radio>
          </View>
          <View className='page-section'>
            <Text>推荐展示样式</Text>
            <View className='radio-list'>
              <RadioGroup>
                {this.state.list.map((item, i) => {
                  return (
                    <Label className='radio-list__label' for={i} key={i}>
                      <Radio className='radio-list__radio' value={item.value} checked={item.checked}>{item.text}</Radio>
                    </Label>
                  )
                })}
              </RadioGroup>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View>{this.state.year}年{this.state.month}月{this.state.day}日</View>
        <PickerView indicatorStyle='height: 50px;' style='width: 100%; height: 300px;' value={this.state.value} onChange={this.onChange}>
          <PickerViewColumn>
            {this.state.years.map(item => {
              return (
                <View>{item}年</View>
              );
            })}
          </PickerViewColumn>
          <PickerViewColumn>
            {this.state.months.map(item => {
              return (
                <View>{item}月</View>
              )
            })}
          </PickerViewColumn>
          <PickerViewColumn>
            {this.state.days.map(item => {
              return (
                <View>{item}日</View>
              )
            })}
          </PickerViewColumn>
        </PickerView>
      </View>
        <View className='container'>
          <View className='page-body'>
            <View className='page-section'>
              <Text>地区选择器</Text>
              <View>
                <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
                  <View className='picker'>
                    当前选择：{this.state.selectorChecked}
                  </View>
                </Picker>
              </View>
            </View>
            <View className='page-section'>
              <Text>时间选择器</Text>
              <View>
                <Picker mode='time' onChange={this.onTimeChange}>
                  <View className='picker'>
                    当前选择：{this.state.timeSel}
                  </View>
                </Picker>
              </View>
            </View>
            <View className='page-section'>
              <Text>日期选择器</Text>
              <View>
                <Picker mode='date' onChange={this.onDateChange}>
                  <View className='picker'>
                    当前选择：{this.state.dateSel}
                  </View>
                </Picker>
              </View>
            </View>
          </View>
        </View>
        <RadioGroup>
          <Label className='example-body__label' for='1' key='1'>
            <Radio value='USA'>USA</Radio>
          </Label>
          <Label className='example-body__label' for='2' key='2'>
            <Radio value='CHN' checked>
            CHN
            </Radio>
          </Label>
        </RadioGroup>
        <Form onSubmit={this.formSubmit} onReset={this.formReset} >
          <View className='example-body'>
            <Switch name='switch' className='form-switch'></Switch>
            <Button onClick={this.formSubmit} >提交</Button>
            <Button onClick={this.formReset} form-type='reset'>重置</Button>
          </View>
        </Form>
        <View className='page-section'>
          <Text>默认样式</Text>
          <Checkbox value='选中' checked>选中</Checkbox>
          <Checkbox style='margin-left: 20rpx' value='未选中'>未选中</Checkbox>
        </View>
        <View className='page-section'>
          <Text>推荐展示样式</Text>
          {this.state.list.map((item, i) => {
            return (
              <Label className='checkbox-list__label' for={i} key={i}>
                <Checkbox className='checkbox-list__checkbox' value={item.value} checked={item.checked}  color='#FFCC33' style='transform:scale(0.7)' >{item.text}</Checkbox>
              </Label>
            )
          })}
        </View>
        {this.state.btn.map(item => {
            return (<Button
              size={item.size ? item.size : ''}
              type={item.type ? item.type : ''}
              loading={item.loading ? item.loading : false}
              disabled={item.disabled ? item.disabled : false}
            >
              {item.text}
            </Button>)
        })}
        <Button className='btn-max-w' plain type='primary'>按钮</Button>
        <Button className='btn-max-w' plain type='primary' disabled>不可点击的按钮</Button>
        <Button className='btn-max-w' plain >按钮</Button>
        <Button className='btn-max-w' plain disabled >按钮</Button>
        <Button size='mini' type='primary'>按钮</Button>
        <Button size='mini' >按钮</Button>
        <Button size='mini' type='warn'>按钮</Button>
        <Progress percent={percent} show-info stroke-width='3' color='pink'  active activeColor='black' />
        <icon type='success' size='66'  color='gray' />
        <RichText nodes={this.state.strings} />
        <Progress percent={20} showInfo strokeWidth={2} />
        <Progress percent={40} strokeWidth={2} active />
        <Progress percent={60}  strokeWidth={2} active />
        <Progress percent={80}  strokeWidth={2} active activeColor='blue' />
        <View className='components-page'>
          <Icon size='60' type='success' />
          <Icon size='60' type='info' />
          <Icon size='60' type='warn' color='#ccc' />
          <Icon size='60' type='warn' />
          <Icon size='60' type='waiting' />
          <Icon size='20' type='success_no_circle' />
          <Icon size='20' type='warn' />
          <Icon size='20' type='success' />
          <Icon size='20' type='download' />
          <Icon size='20' type='clear' color='red' />
          <Icon size='20' type='search' />
        </View>
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          vertical
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <View className='demo-text-1'>1</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-2'>2</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-3'>3</View>
          </SwiperItem>
        </Swiper>
        <ScrollView
          className='scrollview'
          scrollY
          scrollWithAnimation
          scrollTop={scrollTop}
          style={scrollStyle}
          lowerThreshold={Threshold}
          upperThreshold={Threshold}
          onScrollToUpper={this.onScrollToUpper}
          onScroll={this.onScroll}
        >
          <View style={vStyleA}>A</View>
          <View style={vStyleB}>B</View>
          <View style={vStyleC}>C</View>
        </ScrollView>
        <cover-view>
            <cover-view>红红火火</cover-view>
            <cover-image style='width:100rpx;height:100rpx' src='//downhdlogo.yy.com/hdlogo/6060/60/60/28/2336286630/u2336286630yo0GQxw.jpg'>
            </cover-image>
        </cover-view>
        <movable-area  style='width:300rpx;height: 300rpx;background-color: blue;'>
        <movable-view out-of-bounds  direction='all'  style='width:100rpx;height: 100rpx;background-color: green;'>kdajsd</movable-view>
        </movable-area>
        <movable-area  style='width:300rpx;height: 300rpx;background-color: blue;'>
        <movable-view  direction='vertical'  style='width:100rpx;height: 100rpx;background-color: green;'>kdajsd</movable-view>
        </movable-area>
        <movable-area  style='width:300rpx;height: 300rpx;background-color: blue;'>
        <movable-view  direction='horizontal'  style='width:100rpx;height: 100rpx;background-color: green;'>kdajsd</movable-view>
        </movable-area>
        <movable-area  style='width:300rpx;height: 300rpx;background-color: blue;'>
        <movable-view  direction='none'  style='width:100rpx;height: 100rpx;background-color: green;'>kdajsd</movable-view>
        </movable-area>
        <movable-area scale-area></movable-area>
      </View>
    )
  }
}
