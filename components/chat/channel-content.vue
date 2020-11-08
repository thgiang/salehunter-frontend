<template>
  <div class="channel-content">
    <div class="content__conversation px-2">
      <div v-for="i in 5" :key="i">
        <div class="conversation-time">
          T7 15:04
        </div>
        <div class="conversation conversation-left">
          <img
            class="conversation-avatar"
            src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/cp0/p60x60/13903262_284034591973523_6079309715779757119_n.jpg?_nc_cat=101&ccb=2&_nc_sid=7206a8&_nc_ohc=LwVp-pm7vdUAX_mmBjy&_nc_ht=scontent.fhan2-1.fna&tp=27&oh=cea212cefa4b643d0996bdbef2f8d65f&oe=5FCED0F9"
          >
          <div class="lines">
            <div class="line-bounder__line">
              :)) thế anh dùng gì
            </div>
            <div class="line-bounder__line">
              À :))
            </div>
            <div class="line-bounder__line">
              Em diễn tả sai
            </div>
            <div class="line-bounder__line">
              Chứ vẫn hiểu đúng
            </div>
          </div>
        </div>

        <div class="conversation conversation-right">
          <div class="lines">
            <div class="line-bounder__line-bounder">
              <div class="line-bounder__line">
                :)) thế anh dùng gì
              </div>
              <i class="fa fa-check-circle line__status--success" />
            </div>
            <div class="line-bounder__line-bounder">
              <div class="line-bounder__line">
                :)) thế anh dùng gì
              </div>
              <i class="fa fa-check-circle line__status--success" />
            </div>
          </div>
        </div>

        <div class="conversation conversation-left">
          <img
            class="conversation-avatar"
            src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/cp0/p60x60/13903262_284034591973523_6079309715779757119_n.jpg?_nc_cat=101&ccb=2&_nc_sid=7206a8&_nc_ohc=LwVp-pm7vdUAX_mmBjy&_nc_ht=scontent.fhan2-1.fna&tp=27&oh=cea212cefa4b643d0996bdbef2f8d65f&oe=5FCED0F9"
          >
          <div class="lines">
            <div class="line-bounder__line">
              Ok anh
            </div>
          </div>
        </div>

        <div class="conversation conversation-right">
          <div class="lines">
            <div class="line-bounder__line-bounder">
              <div class="line-bounder__line">
                :)) thế anh dùng gì
              </div>
              <i class="fa fa-check-circle line__status--success" />
            </div>
            <div class="line-bounder__line-bounder">
              <div class="line-bounder__line">
                :)) thế anh dùng gì
              </div>
              <i class="fa fa-check-circle line__status--success" />
            </div>
            <div class="line-bounder__line-bounder">
              <div class="line-bounder__line">
                :)) thế anh dùng gì
              </div>
              <i class="fa fa-check-circle line__status--success" />
            </div>
            <div class="line-bounder__line-bounder">
              <div class="line-bounder__line">
                :)) thế anh dùng gì
              </div>
              <i class="far fa-circle line__status--sending" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content__chatbox px-2">
      <channel-content-chatbox />
    </div>
  </div>
</template>

<script>
import ChannelContentChatbox from './channel-content-chatbox'

export default {
  name: 'ChannelContent',
  components: { ChannelContentChatbox }
}
</script>

<style scoped lang="scss">
  .channel-content {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .content__conversation {
    height: calc(100vh - 200px);
    flex-grow: 1;
    overflow-y: auto;

    .conversation-time {
      color: var(--text-gray);
      text-align: center;
      display: block;
      margin: 10px auto;
      font-size: 0.8rem;
    }

    .conversation {
      display: flex;
      align-items: flex-end;
      margin-bottom: 20px;

      .conversation-avatar {
        border-radius: 50%;
        width: 28px;
        height: 28px;
      }

      .lines {
        .line-bounder__line {
          padding: 6px 12px;
          margin-top: 2px;
        }
      }
    }

    .conversation-left {
      .conversation-avatar {
        margin-right: 0.5rem;
      }

      .line-bounder__line {
        background: var(--background-gray);
        border-top-right-radius: 1.3rem;
        border-bottom-right-radius: 1.3rem;
      }

      .line-bounder__line:first-child {
        border-top-left-radius: 1.3rem;
      }

      .line-bounder__line:last-child {
        border-bottom-left-radius: 1.3rem;
      }
    }

    .conversation-right {
      justify-content: flex-end;

      .conversation-avatar {
        margin-left: 0.5rem;
      }

      .line-bounder__line {
        background: var(--blue-color);
        color: #FFF;
        border-top-left-radius: 1.3rem;
        border-bottom-left-radius: 1.3rem;
        margin-right: 5px;
      }

      .line-bounder__line-bounder {
        display: flex;
        align-items: flex-end;
        .fa, .far, .fas {
          font-size: 0.6rem;
          color: rgba(134, 142, 153, 0.5);
        }
      }

      .line-bounder__line-bounder:first-child .line-bounder__line {
        border-top-right-radius: 1.3rem;
      }

      .line-bounder__line-bounder:last-child .line-bounder__line {
        border-bottom-right-radius: 1.3rem;
      }
    }
  }

  .content__chatbox {
    flex: 0 0 40px;
  }
</style>
