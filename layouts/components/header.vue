<template>
  <header class="navbar header-sticky">
    <div
      class="
        mobile_menu
        fill-element
        flex
        align-items-center
        justify-content-space-between
      "
    >
      <div class="off-canvas-toggle-cover" style="opacity: 0">
        <div class="off-canvas-toggle">
          <span></span>
        </div>
      </div>
      <div>
        <nuxt-link to="/"
          ><img width="80" height="50" src="imgs/logo-mobile.png" alt=""
        /></nuxt-link>
      </div>
      <div>
        <nuxt-link to="/search"> <i class="fa fa-search"></i></nuxt-link>
        <!-- <span class="ti ti-layout-grid3"></span> -->
      </div>
    </div>
    <div class="fill-element pc_menu row flex align-items-center">
      <div class="col-lg-4 navbar-left flex align-items-center">
        <i class="fa fa-github"></i>
        <i class="fa fa-qq"></i>
        <img
          width="18"
          src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6bdafd801c878b10edb5fed5d00969e9.svg"
          alt=""
        />
      </div>
      <div class="col-lg-4 navbar-content">
        <h1>
          <nuxt-link to="/">WRITEPRESS</nuxt-link>
        </h1>
      </div>
      <div
        class="
          col-lg-4
          navbar-right
          flex
          align-items-center
          justify-content-space-around
        "
      >
        <nuxt-link to="/">首页</nuxt-link>
        <!-- <nuxt-link to="/search">搜索</nuxt-link> -->
        <nuxt-link to="/contact">联系我</nuxt-link>
        <div>
          <nuxt-link to="/search"> <i class="fa fa-search"></i></nuxt-link>
        </div>
        <!-- <div class="off-canvas-toggle-cover">
          <div class="off-canvas-toggle">
            <span></span>
          </div>
        </div> -->
      </div>
    </div>
  </header>
</template>
<script>
export default {
  mounted() {
    $(window).on('scroll', function () {
      const scroll = $(window).scrollTop()
      if (scroll < 245) {
        $('.header-sticky ').removeClass('sticky-bar')
      } else {
        $('.header-sticky').addClass('sticky-bar')
      }
    })
  },
}
</script>
<style lang="scss" scoped>
.navbar {
  height: var(--header-height);
  background: var(--theme-color);
  color: var(--white-color);
  border: 1px solid var(--theme-color);
  font-family: 'Radley', serif;

  .mobile_menu {
    display: none;
    padding: 0 50px;
    .ti,
    .fa-search {
      font-size: 24px;
    }
    .ti {
      margin-left: 30px;
    }
  }

  .navbar-left {
    padding-left: 50px;
    * {
      margin-right: 30px;
    }
  }
  h1 {
    text-transform: uppercase;
    letter-spacing: 10px;
    font-size: 2.75rem;
  }
  a {
    color: var(--white-color);
    font-weight: 600;
  }
  .fa {
    font-size: 18px;
  }
  .navbar-content {
    text-align: center;
  }
  .off-canvas-toggle > span {
    display: inline-block;
    width: 34px;
    height: 24px;
    border-bottom: 3px solid var(--white-color);
    position: relative;
    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      top: 0;
      width: 100%;
      height: 3px;
      background: var(--white-color);
    }
    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      bottom: 50%;
      width: 100%;
      height: 3px;
      transform: translateY(50%);
      background: var(--white-color);
    }
  }
}
</style>
