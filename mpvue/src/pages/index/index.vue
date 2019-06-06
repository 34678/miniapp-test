<template>
<div >
	<view>
    <canvas style="width: 300px; height: 200px;" canvas-id="firstCanvas"></canvas>
		<page-head :title="title"></page-head>
		<view class="uni-common-mt">
			<view>
				<map :latitude="latitude" :longitude="longitude" :markers="covers">
				</map>
			</view>
		</view>
	</view>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view>
				<video id="myVideo" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4"
				 @error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls poster="https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/poster.png"></video>
			</view>
			<!-- #ifndef MP-ALIPAY -->
			<view class="uni-list uni-common-mt">
				<view class="uni-list-cell">
					<view>
						<view class="uni-label">弹幕内容</view>
					</view>
					<view class="uni-list-cell-db">
						<input v-model="danmuValue" class="uni-input" type="text" placeholder="在此处输入弹幕内容" />
					</view>
				</view>
			</view>
			<view class="uni-btn-v">
				<button @click="sendDanmu" class="page-body-button">发送弹幕</button>
			</view>
			<!-- #endif -->
		</view>
	</view>
	<view>
		<page-head :title="title"></page-head>
    <camera device-position="back" flash="off" binderror="error" style="width: 100%; height: 300px;"></camera>
    <button type="primary" @click="takePhoto">拍照</button>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-btn-v">
				<navigator url="navigate/navigate?title=navigate" hover-class="navigator-hover">
					<button type="default">跳转到新页面</button>
				</navigator>
				<navigator url="redirect/redirect?title=redirect" open-type="redirect" hover-class="other-navigator-hover">
					<button type="default">在当前页打开</button>
				</navigator>
				<navigator url="/pages/tabBar/extUI/extUI" open-type="switchTab" hover-class="other-navigator-hover">
					<button type="default">跳转tab页面</button>
				</navigator>
			</view>
		</view>
	</view>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-title uni-common-pl">输入区域高度自适应，不会出现滚动条</view>
		<view class="uni-textarea">
			<textarea @blur="bindTextAreaBlur" auto-height />
			</view>
			<view class="uni-title uni-common-pl">占位符字体是红色的textarea</view>
			<view class="uni-textarea">
				<textarea placeholder-style="color:#F76260" placeholder="占位符字体是红色的"/>
			</view>
		</view>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">默认样式</view>
			<view>
				<switch checked @change="switch1Change" />
				<switch @change="switch2Change" />
			</view>
			<view class="uni-title">不同颜色和尺寸的switch</view>
			<view>
				<switch checked color="#FFCC33" style="transform:scale(0.7)"/>
				<switch color="#FFCC33" style="transform:scale(0.7)"/>
			</view>

			<view class="uni-title">推荐展示样式</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">开启中</view>
				<switch checked />
			</view>
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">关闭</view>
				<switch />
			</view>
		</view>
	</view>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">设置step</view>
			<view>
				<slider value="60" @change="sliderChange" step="5" />
			</view>

			<view class="uni-title">显示当前value</view>
			<view>
				<slider value="50" @change="sliderChange" show-value />
			</view>

			<view class="uni-title">设置最小/最大值</view>
			<view>
				<slider value="100" @change="sliderChange" min="50" max="200" show-value />
			</view>

			<view class="uni-title">不同颜色和大小的滑块</view>
			<view>
				<slider value="50" @change="sliderChange" activeColor="#FFCC33" backgroundColor="#000000" block-color="#8A6DE9" block-size="20" />
			</view>
		</view>
	</view>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view class="uni-title">默认样式</view>
			<view>
				<label class="radio" style="margin-right: 30upx;">
					<radio value="r1" checked="true" />选中
				</label>
				<label class="radio">
					<radio value="r2" />未选中
				</label>
			</view>
		</view>
		<view class="uni-padding-wrap">
			<view class="uni-title">不同颜色和尺寸的radio</view>
			<view>
				<label class="radio" style="margin-right: 30upx;">
					<radio value="r1" checked="true" color="#FFCC33" style="transform:scale(0.7)"/>选中
				</label>
				<label class="radio">
					<radio value="r2" color="#FFCC33" style="transform:scale(0.7)"/>未选中
				</label>
			</view>
		</view>
		<view class="uni-title uni-common-mt uni-common-pl">推荐展示样式</view>
		<view class="uni-list">
			<radio-group @change="radioChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === current" />
					</view>
					<view>{{item.name}}</view>
				</label>
			</radio-group>
		</view>
	</view>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-title uni-common-pl">普通选择器</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择
				</view>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="uni-input">{{array[index].name}}</view>
					</picker>
				</view>
			</view>
		</view>

		<!-- #ifndef MP-ALIPAY -->
		<view class="uni-title uni-common-pl">多列选择器</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择
				</view>
				<view class="uni-list-cell-db">
					<picker mode="multiSelector" @columnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="multiArray">
						<view class="uni-input">{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}</view>
					</picker>
				</view>
			</view>
		</view>
		<!-- #endif -->

		<view class="uni-title uni-common-pl">时间选择器</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择
				</view>
				<view class="uni-list-cell-db">
					<picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
						<view class="uni-input">{{time}}</view>
					</picker>
				</view>
			</view>
		</view>

		<view class="uni-title uni-common-pl">日期选择器</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择
				</view>
				<view class="uni-list-cell-db">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="uni-input">{{date}}</view>
					</picker>
				</view>
			</view>
		</view>
	</view>
		<view class="uni-title uni-common-pl">普通选择器</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择
				</view>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="uni-input">{{array[index].name}}</view>
					</picker>
				</view>
			</view>
		</view>
    <view class="uni-form-item uni-column">
      <view class="title">label用for标识表单组件</view>
      <radio-group class="uni-list" @change="radioChange">
        <label class="uni-list-cell uni-list-cell-pd" v-for="(item,index) in radioItems" :key="index">
          <view>
            <radio :id="item.name" :value="item.name" :checked="item.checked"></radio>
          </view>
          <view>
            <label class="label-2-text" :for="item.name">
              <text>{{item.value}}</text>
            </label>
          </view>
        </label>
      </radio-group>
    </view>
    <view>
      <page-head :title="title"></page-head>
      <view class="uni-padding-wrap uni-common-mt">
        <form @submit="formSubmit" @reset="formReset">
          <view class="uni-form-item uni-column">
            <view class="title">switch</view>
            <view>
              <switch name="switch1" />
            </view>
          </view>
          <view class="uni-form-item uni-column">
            <view class="title">radio</view>
            <radio-group name="radifchoseno">
              <label>
                <radio value="radio1" />选项一
              </label>
              <label>
                <radio value="radio2" />选项二
              </label>
            </radio-group>
          </view>
          <view class="uni-form-item uni-column">
            <view class="title">checkbox</view>
            <checkbox-group name="checkbox">
              <label>
                <checkbox value="checkbox1" />选项一
              </label>
              <label>
                <checkbox value="checkbox2" />选项二
              </label>
            </checkbox-group>
          </view>
          <view class="uni-form-item uni-column">
            <view class="title">slider</view>
            <slider value="50" name="slider" show-value></slider>
          </view>
          <view class="uni-form-item uni-column">
            <view class="title">input</view>
            <input class="uni-input" name="input" placeholder="这是一个输入框" />
          </view>
          <view class="uni-btn-v">
            <button formType="submit">Submit</button>
            <button type="default" formType="reset">Reset</button>
          </view>
        </form>
      </view>
    </view>
    <view>
      <page-head :title="title"></page-head>
      <view class="uni-padding-wrap uni-common-mt">
        <view class="uni-title uni-common-mt">默认样式</view>
        <view>
          <checkbox-group>
            <label>
              <checkbox value="cb" checked="true" />选中
            </label>
            <label>
              <checkbox value="cb" />未选中
            </label>
          </checkbox-group>
        </view>
        <view class="uni-title uni-common-mt">不同颜色和尺寸的checkbox</view>
        <view>
          <checkbox-group>
            <label>
              <checkbox value="cb" checked="true" color="#FFCC33" style="transform:scale(0.7)" />选中
            </label>
            <label>
              <checkbox value="cb" color="#FFCC33" style="transform:scale(0.7)" />未选中
            </label>
          </checkbox-group>
        </view>
      </view>

      <view class="uni-padding-wrap">
        <view class="uni-title uni-common-mt">
          推荐展示样式
          <text>\n使用 uni-list 布局</text>
        </view>
      </view>
      <view class="uni-list">
        <checkbox-group @change="checkboxChange">
          <label class="uni-list-cell uni-list-cell-pd" v-for="item in items" :key="item.value">
            <view>
              <checkbox :value="item.value" :checked="item.checked" />
            </view>
            <view>{{item.name}}</view>
          </label>
        </checkbox-group>
      </view>
    </view>
    <view>
      <page-head :title="title"></page-head>
      <view class="uni-padding-wrap uni-common-mt">
        <button type="primary">页面主操作 Normal</button>
        <button type="primary" loading="true">页面主操作 Loading</button>
        <button type="primary" disabled="true">页面主操作 Disabled</button>

        <button type="default">页面次要操作 Normal</button>
        <button type="default" disabled="true">页面次要操作 Disabled</button>

        <button type="warn">警告类操作 Normal</button>
        <button type="warn" disabled="true">警告类操作 Disabled</button>

        <view class="button-sp-area">
          <button type="primary" plain="true">按钮</button>
          <button type="primary" disabled="true" plain="true">不可点击的按钮</button>

          <button type="default" plain="true">按钮</button>
          <button type="default" disabled="true" plain="true">按钮</button>

          <button class="mini-btn" type="primary" size="mini">按钮</button>
          <button class="mini-btn" type="default" size="mini">按钮</button>
          <button class="mini-btn" type="warn" size="mini">按钮</button>
        </view>
        <!-- #ifdef MP-WEIXIN -->
        <button open-type="launchApp" app-parameter="uni-app" @error="openTypeError">打开APP</button>
        <button open-type="feedback">意见反馈</button>
        <!-- #endif -->
      </view>
    </view>
    <view>
      <view class="progress-box">
        <progress :percent="percent" show-info stroke-width="3" color="pink"  active activeColor="black"/>
      </view>
      <icon type="success" size="66"  color="gray"/>
      <page-head title="scroll-view,区域滚动视图"></page-head>
      <icon type="success" />
      <view class="uni-padding-wrap uni-common-mt">
        <view class="uni-title uni-common-mt">
          Vertical Scroll
          <text>\n纵向滚动</text>
        </view>
        <view>
          <scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
          @scroll="scroll">
            <view id="demo1" class="scroll-view-item uni-bg-red">A</view>
            <view id="demo2" class="scroll-view-item uni-bg-green">B</view>
            <view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
          </scroll-view>
        </view>
        <view @tap="goTop" class="uni-link uni-center uni-common-mt">
          点击这里返回顶部
        </view>

        <view class="uni-title uni-common-mt">
          Horizontal Scroll
          <text>\n横向滚动</text>
        </view>
        <view>
          <scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
            <view id="demo1" class="scroll-view-item_H uni-bg-red">A</view>
            <view id="demo2" class="scroll-view-item_H uni-bg-green">B</view>
            <view id="demo3" class="scroll-view-item_H uni-bg-blue">C</view>
          </scroll-view>
        </view>
      </view>
    </view>
    <view class="content">
        <view class="page-body">
            <view class="uni-padding-wrap uni-common-mt">
                <view class="uni-title uni-common-mt">
                    示例 1
                    <text>\nmovable-view 区域小于 movable-area</text>
                </view>
                <movable-area>
                    <movable-view :x="x" :y="y" direction="all" @change="onChange">text</movable-view>
                </movable-area>
                <view @tap="tap" class="uni-link uni-center uni-common-mt">
                    点击这里移动至 (30px, 30px)
                </view>
                <view class="uni-title uni-common-mt">
                    示例 2
                    <text>\nmovable-view区域大于movable-area</text>
                </view>
                <movable-area>
                    <movable-view class="max" direction="all">text</movable-view>
                </movable-area>
                <view class="uni-title uni-common-mt">
                    示例 3
                    <text>\n只可以横向移动</text>
                </view>
                <movable-area>
                    <movable-view direction="horizontal">text</movable-view>
                </movable-area>
                <view class="uni-title uni-common-mt">
                    示例 4
                    <text>\n只可以纵向移动</text>
                </view>
                <movable-area>
                    <movable-view direction="vertical">text</movable-view>
                </movable-area>
                <view class="uni-title uni-common-mt">
                    示例 5
                    <text>\n可超出边界</text>
                </view>
                <movable-area>
                    <movable-view direction="all" out-of-bounds>text</movable-view>
                </movable-area>
                <view class="uni-title uni-common-mt">
                    示例 6
                    <text>\n带有惯性</text>
                </view>
                <movable-area>
                    <movable-view direction="all" inertia>text</movable-view>
                </movable-area>
                <view class="uni-title uni-common-mt">
                    示例 7
                    <text>\n可放缩</text>
                </view>
                <movable-area scale-area>
                    <movable-view direction="all" @scale="onScale" scale scale-min="0.5" scale-max="4" :scale-value="scale">text</movable-view>
                </movable-area>
                <view @tap="tap2" class="uni-link uni-center uni-common-mt" style="padding-bottom:80rpx;">
                    点击这里放大3倍
                </view>
            </view>
        </view>
        <view class="uni-title uni-common-mt">
            字符串类型
            <text>\nnodes属性为String</text>
        </view>
        <view class="uni-common-mt" style="background:#FFF; padding:20rpx;">
            <rich-text :nodes="strings"></rich-text>
        </view>
        <view class="progress-box">
            <progress percent="20" show-info stroke-width="3" />
      </view>
      <!-- swiper -->
      <icon type="success"/>
        <!--cover-view cover-image-->
      <cover-view>
          <cover-view>红红火火</cover-view>
          <cover-image style="width:100rpx;height:100rpx" src="//downhdlogo.yy.com/hdlogo/6060/60/60/28/2336286630/u2336286630yo0GQxw.jpg">
          </cover-image>
      </cover-view>
       <!-- movableview测试 -->
      <movable-area  style="width:300rpx;height: 300rpx;background-color: blue;">
      <movable-view  direction="all"  style="width:100rpx;height: 100rpx;background-color: green;">kdajsd</movable-view>
      </movable-area>
       <!-- view组件测试 -->
        <view class="section" hover-class="green">
            <view class="section__title">flex-direction: row</view>
            <view class="flex-wrp" style="flex-direction:row;" hover-class="green">
                <view class="flex-item bc_green" hover-class="green" hover-stop-propagation=false hover-stay-time="30000">1</view>
                <view class="flex-item bc_red">2</view>
                <view class="flex-item bc_blue">3</view>
            </view>
        </view>
        <view class="section">
            <view class="section__title">flex-direction: column</view>
            <view class="flex-wrp" style="height: 300px;flex-direction:column;">
                <view class="flex-item bc_green">1</view>
                <view class="flex-item bc_red">2</view>
                <view class="flex-item bc_blue">3</view>
            </view>
        </view>
    </view>
    <div class="userinfo" @click="bindViewTap">
        <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
        <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover" />

        <div class="userinfo-nickname">
            <card :text="userInfo.nickName"></card>
        </div>
    </div>

    <div class="usermotto">
        <div class="user-motto">
            <card :text="motto"></card>
        </div>
    </div>

    <form class="form-container">
        <input type="text" class="form-control" :value="motto" placeholder="v-model" />
        <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
        <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>

        <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>

        <div class="all">
            <div class="left">
            </div>
            <div class="right">
            </div>
        </div>
