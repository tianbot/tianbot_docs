<!--Ref: http://jellyfin.work:6002/vitepress/gonggao.html#mycomponent-vue -->

<template>
    <div class="popover" v-show="showPopover">  
        <div class="header">
            <i class="el-icon" style="font-size: 20px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                    <path fill="currentColor" d="M288 128h608L736 384l160 256H288v320h-96V64h96v64z"></path>
                </svg></i>
            <span class="title">📢公告📢</span>
            <i class="el-icon close-icon" @click="toggleCloseIcon" style="font-size: 20px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                    <path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"></path>
                </svg></i>
        </div>
        <div class="body content">
            <p class="p_margin" id="p3">👇竞赛咨询👇---👇产品购买👇</p>
            <!-- <img src="https://img.cdn.sugarat.top/mdImg/MTYxNTAxODc2NTIxMA==615018765210" style=""> -->
            <p class="p_margin" id="p3">联系电话：15398021743<br />联系邮箱：sales@tianbot.com</p>
            <div class="button-container">
                <a href="https://tianbot.taobao.com/" target="_blank" class="el-button el-button--primary button-author">
                    <span>查看店铺</span>
                </a>
                <a href="http://docs.tianbot.com/community.html" target="_blank" class="el-button el-button--success button-group">  
                    <span>加群交流</span>
                </a>
            </div>
        </div>
        <div class="footer content"></div>
    </div>

    <button class="popover-close" v-if="showCloseIcon" @click="togglePopover">
        <i class="el-icon2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="18px" height="18px">
                <path fill="currentColor" d="M288 128h608L736 384l160 256H288v320h-96V64h96v64z"></path>
            </svg>
        </i>
    </button>
</template>

  
<script>    
export default {    
  data() {    
    return {    
      showPopover: true,  
      showCloseIcon: false    
    };    
  },    
  methods: {    
    togglePopover() {    
      this.showPopover = !this.showPopover;  
      this.showCloseIcon = this.showPopover ? false : true;  
    },  
    toggleCloseIcon() {  
      this.showPopover = false;  
      this.showCloseIcon = !this.showCloseIcon;  
    }  
  }    
};    
</script>