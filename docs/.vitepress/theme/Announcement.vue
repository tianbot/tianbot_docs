<!--Ref: http://jellyfin.work:6002/vitepress/gonggao.html#mycomponent-vue -->

<template>
    <!-- 浮动按钮 -->
    <div
        class="floating-btn"
        v-show="showButton"
        ref="floatingBtn"
        :style="btnStyle"
        @mousedown="startDrag"
        @touchstart="startDrag"
    >
        <span class="btn-icon">💬</span>
        <span class="btn-close" @click.stop="closeButton">×</span>
    </div>

    <!-- 弹出面板 -->
    <div class="popover" v-show="showPopover">
        <div class="header">
            <span class="title">📢 联系我们</span>
            <span class="close-icon" @click="closePopover">×</span>
        </div>
        <div class="body content">
            <p class="contact-info">竞赛咨询 / 产品购买</p>
            <p class="contact-detail">
                📞 13689205983<br/>
                📧 zhaojunjie@tianbot.com
            </p>
            <div class="button-container">
                <a href="https://tianbot.taobao.com/" target="_blank" class="action-btn primary">
                    🛒 店铺
                </a>
                <a href="/about" class="action-btn success">
                    👥 加群
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showButton: true,
            showPopover: false,
            isDragging: false,
            wasDragged: false,
            position: { x: 20, y: null },
            dragOffset: { x: 0, y: 0 },
            snapThreshold: 20,
        };
    },
    computed: {
        btnStyle() {
            const style = {};
            if (this.position.x <= window.innerWidth / 2) {
                style.left = this.position.x + 'px';
                style.right = 'auto';
            } else {
                style.right = (window.innerWidth - this.position.x - 50) + 'px';
                style.left = 'auto';
            }
            if (this.position.y !== null) {
                style.bottom = (window.innerHeight - this.position.y - 50) + 'px';
            }
            return style;
        }
    },
    mounted() {
        // 初始化位置：右下角
        this.position = {
            x: window.innerWidth - 70,
            y: window.innerHeight - 120
        };

        document.addEventListener('mousemove', this.onDrag);
        document.addEventListener('mouseup', this.stopDrag);
        document.addEventListener('touchmove', this.onDrag, { passive: false });
        document.addEventListener('touchend', this.stopDrag);
        window.addEventListener('resize', this.onResize);
    },
    beforeUnmount() {
        document.removeEventListener('mousemove', this.onDrag);
        document.removeEventListener('mouseup', this.stopDrag);
        document.removeEventListener('touchmove', this.onDrag);
        document.removeEventListener('touchend', this.stopDrag);
        window.removeEventListener('resize', this.onResize);
    },
    methods: {
        startDrag(e) {
            this.isDragging = true;
            this.wasDragged = false;
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            this.dragOffset = {
                x: clientX - this.position.x,
                y: clientY - this.position.y
            };
            e.preventDefault();
        },
        onDrag(e) {
            if (!this.isDragging) return;
            this.wasDragged = true;

            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;

            let newX = clientX - this.dragOffset.x;
            let newY = clientY - this.dragOffset.y;

            // 边界限制
            const btnSize = 50;
            newX = Math.max(0, Math.min(newX, window.innerWidth - btnSize));
            newY = Math.max(0, Math.min(newY, window.innerHeight - btnSize));

            this.position = { x: newX, y: newY };

            if (e.cancelable) e.preventDefault();
        },
        stopDrag(e) {
            if (!this.isDragging) return;
            this.isDragging = false;

            // 吸附到边缘
            const btnSize = 50;
            if (this.position.x < this.snapThreshold) {
                this.position.x = 10;
            } else if (this.position.x > window.innerWidth - btnSize - this.snapThreshold) {
                this.position.x = window.innerWidth - btnSize - 10;
            }

            // 如果没有拖动，则切换弹窗
            if (!this.wasDragged) {
                this.togglePopover();
            }
        },
        togglePopover() {
            this.showPopover = !this.showPopover;
        },
        closePopover() {
            this.showPopover = false;
        },
        closeButton() {
            this.showButton = false;
            this.showPopover = false;
        },
        onResize() {
            // 窗口变化时保持在可见范围内
            const btnSize = 50;
            this.position.x = Math.min(this.position.x, window.innerWidth - btnSize - 10);
            this.position.y = Math.min(this.position.y, window.innerHeight - btnSize - 10);
        }
    }
};
</script>

<style scoped>
.floating-btn {
    position: fixed;
    bottom: 100px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: grab;
    z-index: 1000;
    user-select: none;
    touch-action: none;
    transition: transform 0.2s, box-shadow 0.2s;
}

.floating-btn:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
}

.floating-btn:active {
    cursor: grabbing;
}

.btn-icon {
    font-size: 22px;
}

.btn-close {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #ff4757;
    color: white;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.2s;
}

.floating-btn:hover .btn-close {
    opacity: 1;
}

.popover {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 280px;
    z-index: 1001;
    border-radius: 12px;
    background: var(--vp-c-bg);
    border: 1px solid var(--vp-c-divider);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    overflow: hidden;
}

.header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title {
    font-size: 16px;
    font-weight: 600;
}

.close-icon {
    font-size: 20px;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.2s;
}

.close-icon:hover {
    opacity: 1;
}

.body {
    padding: 20px;
}

.contact-info {
    text-align: center;
    color: var(--vp-c-text-2);
    margin: 0 0 12px 0;
    font-size: 14px;
}

.contact-detail {
    text-align: center;
    color: var(--vp-c-text-1);
    margin: 0 0 16px 0;
    font-size: 14px;
    line-height: 1.8;
}

.button-container {
    display: flex;
    justify-content: center;
    gap: 12px;
}

.action-btn {
    padding: 8px 20px;
    border-radius: 20px;
    font-size: 14px;
    text-decoration: none;
    transition: all 0.3s;
    display: inline-flex;
    align-items: center;
    gap: 4px;
}

.action-btn.primary {
    background: #667eea;
    color: white;
}

.action-btn.success {
    background: #26de81;
    color: white;
}

.action-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
