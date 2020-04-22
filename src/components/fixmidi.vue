<template>
  <div>
    <p>请上传从<strong>FL Stuido</strong>宏导出的<strong>midi文件</strong></p>
    <p>再将修复后的文件<strong>导入UTAU</strong></p>
    <p>其他渠道获取的midi文件可能无法解析/生成</p>
    <input type="file" accept=".mid" @change="uploads">
    <button @click="uploadAll">上传</button>
    <p></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      address: 'https://www.bilibili.com/read/cv413002',
      formData: new FormData(), // 在此处初始化时,即实例化 FormData
      errorMessage: '对不起，文件无法解析'
    }
  },
  methods: {
    uploads (e) {
      let file = e.target.files[0]
      this.formData.set('file', file)
    },
    uploadAll () {
      if (this.formData.get('file') == null) {
        return
      }
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
        alert(this.errorMessage)
        console.log(err)
      })
    }
  }
}
</script>