</div>
</template>

<script>
import card from '@/components/card'
function getDate (type) {
  const date = new Date()

  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  if (type === 'start') {
    year = year - 60
  } else if (type === 'end') {
    year = year + 2
  }
  month = month > 9 ? month : '0' + month
  day = day > 9 ? day : '0' + day

  return `${year}-${month}-${day}`
}
export default {
  data () {
    return {
      latitude: 39.909,
      longitude: 116.39742,
      covers: [{
        latitude: 39.9085,
        longitude: 116.39747,
        // #ifdef APP-PLUS
        iconPath: '//downhdlogo.yy.com/hdlogo/6060/60/60/50/1346502044/u13465020448mTGEEZ.jpg'
        // #endif

      }, {
        latitude: 39.90,
        longitude: 116.39,
        // #ifdef APP-PLUS
        iconPath: '//downhdlogo.yy.com/hdlogo/6060/60/60/50/1346502044/u13465020448mTGEEZ.jpg'
        // #endif

      }],
      src: '',
      danmuList: [{
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }
      ],
      danmuValue: '',
      focus: false,
      title: 'radio 单选框',
      items: [{
        value: 'USA',
        name: '美国'
      },
      {
        value: 'CHN',
        name: '中国',
        checked: 'true'
      },
      {
        value: 'BRA',
        name: '巴西'
      },
      {
        value: 'JPN',
        name: '日本'
      },
      {
        value: 'ENG',
        name: '英国'
      },
      {
        value: 'FRA',
        name: '法国'
      }
      ],
      current: 0,
      // title: 'picker',
      array: [{name: '中国'}, {name: '美国'}, {name: '巴西'}, {name: '日本'}],
      index: 0,
      multiArray: [
        ['亚洲', '欧洲'],
        ['中国', '日本'],
        ['北京', '上海', '广州']
      ],
      multiIndex: [0, 0, 0],
      date: getDate({
        format: true
      }),
      startDate: getDate('start'),
      endDate: getDate('end'),
      time: '12:01',
      // array: [{name: '中国'}, {name: '美国'}, {name: '巴西'}, {name: '日本'}],
      radioItems: [{
        name: 'USA',
        value: '美国'
      },
      {
        name: 'CHN',
        value: '中国',
        checked: 'true'
      }
      ],
      title: 'form',
      pickerHidden: true,
      chosen: '',
      title: 'checkbox 复选框',
      items: [
        {
          value: 'USA',
          name: '美国'
        },
        {
          value: 'CHN',
          name: '中国',
          checked: 'true'
        },
        {
          value: 'BRA',
          name: '巴西'
        },
        {
          value: 'JPN',
          name: '日本'
        },
        {
          value: 'ENG',
          name: '英国'
        },
        {
          value: 'FRA',
          name: '法国'
        }
      ],
      percent: 20,
      strings: '<div style="text-align:center;"><img src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png"/></div>',
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      },
      x: 0,
      y: 0,
      scale: 2,

      scrollTop: 0,
      old: {
        scrollTop: 0
      }
    }
  },

  components: {
    card
  },

  methods: {
    sendDanmu: function () {
      this.videoContext.sendDanmu({
        text: this.danmuValue,
        color: this.getRandomColor()
      })
      debugger
      this.danmuValue = ''
    },
    videoErrorCallback: function (e) {
      // uni.showModal({
      //   content: e.target.errMsg,
      //   showCancel: false
      // })
    },
    getRandomColor: function () {
      const rgb = []
      for (let i = 0; i < 3; ++i) {
        let color = Math.floor(Math.random() * 256).toString(16)
        color = color.length == 1 ? '0' + color : color
        rgb.push(color)
      }
      return '#' + rgb.join('')
    },
  	takePhoto () {
      const ctx = wx.createCameraContext()
      ctx.takePhoto({
        quality: 'high',
        success: (res) => {
          debugger
			        this.src = res.tempImagePath
        }
      })
    },
    error (e) {
      console.log(e.target)
    },
    			bindTextAreaBlur: function (e) {
      console.log(e.target.value)
    },
  			switch1Change: function (e) {
      console.log('switch1 发生 change 事件，携带值为', e.target.value)
    },
    switch2Change: function (e) {
      console.log('switch2 发生 change 事件，携带值为', e.target.value)
    },
    sliderChange (e) {
      console.log('value 发生变化：' + e.target.value)
    },
    bindPickerChange: function (e) {
      console.log('picker发送选择改变，携带值为：' + e.target.value)
      this.index = e.target.value
    },
    bindMultiPickerColumnChange: function (e) {
      console.log('修改的列为：' + e.target.column + '，值为：' + e.target.value)
      this.multiIndex[e.target.column] = e.target.value
      switch (e.target.column) {
        case 0: // 拖动第1列
          switch (this.multiIndex[0]) {
            case 0:
              this.multiArray[1] = ['中国', '日本']
              this.multiArray[2] = ['北京', '上海', '广州']
              break
            case 1:
              this.multiArray[1] = ['英国', '法国']
              this.multiArray[2] = ['伦敦', '曼彻斯特']
              break
          }
          this.multiIndex[1] = 0
          this.multiIndex[2] = 0
          break
        case 1: // 拖动第2列
          switch (this.multiIndex[0]) { // 判断第一列是什么
            case 0:
              switch (this.multiIndex[1]) {
                case 0:
                  this.multiArray[2] = ['北京', '上海', '广州']
                  break
                case 1:
                  this.multiArray[2] = ['东京', '北海道']
                  break
              }
              break
            case 1:
              switch (this.multiIndex[1]) {
                case 0:
                  this.multiArray[2] = ['伦敦', '曼彻斯特']
                  break
                case 1:
                  this.multiArray[2] = ['巴黎', '马赛']
                  break
              }
              break
          }
          this.multiIndex[2] = 0
          break
      }
      this.$forceUpdate()
    },
    bindDateChange: function (e) {
      this.date = e.target.value
    },
    bindTimeChange: function (e) {
      this.time = e.target.value
    },
    // bindPickerChange: function (e) {
    //   console.log('picker发送选择改变，携带值为：' + e.target.value)
    //   this.index = e.target.value
    // },
    radioChange: function (e) {
      var checked = e.target.value
      console.log(checked)
    },
    pickerConfirm: function (e) {
      this.pickerHidden = true
      this.chosen = e.target.value
    },
    pickerCancel: function (e) {
      this.pickerHidden = true
    },
    pickerShow: function (e) {
      this.pickerHidden = false
    },
    formSubmit: function (e) {
      // console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.target.value))
      console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.target.value))
    },
    formReset: function (e) {
      console.log('清空数据')
      this.chosen = ''
    },
    checkboxChange: function (e) {
      var items = this.items,
        values = e.target.value
      for (var i = 0, lenI = items.length; i < lenI; ++i) {
        const item = items[i]
        if (values.includes(item.value)) {
          this.$set(item, 'checked', true)
        } else {
          this.$set(item, 'checked', false)
        }
      }
    },
    openTypeError (error) {
      console.error('open-type error:', error)
    },
    upper: function (e) {
      console.log(e)
    },
    lower: function (e) {
      console.log(e)
    },
    scroll: function (e) {
      console.log(e)
      // this.old.scrollTop = e.target.scrollTop
      this.old.scrollTop = e.target.scrollTop
    },
    goTop: function (e) {
      // 解决view层不同步的问题
      // console.log(this.old);
      this.scrollTop = this.old.scrollTop
      this.$nextTick(function () {
        this.scrollTop = 0
      })
      // 	uni.showToast({
      //   icon: 'none',
      //   title: '纵向滚动 scrollTop 值已被修改为 0'
      // })
    },
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({
          url
        })
      } else {
        mpvue.navigateTo({
          url
        })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
    tap: function (e) {
      debugger
      // 解决view层不同步的问题
      // e.x = this.old.x
      // e.y = this.old.y
      // let self = this
      this.$nextTick(() => {
        this.x = 30
        this.y = 30
      })
    },
    tap2 () {
      // 解决view层不同步的问题
      this.scale = this.old.scale
      this.scale = this.old.scale
      this.$nextTick(function () {
        this.scale = 3
      })
    },
    onChange: function (e) {
      this.old.x = e.target.x
      this.old.y = e.target.y
    },
    onScale: function (e) {
      // debugger;
      // this.old.scale = e.target.scale
    }
  },

  created () {
    this.videoContext = wx.createVideoContext('myVideo')
    var audio = wx.createInnerAudioContext()
    audio.src = 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3'
    audio.play()
    setTimeout(() => {
      this.percent = 60
    }, 3000)
    // let app = getApp()
  }
}
</script>

