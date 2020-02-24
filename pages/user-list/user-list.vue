<template>
	<view>
		<view class="flex align-center " style="height: 100rpx;">
			<view class=" flex align-center justify-center flex-1 " v-for="(item,index) in tabBars" :key="index" :class=" index === tabIndex?'font-lg font-weight-bold text-main':'font-md'" @click="changeTab(index)">
			{{item.name}} 
			<text v-if="item.num > 0 " class="ml-2 font">{{item.num|formatNum}}</text>
			</view>
		</view>
		<!-- 列表 -->
		<swiper :duration="150" :current="tabIndex" @change="onChangeTab" :style="'height:'+ scrollH +'px;'">
			<swiper-item v-for="(item,index) in newsList" :key="index"  >
				<scroll-view scroll-y="true" :style="'height:'+ scrollH +'px;'" @scrolltolower="loadmore(index)">
					<!-- 列表 -->
					<template v-if="item.list.length > 0">
					<!-- 列表样式 -->
						<block v-for="(item2,index2) in item.list" :key="index2">
							<!-- 列表样式 -->
							<user-list :item="item2" :index="index2"></user-list>
						</block>
						<!-- 上拉记载更多 -->
						<load-more v-if="item.list.length >10" :loadmore="item.loadmore"></load-more>
					</template>
					<!-- 无数据 -->
					<template  v-else>
						<no-thing></no-thing>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	
	import noThing from '@/components/common/no-thing.vue';
	import loadMore from '@/components/common/loadmore.vue';
	import userList from '@/components/user-list/user-list.vue'
	export default {
		components:{
			noThing,
			loadMore,
			userList
		},
		data() {
			return {
				// 列表高度
				scrollH:600,
				tabIndex:0,
				tabBars:[{
					name:"互关",
					num:0,
					key:"friends"
				},{
					name:"关注",
					num:0,
					key:"follows"
				},{
					name:"粉丝",
					num:0,
					key:"fens"
				}],
				newsList:[]
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success:res=>{
					this.scrollH = res.windowHeight - uni.upx2px(100)
				}
			})
			// 根据选项生成列表
			this.getData()
		},
		// 监听点击输入框事件
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url:'../search/search?type=user'
			})
		},
		onNavigationBarButtonTap() {
			uni.navigateBack({
				delta:1
			})
		},
		filters:{
			formatNum(value){
				return value > 99 ? '99+' : value
			}
		},
		methods: {
			getCounts(){
				this.$H.get('/user/getcounts/' + this.user.id,{},{
					token:true,
					notoast:true
				}).then(res=>{
					//console.log(res)
					this.tabBars[0].num = res.friend_count
					this.tabBars[1].num = res.withfollow_count
					this.tabBars[2].num = res.withfen_count
				})
			},
			getData(){
				var arr=[]
				for (let i = 0 ; i < this.tabBars.length ; i++) {
					// 生成列表模板
					let obj = {
						// 1.上拉加载更多 2.加载中... 3.没有更多了
						loadmore:"上拉加载更多...",
						list:[],
						page:1,
						firstLoad:false
					}
					arr.push(obj)
				}
				this.newsList = arr
			},
			getList(){
				let index = this.tabIndex
				let id = this.tabBars[index].id
				let page = this.newsList[index].page
				let isrefresh = page === 1
				this.$H.get('/'+this.tabBars[index].key+'/'+page,{},{
					token:true,
					noCheck:true
				})
				.then(res=>{ 
					let list = res.list.map(v=>{
						return{
							id:v.id,
							avatar:v.userpic,
							username:v.username,
							sex:v.userinfo.sex, //0:未知；1：女性；2：男性 
							age:v.userinfo.age,
							isFollow:index !== 2
						}
					})
			
					this.newsList[index].list = isrefresh ? list : [...this.newsList[index].list,...list];
					
					this.newsList[index].loadmore  = list.length < 10 ? '没有更多了' : '上拉加载更多';
					
					if (isrefresh) {
						this.newsList[index].firstLoad = true
					}
				}).catch(err=>{
					if(!isrefresh){
						this.newsList[index].page--;
					}
				})
			},
			// tab切换
			changeTab(index){
				this.tabIndex = index
			},
			// 监听滑动顶部导航
			onChangeTab(e){
				this.changeTab(e.detail.current)
				if(!this.newsList[e.detail.current].firstLoad){
					this.getList()
				} 
			},
			// 上拉加载更多
			loadmore(index){
				let item = this.newsList[index]
				// 判断是否处于可加载状态(上拉加载更多)
				if(item.loadmore !== "上拉加载更多...") return;
				// 修改当前列表加载状态
				item.loadmore = "加载中...";
				//数据请求
				item.page++;
				this.getList()
			},
		}
	}
</script>

<style>

</style>
