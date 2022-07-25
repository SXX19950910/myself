<template>
  <div>
    <full-page ref="fullPage" :options="options" id="full-page" :skip-init="true">
      <div class="section">
        <div class="flex items-center justify-center flex-col text-white p-5">
          <template v-for="(item, index) in selfInfoTextList">
            <transition
                :enter-active-class="item.enterClass"
            >
              <div :key="index" class="title text-2xl mb-4" v-if="currentIndex === 0">{{ item.text }}</div>
            </transition>
          </template>
          <div v-if="currentIndex === 0" class="absolute animate__animated animate__fadeInUp animate__infinite bottom-7">
            <span>看看工作经历</span>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="h-full pt-10 flex items-start flex-col px-10">
          <template v-for="(item, index) in historyList">
            <transition
              enter-active-class="animate__animated animate__slideInLeft animate__fast"
              @after-enter="onAnimateEnter"
            >
              <div v-if="item.show" class="item mb-10" :data-index="index">
                <div class="border-l-4 border-sky-500 pl-4">
                  <span>{{ item.time }}</span>
                  <span class="ml-2">{{ item.data }}</span>
                </div>
                <div class="mt-2">
                  {{ item.content }}
                </div>
                <div class="mt-2">
                  {{ item.stack }}
                </div>
              </div>
            </transition>
          </template>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
export default {
  data() {
    return {
      currentIndex: null,
      selfInfoTextList: [
        {
          text: '您好，我叫时晓曦',
          enterClass: 'animate__animated animate__slideInLeft animate__fast'
        },
        {
          text: '职业:前端工程师(5年)',
          enterClass: 'animate__animated animate__slideInRight animate__fast'
        },
        {
          text: '技术栈:javascript、css、html、vue、react、nuxt、nest、node.js、小程序、h5、mysql、mongodb',
          enterClass: 'animate__animated animate__slideInLeft animate__fast'
        }
      ],
      historyList: [
        {
          id: '1',
          time: '2017.6-2018.7',
          data: '深圳微互推信息',
          show: false,
          content: '主要产品：B2C商城（PC），后台管理系统，小程序，H5',
          stack: '技术栈：javascript，css3，php'
        },
        {
          id: '2',
          time: '2018.7-2019.3',
          data: '文思海辉',
          show: false,
        },
        {
          id: '3',
          time: '2019.3-2021.4',
          data: '极兔速度国际物流',
          show: false,
        },
        {
          id: '4',
          time: '2021.7-2021.12',
          data: '回收宝科技',
          show: false,
        },
        {
          id: '5',
          time: '2021.12-2022.6',
          data: '龙创悦动',
          show: false
        }
      ],
      options: {
        sectionsColor: ['#333', 'white'],
        afterLoad: this.afterLoad,
      }
    }
  },
  mounted() {
    this.$refs.fullPage.init()
  },
  methods: {
    resetHistoryList() {
      this.historyList.forEach(item => item.show =false)
    },
    afterLoad(prev, current) {
      this.resetHistoryList()
      this.currentIndex = current.index
      if (current.index === 1) {
        this.$nextTick(() => {
          this.historyList[0].show = true
        })
      }
    },
    onAnimateEnter(el) {
      const index = parseFloat(el.getAttribute('data-index'))
      if (index < this.historyList.length - 1) {
        this.historyList[index + 1].show = true
      }
    }
  }
}

</script>

<style lang="less">
#full-page {
  .section {
    width: 100%;
    height: 100vh;
  }
  .fp-watermark {
    display: none;
  }
}
</style>