<style scoped>
	.scroll-Y {
		height: 300rpx;
	}

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}

	.scroll-view-item {
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}
.userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.userinfo-avatar {
    width: 128rpx;
    height: 128rpx;
    margin: 20rpx;
    border-radius: 50%;
}

.userinfo-nickname {
    color: #aaa;
}

.usermotto {
    margin-top: 150px;
}

.form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
}

.all {
    width: 7.5rem;
    height: 1rem;
    background-color: blue;
}

.all:after {
    display: block;
    content: '';
    clear: both;
}

.left {
    float: left;
    width: 3rem;
    height: 1rem;
    background-color: red;
}

.right {
    float: left;
    width: 4.5rem;
    height: 1rem;
    background-color: green;
}

/**index.wxss**/
.green {
    background-color: green;
}

.userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.userinfo-avatar {
    width: 128rpx;
    height: 128rpx;
    margin: 20rpx;
    border-radius: 50%;
}

.userinfo-nickname {
    color: #aaa;
}

.usermotto {
    margin-top: 200px;
}
	movable-view {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 150rpx;
		width: 150rpx;
		background-color: #007AFF;
		color: #fff;
	}

	movable-area {
		height: 300rpx;
		width: 100%;
		background-color: #D8D8D8;
		overflow: hidden;
	}

	.max {
		width:500rpx;
		height: 500rpx;
  }
  @font-face {
	font-family: uniicons;
	font-weight: normal;
	font-style: normal;
	src: url('https://img-cdn-qiniu.dcloud.net.cn/fonts/uni.ttf') format('truetype');
}

