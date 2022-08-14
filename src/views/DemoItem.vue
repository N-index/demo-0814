<template>
  <div class="item-conainter">
    下面是画布内容
    <div class="canvas-container">

    </div>
   
  </div>
</template>

<script>

export default {
  name: 'DemoItem',
  mounted(){
    // 绘制一个圆
    const circleDom = document.createElement('div');
    circleDom.textContent = 'circle';
    circleDom.className = 'circle';
    circleDom.style.transform = `translate(${Math.random()*250}px,${Math.random()*250}px)`;

    // 将元素绘制到画布中
    const canvasContainer = this.$el.querySelector('.canvas-container');
    canvasContainer.appendChild(circleDom);
  }
}
</script>
<style>
.canvas-container{
  position: relative;
  width: 300px;
  height: 300px;
  background: #efefef;
  margin: 0 auto;
  
}
.circle{
  top: 0;
  left: 0;
  position:absolute;


  display: grid;
  place-items: center;
  
  width: 30px;
  height:30px;
  border-radius: 50%;
  background: red;
  font-size: 12px;;
  color:#fff;
}
</style>
