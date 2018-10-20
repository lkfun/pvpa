<template>
  <div>
    <input type="file" @change="uploads">
    <button @click="uploadAll">uploadAll</button>
    <p></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: [], // 显示图片所用 与上传没有关系（可选）
      formData: new FormData()// 在此处初始化时,即实例化 FormData
    }
  },
  methods: {
    uploads (e) {
      let file = e.target.files[0]
      this.formData.set('file', file)
    },
    uploadAll () {
      // 当点击上传时直接上传  服务器按照正常的多文件上传操作即可
      this.$axios.post('https://api.lkfun.cc/fixmidi', this.formData, {
        responseType: 'blob'
      }).then(res => {
        let blob = res.data
        let reader = new FileReader()
        reader.readAsDataURL(blob)
        reader.onload = (e) => {
          let a = document.createElement('a')
          a.download = this.formData.get('file').name
          a.href = e.target.result
          document.body.appendChild(a)
          a.click()
          document.body.removeChild(a)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