/*通用 */
view{
	font-size:28rpx;
	line-height:1.8;
}
progress, checkbox-group{
	width: 100%;
}
form {
	width: 100%;
}
.uni-flex {
	display: flex;
	flex-direction: row;
}
.uni-flex-item {
	flex: 1;
}
.uni-row {
	flex-direction: row;
}
.uni-column {
	flex-direction: column;
}
.uni-link{
	color:#576B95;
	font-size:26rpx;
}
.uni-center{
	text-align:center;
}
.uni-inline-item{
	display: flex;
	flex-direction: row;
	align-items:center;
}
.uni-inline-item text{
	margin-right: 20rpx;
}
.uni-inline-item text:last-child{
	margin-right: 0rpx;
	margin-left: 20rpx;
}

/* page */
.uni-page-head{
	padding:35rpx;
	text-align: center;
}
.uni-page-head-title {
	display: inline-block;
	padding: 0 40rpx;
	font-size: 30rpx;
	height: 88rpx;
	line-height: 88rpx;
	color: #BEBEBE;
	box-sizing: border-box;
	border-bottom: 2rpx solid #D8D8D8;
}
.uni-page-body {
	width: 100%;
	flex-grow: 1;
	overflow-x: hidden;
}
.uni-padding-wrap{
	width:690rpx;
	padding:0 30rpx;
}
.uni-word {
	text-align: center;
	padding:200rpx 100rpx;
}
.uni-title {
	font-size:30rpx;
	font-weight:500;
	padding:20rpx 0;
	line-height:1.5;
}
.uni-text{
	font-size:28rpx;
}
.uni-title text{
	font-size:24rpx;
	color:#888;
}

