// copy https://github.com/iofu728/blog/blob/master/docs/.vuepress/theme/components/Comment.vue
<template>
    <div id="gitalk-container" class="comment"></div>
</template>
<script>

  export default {
    mounted(){
      this.haveGitalk();
    },
    methods: {
      haveGitalk(){
        if (typeof Gitalk !== 'undefined' && Gitalk instanceof Function) {
          this.renderGitalk();
        } else {
          setTimeout(() => {this.haveGitalk()}, 1000)
        }
      },
      renderGitalk(){
        if (typeof Gitalk !== 'undefined' && Gitalk instanceof Function) {
          const gitalk = new Gitalk({
            clientID: '95cb2a882e11ac8aefeb',
            clientSecret: '6fcf26e3921b0e3ae7f54acdd49f319f04b11188',
            repo: 'WebColumns',
            owner: 'huixisheng',
            admin: ['huixisheng'],
            id: 'comment',
            distractionFreeMode: false,
            language: 'zh-CN',
          })
          try {
            document && gitalk.render("gitalk-container");
          } catch (e) {
            console.error(e.message)
          }
        }
      }
    }

  }
</script>
<style lang="stylus">
  .comment
    padding 1rem
    margin 0 auto
    width 100%

</style>