.uni-text-gray{
	color: #ccc;
}
.uni-text-small {
	font-size:24rpx;
}
.uni-common-mb{
	margin-bottom:30rpx;
}
.uni-common-pb{
	padding-bottom:30rpx;
}
.uni-common-pl{
	padding-left:30rpx;
}
.uni-common-mt{
	margin-top:30rpx;
}
/* 背景色 */
.uni-bg-red{
	background:#F76260; color:#FFF;
}
.uni-bg-green{
	background:#09BB07; color:#FFF;
}
.uni-bg-blue{
	background:#007AFF; color:#FFF;
}
/* 标题 */
.uni-h1 {font-size: 80rpx; font-weight:700;}
.uni-h2 {font-size: 60rpx; font-weight:700;}
.uni-h3 {font-size: 48rpx; font-weight:700;}
.uni-h4 {font-size: 36rpx; font-weight:700;}
.uni-h5 {font-size: 28rpx; color: #8f8f94;}
.uni-h6 {font-size: 24rpx; color: #8f8f94;}
.uni-bold{font-weight:bold;}

/* 文本溢出隐藏 */
.uni-ellipsis {overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}

/* 竖向百分百按钮 */
.uni-btn-v{
	padding:10rpx 0;
}
.uni-btn-v button{margin:20rpx 0;}

/* 表单 */
.uni-form-item{
	display:flex;
	width:100%;
	padding:10rpx 0;
}
.uni-form-item .title{
	padding:10rpx 25rpx;
}
.uni-label {
	width: 210rpx;
	word-wrap: break-word;
	word-break: break-all;
	text-indent:20rpx;
}
.uni-input {
	height: 50rpx;
	padding: 15rpx 25rpx;
	line-height:50rpx;
	font-size:28rpx;
	background:#FFF;
	flex: 1;
}
radio-group, checkbox-group{
	width:100%;
}
radio-group label, checkbox-group label{
	padding-right:20rpx;
}
.uni-form-item .with-fun{
	display:flex;
	flex-wrap:nowrap;
	background:#FFFFFF;
}
.uni-form-item .with-fun .uni-icon{
	width:40px;
	height:80rpx;
	line-height:80rpx;
	flex-shrink:0;
}

/* loadmore */
.uni-loadmore{
	height:80rpx;
	line-height:80rpx;
	text-align:center;
	padding-bottom:30rpx;
}
/*数字角标*/
.uni-badge,
.uni-badge-default {
	font-family: 'Helvetica Neue', Helvetica, sans-serif;
	font-size: 12px;
	line-height: 1;
	display: inline-block;
	padding: 3px 6px;
	color: #333;
	border-radius: 100px;
	background-color: rgba(0, 0, 0, .15);
}
.uni-badge.uni-badge-inverted {
	padding: 0 5px 0 0;
	color: #929292;
	background-color: transparent
}
.uni-badge-primary {
	color: #fff;
	background-color: #007aff
}
.uni-badge-blue.uni-badge-inverted,
.uni-badge-primary.uni-badge-inverted {
	color: #007aff;
	background-color: transparent
}
.uni-badge-green,
.uni-badge-success {
	color: #fff;
	background-color: #4cd964;
}
.uni-badge-green.uni-badge-inverted,
.uni-badge-success.uni-badge-inverted {
	color: #4cd964;
	background-color: transparent
}
.uni-badge-warning,
.uni-badge-yellow {
	color: #fff;
	background-color: #f0ad4e
}
.uni-badge-warning.uni-badge-inverted,
.uni-badge-yellow.uni-badge-inverted {
	color: #f0ad4e;
	background-color: transparent
}
.uni-badge-danger,
.uni-badge-red {
	color: #fff;
	background-color: #dd524d
}
.uni-badge-danger.uni-badge-inverted,
.uni-badge-red.uni-badge-inverted {
	color: #dd524d;
	background-color: transparent
}
.uni-badge-purple,
.uni-badge-royal {
	color: #fff;
	background-color: #8a6de9
}
.uni-badge-purple.uni-badge-inverted,
.uni-badge-royal.uni-badge-inverted {
	color: #8a6de9;
	background-color: transparent
}

/*折叠面板 */
.uni-collapse-content {
	height: 0;
	width: 100%;
	overflow: hidden;
}
.uni-collapse-content.uni-active {
	height: auto;
}

/*卡片视图 */
.uni-card {
	background: #fff;
	border-radius: 8rpx;
	margin:20rpx 0;
	position: relative;
	box-shadow: 0 2rpx 4rpx rgba(0, 0, 0, .3);
}
.uni-card-content {
	font-size: 30rpx;
}
.uni-card-content.image-view{
    width: 100%;
    margin: 0;
}
.uni-card-content-inner {
	position: relative;
	padding: 30rpx;
}
.uni-card-footer,
.uni-card-header {
	position: relative;
	display: flex;
	min-height: 50rpx;
	padding: 20rpx 30rpx;
	justify-content: space-between;
	align-items: center;
}
.uni-card-header {
	font-size: 36rpx;
}
.uni-card-footer {
	color: #6d6d72;
}
.uni-card-footer:before,
.uni-card-header:after {
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	height: 2rpx;
	content: '';
	-webkit-transform: scaleY(.5);
	transform: scaleY(.5);
	background-color: #c8c7cc;
}
.uni-card-header:after {
	top: auto;
	bottom: 0;
}
.uni-card-media {
	justify-content: flex-start;
}
.uni-card-media-logo {
	height: 84rpx;
	width: 84rpx;
	margin-right: 20rpx;
}
.uni-card-media-body {
	height: 84rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
}
.uni-card-media-text-top {
	line-height: 36rpx;
	font-size: 34rpx;
}
.uni-card-media-text-bottom {
	line-height: 30rpx;
	font-size: 28rpx;
	color: #8f8f94;
}
.uni-card-link {
	color: #007AFF;
}

/* 列表 */
.uni-list {
	background-color: #FFFFFF;
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
}
.uni-list:after {
	position: absolute;
	z-index: 10;
	right: 0;
	bottom: 0;
	left: 0;
	height: 1px;
	content: '';
	-webkit-transform: scaleY(.5);
	transform: scaleY(.5);
	background-color: #c8c7cc;
}
.uni-list::before {
	position: absolute;
	z-index: 10;
	right: 0;
	top: 0;
	left: 0;
	height: 1px;
	content: '';
	-webkit-transform: scaleY(.5);
	transform: scaleY(.5);
	background-color: #c8c7cc;
}
.uni-list-cell {
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.uni-list-cell-hover {
	background-color: #eee;
}
.uni-list-cell-pd {
	padding: 22rpx 30rpx;
}
.uni-list-cell-left {
	font-size:28rpx;
	padding: 0 30rpx;
}
.uni-list-cell-db,
.uni-list-cell-right {
	flex: 1;
}
.uni-list-cell::after {
	position: absolute;
  z-index: 3;
	right: 0;
	bottom: 0;
	left: 30rpx;
	height: 1px;
	content: '';
	-webkit-transform: scaleY(.5);
	transform: scaleY(.5);
	background-color: #c8c7cc;
}
.uni-list .uni-list-cell:last-child::after {
	height: 0rpx;
}
.uni-list-cell-last.uni-list-cell::after {
	height: 0rpx;
}
.uni-list-cell-divider {
	position: relative;
	display: flex;
	color: #999;
	background-color: #f7f7f7;
	padding:15rpx 20rpx;
}
.uni-list-cell-divider::before {
	position: absolute;
	right: 0;
	top: 0;
	left: 0;
	height: 1px;
	content: '';
	-webkit-transform: scaleY(.5);
	transform: scaleY(.5);
	background-color: #c8c7cc;
}
.uni-list-cell-divider::after {
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0rpx;
	height: 1px;
	content: '';
	-webkit-transform: scaleY(.5);
	transform: scaleY(.5);
	background-color: #c8c7cc;
}
.uni-list-cell-navigate {
	font-size:30rpx;
	padding: 22rpx 30rpx;
	line-height: 48rpx;
	position: relative;
	display: flex;
	box-sizing: border-box;
	width: 100%;
	flex: 1;
	justify-content: space-between;
	align-items: center;
}
.uni-list-cell-navigate {
	padding-right: 36rpx;
}
.uni-navigate-badge {
	padding-right: 50rpx;
}
.uni-list-cell-navigate.uni-navigate-right:after {
	font-family: uniicons;
	content: '\e583';
	position: absolute;
	right: 24rpx;
	top: 50%;
	color: #bbb;
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
}
.uni-list-cell-navigate.uni-navigate-bottom:after {
	font-family: uniicons;
	content: '\e581';
	position: absolute;
	right: 24rpx;
	top: 50%;
	color: #bbb;
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
}
.uni-list-cell-navigate.uni-navigate-bottom.uni-active::after {
	font-family: uniicons;
	content: '\e580';
	position: absolute;
	right: 24rpx;
	top: 50%;
	color: #bbb;
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
}
.uni-collapse.uni-list-cell {
	flex-direction: column;
}
.uni-list-cell-navigate.uni-active {
	background: #eee;
}
.uni-list.uni-collapse {
	box-sizing: border-box;
	height: 0;
	overflow: hidden;
}
.uni-collapse .uni-list-cell {
	padding-left: 20rpx;
}
.uni-collapse .uni-list-cell::after {
	left: 52rpx;
}
.uni-list.uni-active {
	height: auto;
}

/* 三行列表 */
.uni-triplex-row {
	display: flex;
	flex: 1;
	width: 100%;
	box-sizing: border-box;
	flex-direction: row;
	padding: 22rpx 30rpx;
}
.uni-triplex-right,
.uni-triplex-left {
	display: flex;
	flex-direction: column;
}
.uni-triplex-left {
	width: 84%;
}
.uni-triplex-left .uni-title{
	padding:8rpx 0;
}
.uni-triplex-left .uni-text, .uni-triplex-left .uni-text-small{color:#999999;}
.uni-triplex-right {
	width: 16%;
	text-align: right;
}

/* 图文列表 */
.uni-media-list {
	padding: 22rpx 30rpx;
	box-sizing: border-box;
	display: flex;
	width: 100%;
	flex-direction: row;
}
.uni-navigate-right.uni-media-list {
	padding-right: 74rpx;
}
.uni-pull-right {
	flex-direction: row-reverse;
}
.uni-pull-right>.uni-media-list-logo {
	margin-right: 0rpx;
	margin-left: 20rpx;
}
.uni-media-list-logo {
	height: 84rpx;
	width: 84rpx;
	margin-right: 20rpx;
}
.uni-media-list-logo image {
	height: 100%;
	width: 100%;
}
.uni-media-list-body {
	height: 84rpx;
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	overflow: hidden;
}
.uni-media-list-text-top {
	width: 100%;
	line-height: 36rpx;
	font-size: 30rpx;
}
.uni-media-list-text-bottom {
	width: 100%;
	line-height: 30rpx;
	font-size: 26rpx;
	color: #8f8f94;
}

/* 九宫格 */
.uni-grid-9 {
	background: #f2f2f2;
	width: 750rpx;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	border-top: 2rpx solid #eee;
}
.uni-grid-9-item {
	width: 250rpx;
	height: 200rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-bottom: 2rpx solid;
	border-right: 2rpx solid;
	border-color: #eee;
	box-sizing: border-box;
}
.no-border-right {
	border-right: none;
}
.uni-grid-9-image {
	width: 100rpx;
	height: 100rpx;
}
.uni-grid-9-text {
	width: 250rpx;
	line-height: 4rpx;
	height: 40rpx;
	text-align: center;
	font-size: 30rpx;
}
.uni-grid-9-item-hover {
	background: rgba(0, 0, 0, 0.1);
}

/* 上传 */
.uni-uploader {
	flex: 1;
	flex-direction: column;
}
.uni-uploader-head {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.uni-uploader-info {
	color: #B2B2B2;
}
.uni-uploader-body {
	margin-top: 16rpx;
}
.uni-uploader__files {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
.uni-uploader__file {
	margin: 10rpx;
	width: 210rpx;
	height: 210rpx;
}
.uni-uploader__img {
	display: block;
	width: 210rpx;
	height: 210rpx;
}
.uni-uploader__input-box {
	position: relative;
	margin:10rpx;
	width: 208rpx;
	height: 208rpx;
	border: 2rpx solid #D9D9D9;
}
.uni-uploader__input-box:before,
.uni-uploader__input-box:after {
	content: " ";
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	background-color: #D9D9D9;
}
.uni-uploader__input-box:before {
	width: 4rpx;
	height: 79rpx;
}
.uni-uploader__input-box:after {
	width: 79rpx;
	height: 4rpx;
}
.uni-uploader__input-box:active {
	border-color: #999999;
}
.uni-uploader__input-box:active:before,
.uni-uploader__input-box:active:after {
	background-color: #999999;
}
.uni-uploader__input {
	position: absolute;
	z-index: 1;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
}

/*问题反馈*/
.feedback-title {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 20rpx;
	color: #8f8f94;
	font-size: 28rpx;
}
.feedback-star-view.feedback-title {
	justify-content: flex-start;
	margin: 0;
}
.feedback-quick {
	position: relative;
	padding-right: 40rpx;
}
.feedback-quick:after {
	font-family: uniicons;
	font-size: 40rpx;
	content: '\e581';
	position: absolute;
	right: 0;
	top: 50%;
	color: #bbb;
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
}
.feedback-body {
	background: #fff;
}
.feedback-textare {
	height: 200rpx;
	font-size: 34rpx;
	line-height: 50rpx;
	width: 100%;
	box-sizing: border-box;
	padding: 20rpx 30rpx 0;
}
.feedback-input {
	font-size: 34rpx;
	height: 50rpx;
	min-height: 50rpx;
	padding: 15rpx 20rpx;
	line-height: 50rpx;
}
.feedback-uploader {
	padding: 22rpx 20rpx;
}
.feedback-star {
	font-family: uniicons;
	font-size: 40rpx;
	margin-left: 6rpx;
}
.feedback-star-view {
	margin-left: 20rpx;
}
.feedback-star:after {
	content: '\e408';
}
.feedback-star.active {
	color: #FFB400;
}
.feedback-star.active:after {
	content: '\e438';
}
.feedback-submit {
	background: #007AFF;
	color: #FFFFFF;
	margin: 20rpx;
}

/* input group */
.uni-input-group {
	position: relative;
	padding: 0;
	border: 0;
	background-color: #fff;
}

.uni-input-group:before {
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	height: 2rpx;
	content: '';
	transform: scaleY(.5);
	background-color: #c8c7cc;
}

.uni-input-group:after {
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0;
	height: 2rpx;
	content: '';
	transform: scaleY(.5);
	background-color: #c8c7cc;
}

.uni-input-row {
	position: relative;
	display: flex;
	flex-direction: row;
	font-size:28rpx;
	padding: 22rpx 30rpx;
	justify-content: space-between;
}

.uni-input-group .uni-input-row:after {
	position: absolute;
	right: 0;
	bottom: 0;
	left: 30rpx;
	height: 2rpx;
	content: '';
	transform: scaleY(.5);
	background-color: #c8c7cc;
}

.uni-input-row label {
	line-height: 70rpx;
}

/* textarea */
.uni-textarea{
	width:100%;
	background:#FFF;
}
.uni-textarea textarea{
	width:96%;
	padding:18rpx 2%;
	line-height:1.6;
	font-size:28rpx;
	height:150rpx;
}

/* tab bar */
.uni-tab-bar {
	display: flex;
	flex: 1;
	flex-direction: column;
	overflow: hidden;
	height: 100%;
}

.uni-tab-bar .list {
	width: 750rpx;
	height: 100%;
}

.uni-swiper-tab {
	width: 100%;
	white-space: nowrap;
	line-height: 100rpx;
	height: 100rpx;
	border-bottom: 1px solid #c8c7cc;
}

.swiper-tab-list {
	font-size: 30rpx;
	width: 150rpx;
	display: inline-block;
	text-align: center;
	color: #555;
}

.uni-tab-bar .active {
	color: #007AFF;
}

.uni-tab-bar .swiper-box {
	flex: 1;
	width: 100%;
	height: calc(100% - 100rpx);
}

.uni-tab-bar-loading{
	padding:20rpx 0;
}

/* comment */
.uni-comment{padding:5rpx 0; display: flex; flex-grow:1; flex-direction: column;}
.uni-comment-list{flex-wrap:nowrap; padding:10rpx 0; margin:10rpx 0; width:100%; display: flex;}
.uni-comment-face{width:70rpx; height:70rpx; border-radius:100%; margin-right:20rpx; flex-shrink:0; overflow:hidden;}
.uni-comment-face image{width:100%; border-radius:100%;}
.uni-comment-body{width:100%;}
.uni-comment-top{line-height:1.5em; justify-content:space-between;}
.uni-comment-top text{color:#0A98D5; font-size:24rpx;}
.uni-comment-date{line-height:38rpx; flex-direction:row; justify-content:space-between; display:flex !important; flex-grow:1;}
.uni-comment-date view{color:#666666; font-size:24rpx; line-height:38rpx;}
.uni-comment-content{line-height:1.6em; font-size:28rpx; padding:8rpx 0;}
.uni-comment-replay-btn{background:#FFF; font-size:24rpx; line-height:28rpx; padding:5rpx 20rpx; border-radius:30rpx; color:#333 !important; margin:0 10rpx;}

/* swiper msg */
.uni-swiper-msg{width:100%; padding:12rpx 0; flex-wrap:nowrap; display:flex;}
.uni-swiper-msg-icon{width:50rpx; margin-right:20rpx;}
.uni-swiper-msg-icon image{width:100%; flex-shrink:0;}
.uni-swiper-msg swiper{width:100%; height:50rpx;}
.uni-swiper-msg swiper-item{line-height:50rpx;}

/* product */
.uni-product-list {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
}

.uni-product {
    padding: 20rpx;
    display: flex;
    flex-direction: column;
}

.image-view {
    height: 330rpx;
    width: 330rpx;
	margin:12rpx 0;
}

.uni-product-image {
    height: 330rpx;
    width: 330rpx;
}

.uni-product-title {
    width: 300rpx;
    word-break: break-all;
    display: -webkit-box;
    overflow: hidden;
	line-height:1.5;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.uni-product-price {
	margin-top:10rpx;
    font-size: 28rpx;
	line-height:1.5;
    position: relative;
}

.uni-product-price-original {
    color: #e80080;
}

.uni-product-price-favour {
    color: #888888;
    text-decoration: line-through;
    margin-left: 10rpx;
}

.uni-product-tip {
    position: absolute;
    right: 10rpx;
    background-color: #ff3333;
    color: #ffffff;
    padding: 0 10rpx;
    border-radius: 5rpx;
}

/* timeline */
.uni-timeline {
		margin: 35rpx 0;
		display: flex;
		flex-direction: column;
		position: relative;
	}


	.uni-timeline-item {
		display: flex;
		flex-direction: row;
		position: relative;
		padding-bottom: 20rpx;
		box-sizing: border-box;
		overflow: hidden;

	}

	.uni-timeline-item .uni-timeline-item-keynode {
		width: 160rpx;
		flex-shrink: 0;
		box-sizing: border-box;
		padding-right: 20rpx;
		text-align: right;
		line-height: 65rpx;
	}

	.uni-timeline-item .uni-timeline-item-divider {
		flex-shrink: 0;
		position: relative;
		width: 30rpx;
		height: 30rpx;
		top: 15rpx;
		border-radius: 50%;
		background-color: #bbb;
	}



	.uni-timeline-item-divider::before,
	.uni-timeline-item-divider::after {
		position: absolute;
		left: 15rpx;
		width: 1rpx;
		height: 100vh;
		content: '';
		background: inherit;
	}

	.uni-timeline-item-divider::before {
		bottom: 100%;
	}

	.uni-timeline-item-divider::after {
		top: 100%;
	}


	.uni-timeline-last-item .uni-timeline-item-divider:after {
		display: none;
	}

	.uni-timeline-first-item .uni-timeline-item-divider:before {
		display: none;
	}

	.uni-timeline-item .uni-timeline-item-content {
		padding-left: 20rpx;
	}

	.uni-timeline-last-item .bottom-border::after{
		display: none;
	}

	.uni-timeline-item-content .datetime{
		color: #CCCCCC;
	}

	/* 自定义节点颜色 */
	.uni-timeline-last-item .uni-timeline-item-divider{
		background-color: #1AAD19;
	}


/* uni-icon */

.uni-icon {
	font-family: uniicons;
	font-size: 24px;
	font-weight: normal;
	font-style: normal;
	line-height: 1;
	display: inline-block;
	text-decoration: none;
	-webkit-font-smoothing: antialiased;
}

.uni-icon.uni-active {
	color: #007aff;
}

.uni-icon-contact:before {
	content: '\e100';
}

.uni-icon-person:before {
	content: '\e101';
}

.uni-icon-personadd:before {
	content: '\e102';
}

.uni-icon-contact-filled:before {
	content: '\e130';
}

.uni-icon-person-filled:before {
	content: '\e131';
}

.uni-icon-personadd-filled:before {
	content: '\e132';
}

.uni-icon-phone:before {
	content: '\e200';
}

.uni-icon-email:before {
	content: '\e201';
}

.uni-icon-chatbubble:before {
	content: '\e202';
}

.uni-icon-chatboxes:before {
	content: '\e203';
}

.uni-icon-phone-filled:before {
	content: '\e230';
}

.uni-icon-email-filled:before {
	content: '\e231';
}

.uni-icon-chatbubble-filled:before {
	content: '\e232';
}

.uni-icon-chatboxes-filled:before {
	content: '\e233';
}

.uni-icon-weibo:before {
	content: '\e260';
}

.uni-icon-weixin:before {
	content: '\e261';
}

.uni-icon-pengyouquan:before {
	content: '\e262';
}

.uni-icon-chat:before {
	content: '\e263';
}

.uni-icon-qq:before {
	content: '\e264';
}

.uni-icon-videocam:before {
	content: '\e300';
}

.uni-icon-camera:before {
	content: '\e301';
}

.uni-icon-mic:before {
	content: '\e302';
}

.uni-icon-location:before {
	content: '\e303';
}

.uni-icon-mic-filled:before,
.uni-icon-speech:before {
	content: '\e332';
}

.uni-icon-location-filled:before {
	content: '\e333';
}

.uni-icon-micoff:before {
	content: '\e360';
}

.uni-icon-image:before {
	content: '\e363';
}

.uni-icon-map:before {
	content: '\e364';
}

.uni-icon-compose:before {
	content: '\e400';
}

.uni-icon-trash:before {
	content: '\e401';
}

.uni-icon-upload:before {
	content: '\e402';
}

.uni-icon-download:before {
	content: '\e403';
}

.uni-icon-close:before {
	content: '\e404';
}

.uni-icon-redo:before {
	content: '\e405';
}

.uni-icon-undo:before {
	content: '\e406';
}

.uni-icon-refresh:before {
	content: '\e407';
}

.uni-icon-star:before {
	content: '\e408';
}

.uni-icon-plus:before {
	content: '\e409';
}

.uni-icon-minus:before {
	content: '\e410';
}

.uni-icon-circle:before,
.uni-icon-checkbox:before {
	content: '\e411';
}

.uni-icon-close-filled:before,
.uni-icon-clear:before {
	content: '\e434';
}

.uni-icon-refresh-filled:before {
	content: '\e437';
}

.uni-icon-star-filled:before {
	content: '\e438';
}

.uni-icon-plus-filled:before {
	content: '\e439';
}

.uni-icon-minus-filled:before {
	content: '\e440';
}

.uni-icon-circle-filled:before {
	content: '\e441';
}

.uni-icon-checkbox-filled:before {
	content: '\e442';
}

.uni-icon-closeempty:before {
	content: '\e460';
}

.uni-icon-refreshempty:before {
	content: '\e461';
}

.uni-icon-reload:before {
	content: '\e462';
}

.uni-icon-starhalf:before {
	content: '\e463';
}

.uni-icon-spinner:before {
	content: '\e464';
}

.uni-icon-spinner-cycle:before {
	content: '\e465';
}

.uni-icon-search:before {
	content: '\e466';
}

.uni-icon-plusempty:before {
	content: '\e468';
}

.uni-icon-forward:before {
	content: '\e470';
}

.uni-icon-back:before,
.uni-icon-left-nav:before {
	content: '\e471';
}

.uni-icon-checkmarkempty:before {
	content: '\e472';
}

.uni-icon-home:before {
	content: '\e500';
}

.uni-icon-navigate:before {
	content: '\e501';
}

.uni-icon-gear:before {
	content: '\e502';
}

.uni-icon-paperplane:before {
	content: '\e503';
}

.uni-icon-info:before {
	content: '\e504';
}

.uni-icon-help:before {
	content: '\e505';
}

.uni-icon-locked:before {
	content: '\e506';
}

.uni-icon-more:before {
	content: '\e507';
}

.uni-icon-flag:before {
	content: '\e508';
}

.uni-icon-home-filled:before {
	content: '\e530';
}

.uni-icon-gear-filled:before {
	content: '\e532';
}

.uni-icon-info-filled:before {
	content: '\e534';
}

.uni-icon-help-filled:before {
	content: '\e535';
}

.uni-icon-more-filled:before {
	content: '\e537';
}

.uni-icon-settings:before {
	content: '\e560';
}

.uni-icon-list:before {
	content: '\e562';
}

.uni-icon-bars:before {
	content: '\e563';
}

.uni-icon-loop:before {
	content: '\e565';
}

.uni-icon-paperclip:before {
	content: '\e567';
}

.uni-icon-eye:before {
	content: '\e568';
}

.uni-icon-arrowup:before {
	content: '\e580';
}

.uni-icon-arrowdown:before {
	content: '\e581';
}

.uni-icon-arrowleft:before {
	content: '\e582';
}

.uni-icon-arrowright:before {
	content: '\e583';
}

.uni-icon-arrowthinup:before {
	content: '\e584';
}

.uni-icon-arrowthindown:before {
	content: '\e585';
}

.uni-icon-arrowthinleft:before {
	content: '\e586';
}

.uni-icon-arrowthinright:before {
	content: '\e587';
}

.uni-icon-pulldown:before {
	content: '\e588';
}

.uni-icon-scan:before {
    content: "\e612";
}

/* 分界线 */
.uni-divider{
    height: 110rpx;
    display: flex;
    align-items:center;
    justify-content: center;
    position: relative;
}
.uni-divider__content{
    font-size: 28rpx;
    color: #999;
    padding: 0 20rpx;
    position: relative;
    z-index: 101;
    background: #F4F5F6;
}
.uni-divider__line{
    background-color: #CCCCCC;
    height: 1px;
    width: 100%;
    position: absolute;
    z-index: 100;
    top: 50%;
    left: 0;
    transform: translateY(50%);
}
</style>
